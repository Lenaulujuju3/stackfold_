import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { PageTransition } from "./(components)/transitions";
import { metadata } from "./metadata";

const geistSans = Inter({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = JetBrains_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
