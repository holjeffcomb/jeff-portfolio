import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeff Holcomb | Technical Creative",
  description:
    "Lighting design, show systems, and web development. Designing systems for live and digital experiences.",
  metadataBase: new URL("https://jeff-holcomb.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
