import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import ToasterHost from "@/components/ToasterHost";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mithun Chakladar — Backend & Full-Stack Developer",
  description:
    "Design-minded backend & full-stack developer in New Delhi — builds quiet, reliable web apps that feel nice to use.",
  authors: [{ name: "Mithun Chakladar" }],
  openGraph: {
    title: "Mithun Chakladar",
    description: "Backend & Full-Stack Developer — design-minded · New Delhi",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "icon", url: "/icon-192.png", sizes: "192x192" }],
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
        className={`${dmSans.variable} antialiased bg-canvas text-ink`}
      >
        {children}
        <ToasterHost />
      </body>
    </html>
  );
}
