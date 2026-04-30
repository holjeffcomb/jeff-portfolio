import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
