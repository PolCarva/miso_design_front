import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedCursor from "react-animated-cursor";

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
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="0, 0, 0"
          trailingSpeed={0.001}
          outerAlpha={0}
          innerScale={0}
          outerScale={5}
          innerStyle={{ display: 'var(--cursor-display)'}}
          outerStyle={{ display: 'var(--cursor-display)', border: '1px solid black'}} 
        />

        <Header />
        <main className="min-h-[75svh] md:min-h-[68svh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
