import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/layout/TopNavbar";
import BottomNavbar from "@/components/layout/BottomNavbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "rohitshah.dev",
  description: "rohitshah.dev portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TopNavbar/>
       
        
        {children}
         <BottomNavbar/>
        <Footer/>
        </body>
    </html>
  );
}
