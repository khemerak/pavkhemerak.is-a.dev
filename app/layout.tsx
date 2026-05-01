import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NavBar } from "@/components/NavBar";
import { BottomNavBar } from "@/components/BottomNavBar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "pavkhemerak.dev",
  description:
    "Full-stack engineer specializing in high-performance distributed systems.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0D0D0D] text-on-surface font-body text-body selection:bg-primary-container selection:text-background min-h-screen flex flex-col antialiased pb-16 md:pb-0 scrollbar-terminal">
        <NavBar />
        <main className="grow pt-16 md:pt-20 pb-0">{children}</main>
        <Footer />
        <BottomNavBar />
        <SpeedInsights />
      </body>
    </html>
  );
}
