import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarTop from "@/app/components/layout/NavbarTop";
import Navbar from "./components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Food Tuck",
  description: "A Restaurant Website with Multiple Pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarTop/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
