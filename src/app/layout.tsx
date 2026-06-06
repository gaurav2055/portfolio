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
  title: "Gaurav Suvarna — Full Stack Developer",
  description:
    "Full Stack Developer with 3+ years of experience building production-grade web applications. M.S. Computer Science at Clemson University. Open to full-stack and software engineering roles.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Gaurav Suvarna"],
  authors: [{ name: "Gaurav Suvarna" }],
  openGraph: {
    title: "Gaurav Suvarna — Full Stack Developer",
    description:
      "Full Stack Developer with 3+ years of experience. M.S. CS at Clemson University.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-[#0d0d0d] text-[#f0f0f0]">{children}</body>
    </html>
  );
}
