import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ali Wael — Full-Stack Developer",
  description:
    "Full-stack developer in Cairo building web platforms, mobile apps and backends. React, Next.js, Flutter, React Native, Node, Django.",
  openGraph: {
    title: "Ali Wael — Full-Stack Developer",
    description:
      "Full-stack developer in Cairo building web platforms, mobile apps and backends.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} grain`}>
        {children}
      </body>
    </html>
  );
}
