import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Maxim Petrov — Fullstack Developer & AI Creator",
  description:
    "Fullstack developer specializing in Next.js, TypeScript, and AI tools. Building modern web applications and exploring blockchain technologies.",
  keywords: [
    "developer",
    "next.js",
    "typescript",
    "fullstack",
    "ai",
    "crypto",
    "web development",
  ],
  authors: [{ name: "Maxim Petrov", url: "https://github.com/maksimpet557-dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maximpetrov.dev",
    siteName: "Maxim Petrov Portfolio",
    title: "Maxim Petrov — Fullstack Developer & AI Creator",
    description:
      "Fullstack developer specializing in Next.js, TypeScript, and AI tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxim Petrov — Fullstack Developer",
    description:
      "Building modern web applications with Next.js and exploring AI technologies.",
    creator: "@maksimshtrih",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
