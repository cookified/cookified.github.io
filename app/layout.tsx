import type { Metadata } from "next";
import ToasterHost from "@/components/ToasterHost";
import "./globals.css";

export const metadata: Metadata = {
  title: "mithun chakladar — design engineer",
  description:
    "springs that settle the way your hand expects. interfaces, motion, and the code behind the feeling.",
  authors: [{ name: "Mithun Chakladar" }],
  openGraph: {
    title: "mithun chakladar",
    description: "design engineer · new delhi",
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

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark");}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-paper text-ink antialiased">
        {children}
        <ToasterHost />
      </body>
    </html>
  );
}
