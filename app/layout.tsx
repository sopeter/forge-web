import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import ScrollReveal from "./components/ScrollReveal";

const displayFont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forge — AI-Powered Training",
  description:
    "Forge uses your body composition data to generate and continuously adapt a training program built specifically for you.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={displayFont.variable}>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
