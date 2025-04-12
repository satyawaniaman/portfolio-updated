import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name | Full-Stack Developer",
  description: "Full-stack developer portfolio showcasing skills, projects and expertise in web development.",
  keywords: ["developer", "portfolio", "full-stack", "web development", "Next.js", "React"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Your Name | Full-Stack Developer",
    description: "Full-stack developer portfolio showcasing skills, projects and expertise in web development.",
    siteName: "Your Name Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Full-Stack Developer",
    description: "Full-stack developer portfolio showcasing skills, projects and expertise in web development.",
    creator: "@yourusername",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
