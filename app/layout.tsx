import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-20 bg-neutral-950 text-slate-200">
        <div className="relative overflow-hidden flex-1 flex flex-col">
          <div className="absolute top-0 left-0 w-100 h-100 bg-purple-600/30 blur-[120px] pointer-events-none z-0 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-100 h-100 bg-emerald-500/30 blur-[120px] pointer-events-none z-0 animate-pulse" />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
