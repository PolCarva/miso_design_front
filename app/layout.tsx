import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MISO DESIGN | 味噌デザイン",
  description:
    "In search of the essence of things, I am on a journey to improve the lives of others. I will work hard to achieve this.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <Header />
        <main className="min-h-[75svh] md:min-h-[68svh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
