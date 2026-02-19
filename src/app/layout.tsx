import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

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
    default: "Sloppy - Your Productivity Partner",
    template: "%s | Sloppy",
  },
  description: "Sloppy helps you organize tasks, track projects, and boost productivity with an intuitive dashboard and powerful features.",
  keywords: ["productivity", "task management", "project tracking", "dashboard", "organization", "workflow"],
  authors: [{ name: "Sloppy Team" }],
  creator: "Sloppy Team",
  publisher: "Sloppy Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sloppy.example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sloppy.example.com",
    title: "Sloppy - Your Productivity Partner",
    description: "Sloppy helps you organize tasks, track projects, and boost productivity with an intuitive dashboard and powerful features.",
    siteName: "Sloppy",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sloppy Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sloppy - Your Productivity Partner",
    description: "Sloppy helps you organize tasks, track projects, and boost productivity with an intuitive dashboard and powerful features.",
    images: ["/og-image.svg"],
    creator: "@sloppyapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}