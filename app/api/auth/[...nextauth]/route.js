// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

export const authOptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET, // important for production

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github") {
        try {
          // Try connecting to DB, but don’t fail if it’s not available
          await connectDb().catch(() => null);

          const existingUser = await User.findOne({ email: user.email }).catch(() => null);
          if (!existingUser) {
            await User.create({
              email: user.email,
              username: user.email.split("@")[0],
            }).catch(() => null);
          }
        } catch (err) {
          console.warn("Database not available, continuing without DB.");
        }
        return true; // Always allow login even if DB fails
      }
      return true;
    },

    async session({ session }) {
      try {
        await connectDb().catch(() => null);
        const dbUser = await User.findOne({ email: session.user.email }).catch(() => null);
        if (dbUser) session.user.name = dbUser.username;
      } catch (err) {
        console.warn("Database not available, sending session without DB info.");
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
});

export { authOptions as GET, authOptions as POST };

