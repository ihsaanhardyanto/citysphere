import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Citysphere",
  description: "Made with 💖 by Kelompok 6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} flex h-dvh w-full flex-col font-poppins`}
      >
        <Navbar />
        <main className="max-h-[calc(100svh-4.5rem)] w-full overflow-auto">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
