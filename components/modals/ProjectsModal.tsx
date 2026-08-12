"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const slides = [
  {
    title: "Virtual Try-On System (AI GenAI App)",
    subtitle: "Stable Diffusion & OpenCV Body Segmentation",
    image: "/images/project-virtual-tryon.png",
    description: "AI-powered clothing virtual try-on app using Stable Diffusion Inpainting. Users upload a photo and describe clothing via text prompt; system generates realistic try-on results using GrabCut body segmentation. Tech: Python, Stable Diffusion, Diffusers, OpenCV, Gradio, HuggingFace Spaces.",
    live: "https://ekantabanik-virtual-try-on.hf.space",
    github: "https://github.com/Ekaanta/Virtual-Try-On-System"
  },
  {
    title: "Client Requirement Analyzer Agent (Agentic AI)",
    subtitle: "LLM, LangChain & Document AI Engine",
    image: "/images/project-requirement-analyzer.png",
    description: "Agentic AI system analyzing client documents and extracting structured business requirements. Leverages LLMs for deep document understanding, requirement classification, and natural language report generation. Tech: Python, LLM, LangChain, Prompt Engineering, NLP, Vercel.",
    live: "https://client-requirement-analyzer-agent.vercel.app/",
    github: "https://github.com/Ekaanta/Client-Requirement-Analyzer-Agent"
  },
  {
    title: "N8N AI Model Automation",
    subtitle: "Multi-Step Workflow Orchestration",
    image: "/images/project-n8n-automation.png",
    description: "Designed multi-step AI automation workflows using N8N, orchestrating LLM agents, external APIs, and data pipelines. Features agentic task delegation, conditional branching, and process automation. Tech: N8N, LLM Integration, Agentic AI, API Orchestration, Python.",
    github: "https://github.com/Ekaanta/N8N_AI-MODEL"
  },
  {
    title: "Real-Time Cheat Detection System",
    subtitle: "YOLOv8 & Computer Vision Video Analysis",
    image: "/images/project-cheat-detection.png",
    description: "AI-powered exam cheat detection using YOLOv8. Collected & annotated custom datasets using Roboflow, trained object detection models, and performed real-time video analysis to identify suspicious exam activities. Tech: Roboflow, Matplotlib, OpenCV, Object Detection, Computer Vision.",
    github: "https://github.com/Ekaanta/Ai_Project-Real-time-cheat-detection-system-exam"
  },
  {
    title: "Bangladesh AI Agent (LLM Assistant)",
    subtitle: "Conversational AI for Institutions, Hospitals & Services",
    image: "/images/project-bangladesh-ai-agent.png",
    description: "Intelligent conversational AI agent for querying Bangladesh healthcare, educational institutions, restaurants, and policies. Built with prompt engineering, custom frontend, and API backend.",
    github: "https://github.com/Ekaanta"
  },
  {
    title: "Bornolipi AR Educational App",
    subtitle: "Augmented Reality Bengali Learning",
    image: "/images/bornolipi-cover.png",
    description: "Directed AR learning app project from planning to delivery. Oversaw QA processes, validated AR features, and coordinated testing efforts across Android and iOS platforms.",
    github: "https://github.com/Ekaanta"
  },
  {
    title: "Coupon Management & Volunteering Systems",
    subtitle: "Mobile Automation & Postman API Testing",
    image: "/images/app-flow.png",
    description: "Managed mobile automation testing project for Android and iOS applications with Python test scripts, organized test cases, bug tracking, and Postman API validation.",
    github: "https://github.com/Ekaanta"
  }
];

export default function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "850px" }}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div style={{ marginBottom: "1.25rem" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "var(--purple-primary)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
            Project {currentSlide + 1} of {slides.length} • REAL PROJECT SHOWCASE
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.6rem", fontWeight: 800, margin: "0.2rem 0" }}>
            {slide.title}
          </h2>
          <div style={{ fontSize: "0.85rem", color: "var(--ink-muted)" }}>{slide.subtitle}</div>
        </div>

        <div style={{ background: "#111", borderRadius: "var(--radius-md)", overflow: "hidden", position: "relative", marginBottom: "1.25rem", aspectRatio: "16 / 10", border: "1px solid var(--purple-border)" }}>
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="(max-width: 900px) 100vw, 850px"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <p style={{ fontSize: "0.9rem", color: "var(--ink-secondary)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
          {slide.description}
        </p>

        {/* Live and GitHub links */}
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
          {slide.live && (
            <a href={slide.live} target="_blank" rel="noopener noreferrer" className="btn-hire-gold" style={{ width: "auto", padding: "0.55rem 1.25rem", fontSize: "0.82rem" }}>
              Live Application ↗
            </a>
          )}
          {slide.github && (
            <a href={slide.github} target="_blank" rel="noopener noreferrer" className="read-more-btn" style={{ padding: "0.55rem 1.25rem", fontSize: "0.82rem" }}>
              GitHub Source ↗
            </a>
          )}
        </div>

        {/* Navigation Controls */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
          <button onClick={prevSlide} className="read-more-btn" style={{ padding: "0.6rem 1.25rem" }}>
            ← Previous
          </button>

          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", justifyContent: "center" }}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: idx === currentSlide ? "22px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: idx === currentSlide ? "var(--purple-primary)" : "var(--purple-border)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.25s ease"
                }}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="btn-hire-gold" style={{ width: "auto", padding: "0.6rem 1.25rem" }}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
