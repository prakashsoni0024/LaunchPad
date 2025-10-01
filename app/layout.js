import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SessionWrapper from "../components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LaunchPad - Startup Funding Platform",
  description: "A crowdfunding platform for startups to raise funds and bring their ideas to life.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white"
      >
        <SessionWrapper>
          <Navbar />
          <div className="text-white min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            {children}
          </div>

          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
