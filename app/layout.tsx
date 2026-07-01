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
  title: "My Finale Portfolio",
  description: "Showcasing my projects and skills",
  icons: {
    icon: "/portfolioIcon.png",
    shortcut: "/portfolioIcon.ico",
    apple: "/portfolioIcon.png",
  }
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
      <body className="min-h-full flex flex-col pt-20 bg-neutral-950 text-slate-200 no-scrollbar">
        <div className="relative overflow-hidden flex-1 flex flex-col">
          <div className="absolute top-0 left-0 w-100 h-100 bg-emerald-600/40 blur-[120px] pointer-events-none z-0 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-100 h-100 bg-purple-500/40 blur-[120px] pointer-events-none z-0 animate-pulse" />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
