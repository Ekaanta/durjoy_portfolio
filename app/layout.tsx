import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ekanta Banik (Durjoy) — AI/ML Engineer & Project Coordinator",
  description: "Portfolio of Ekanta Banik (Durjoy), AI/ML Engineer and Technical Project Coordinator specializing in LLMs, Agentic AI, Computer Vision, and Agile Software Delivery.",
  keywords: ["AI Engineer", "ML Engineer", "LLM", "Agentic AI", "LangChain", "FastAPI", "Project Coordinator", "Agile", "Scrum", "Next.js"],
  authors: [{ name: "Ekanta Banik (Durjoy)" }],
  openGraph: {
    title: "Ekanta Banik (Durjoy) — AI/ML Engineer & Project Coordinator",
    description: "Building intelligent AI agents, LLM automation pipelines, and leading agile software delivery.",
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
