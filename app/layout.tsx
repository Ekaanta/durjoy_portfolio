import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Durjoy — Project Manager & QA Specialist",
  description: "Portfolio of Ekanta Banik Durjoy, Project Manager and QA Specialist bridging product vision, QA rigor, and cross-functional team execution.",
  keywords: ["Project Manager", "QA Specialist", "Agile", "Scrum", "Automation", "Playwright", "C#", "Next.js"],
  authors: [{ name: "Ekanta Banik Durjoy" }],
  openGraph: {
    title: "Durjoy — Project Manager & QA Specialist",
    description: "Bridging product vision, QA rigor, and team execution.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
