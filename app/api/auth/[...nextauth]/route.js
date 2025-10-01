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
    // Runs on every sign-in
    async signIn({ user, account }) {
      if (account.provider === "github") {
        try {
          await connectDb();

          // Ensure user exists in DB
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            await User.create({
              email: user.email,
              username: user.email.split("@")[0],
            });
          }
          return true;
        } catch (err) {
          console.error("SignIn Error:", err);
          return false; // stops login if DB fails
        }
      }
      return true;
    },

    // Modify session object before sending to client
    async session({ session }) {
      try {
        await connectDb();
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) session.user.name = dbUser.username;
      } catch (err) {
        console.error("Session Callback Error:", err);
      }
      return session;
    },
  },

  // Optional: specify pages for sign in / error
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
});

export { authOptions as GET, authOptions as POST };
