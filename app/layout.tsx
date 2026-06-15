import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Velor Capital",
    template: "%s | Velor Capital",
  },
  description:
    "Institutional investment firm focused on disciplined capital allocation, market research, and long-term value creation.",
  keywords: [
    "investment firm",
    "capital management",
    "portfolio management",
    "market research",
    "wealth creation",
    "investor relations",
    "velor capital",
  ],
  authors: [
    {
      name: "Velor Capital",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}