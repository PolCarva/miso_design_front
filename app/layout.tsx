import "./globals.css"; // Asegúrate de que aquí estás importando globalmente si es necesario
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedCursor from "react-animated-cursor";
import { Metadata } from "next";

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
      <body className="font-roboto bg-background"> {/* Aplica la clase font-roboto aquí */}
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="0, 0, 0"
          clickables={[
            "[data-clickable='true']",
            "clickable",
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "option",
            "label",
          ]}
          innerScale={0}
          outerScale={5}
          outerAlpha={0}
          trailingSpeed={1}
          outerStyle={{ display: "var(--cursor-display)", border: "1px solid black" }}
        />

        <Header />
        <main className="min-h-[75svh] md:min-h-[68svh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
