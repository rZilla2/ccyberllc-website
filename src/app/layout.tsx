import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Convergent Cyber Solutions | Trusted Strategic & Cybersecurity Advisors",
  description: "Elite strategic advisory for growth-focused cybersecurity firms in the federal and commercial sectors.",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", inter.variable, outfit.variable)}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-black text-foreground overflow-x-hidden max-w-[100vw]">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
