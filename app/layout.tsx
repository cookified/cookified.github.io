import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import ToasterHost from "@/components/ToasterHost";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mithun Chakladar — Backend & Full-Stack Developer",
  description:
    "Backend & full-stack developer in New Delhi. Builds thoughtful web apps with a focus on backend design, security, and reliability.",
  authors: [{ name: "Mithun Chakladar" }],
  openGraph: {
    title: "Mithun Chakladar",
    description: "Backend & Full-Stack Developer · New Delhi",
    type: "website",
  },
  icons: {
    icon: "/mithun.svg",
    shortcut: "/mithun.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable} antialiased bg-canvas text-ink`}
      >
        {children}
        <ToasterHost />
      </body>
    </html>
  );
}
