import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ekanta Banik (Durjoy) — Software Project Coordinator & AI Specialist",
  description: "Portfolio of Ekanta Banik (Durjoy), Software Project Coordinator and AI Specialist specializing in Large Language Models (LLMs), Agentic AI, Computer Vision, and Agile Software Delivery.",
  keywords: ["Software Project Coordinator", "AI Specialist", "AI Engineer", "ML Engineer", "LLM", "Agentic AI", "LangChain", "FastAPI", "Agile", "Scrum", "Next.js"],
  authors: [{ name: "Ekanta Banik (Durjoy)" }],
  openGraph: {
    title: "Ekanta Banik (Durjoy) — Software Project Coordinator & AI Specialist",
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
