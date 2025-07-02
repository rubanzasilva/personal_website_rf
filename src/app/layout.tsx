import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rubanza Silver - Machine Learning Engineer & Full-Stack Developer",
  description: "Portfolio of Rubanza Silver, a Machine Learning Engineer and Full-Stack Developer specializing in PyTorch, fastai, React, and Next.js",
  keywords: "Machine Learning, Full-Stack Development, PyTorch, fastai, React, Next.js, Python",
  authors: [{ name: "Rubanza Silver" }],
  openGraph: {
    title: "Rubanza Silver - Machine Learning Engineer & Full-Stack Developer",
    description: "Portfolio showcasing machine learning and web development projects",
    type: "website",
    url: "https://rubanzasilver.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}