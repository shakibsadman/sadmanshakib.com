import { Metadata } from "next/types";
import localFont from "next/font/local";
import { Suspense } from "react";
import Analytics from "@/components/analytics";

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
  title: {
    default: "Sadman Shakib - Full Stack Developer & MVP Specialist",
    template: "%s | Sadman Shakib"
  },
  description: "Full Stack Developer specializing in MVP development for startups and scaleups. Expert in Next.js, React, TypeScript, and modern web technologies. Fast, reliable, and scalable solutions.",
  keywords: [
    "Full Stack Developer",
    "MVP Development",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Development",
    "Startup MVP",
    "SaaS Development",
    "Frontend Developer",
    "Backend Developer",
    "Sadman Shakib",
    "Portfolio",
    "Software Engineer"
  ],
  authors: [{ name: "Sadman Shakib", url: "https://sadmanshakib.com" }],
  creator: "Sadman Shakib",
  publisher: "Sadman Shakib",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sadmanshakib.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sadmanshakib.com",
    title: "Sadman Shakib - Full Stack Developer & MVP Specialist",
    description: "Full Stack Developer specializing in MVP development for startups and scaleups. Expert in Next.js, React, TypeScript, and modern web technologies.",
    siteName: "Sadman Shakib",
    images: [
      {
        url: "/dr_sadman_shakib.jpg",
        width: 1200,
        height: 630,
        alt: "Sadman Shakib - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadman Shakib - Full Stack Developer & MVP Specialist",
    description: "Full Stack Developer specializing in MVP development for startups and scaleups. Expert in Next.js, React, TypeScript, and modern web technologies.",
    images: ["/dr_sadman_shakib.jpg"],
    creator: "@sadmanshakib",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/portfolioLogo.png",
    shortcut: "/portfolioLogo.png",
    apple: "/portfolioLogo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://sadmanshakib.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <main>{children}</main>
      </body>
    </html>
  );
}
