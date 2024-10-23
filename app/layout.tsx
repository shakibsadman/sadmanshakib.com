import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/home/navbar";
import { cn } from "@/lib/utils";
import "./globals.css";

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
  title: "Sadman Shakib - Next.js Developer",
  description:
    "I'm a Next.js developer with a passion for building scalable and efficient web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {" "}
        <main
          className={cn(
            "flex  relative  break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]",
            { "bg-white": "#E6E7EB" }
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
