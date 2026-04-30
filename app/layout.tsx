import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeff Holcomb · Lighting Designer",
  description:
    "Lighting design, programming, and operation. Tours, festivals, and live production.",
  metadataBase: new URL("https://jeffholcomblights.com"),
  openGraph: {
    title: "Jeff Holcomb · Lighting Designer",
    description:
      "Lighting design, programming, and operation. Tours, festivals, and live production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
