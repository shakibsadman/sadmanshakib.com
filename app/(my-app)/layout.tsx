import { Metadata } from "next/types";
import localFont from "next/font/local";

import "./globals.css";
import "../styles/prism.css";

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
  title: "ShakMVP - Next.js MVP",
  description: "Building MVPs for startups and scaleups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <main>{children}</main>
      </body>
    </html>
  );
}
