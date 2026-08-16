"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight, Layers } from "lucide-react";

interface ProjectsSectionProps {
  onOpenProjectsModal: (index: number) => void;
}

const projects = [
  {
    num: "01",
    title: "Virtual Try-On System (AI GenAI)",
    description: "AI-powered clothing virtual try-on app using Stable Diffusion Inpainting, GrabCut body segmentation, OpenCV, Diffusers & HuggingFace Spaces.",
    image: "/images/project-virtual-tryon.png",
    tags: ["Python", "Stable Diffusion", "OpenCV", "Gradio", "HuggingFace"],
    live: "https://ekantabanik-virtual-try-on.hf.space",
    github: "https://github.com/Ekaanta/Virtual-Try-On-System"
  },
  {
    num: "02",
    title: "Client Requirement Analyzer Agent (Agentic AI)",
    description: "Agentic AI system that intelligently analyzes client documents and extracts structured business requirements using LLMs, LangChain & NLP.",
    image: "/images/project-requirement-analyzer.png",
    tags: ["Agentic AI", "LangChain", "LLM", "Prompt Eng", "Document AI"],
    live: "https://client-requirement-analyzer-agent.vercel.app/",
    github: "https://github.com/Ekaanta/Client-Requirement-Analyzer-Agent"
  },
  {
    num: "03",
    title: "N8N AI Model Automation (Workflow Pipelines)",
    description: "Multi-step AI automation workflows using N8N, orchestrating LLM agents, external APIs, conditional branching, and process automation.",
    image: "/images/project-n8n-automation.png",
    tags: ["N8N", "Workflow Automation", "LLM Agents", "Python", "API"],
    github: "https://github.com/Ekaanta/N8N_AI-MODEL"
  },
  {
    num: "04",
    title: "Real-Time Cheat Detection System (Computer Vision)",
    description: "AI-powered exam cheat detection using YOLOv8, Roboflow custom dataset, Matplotlib, OpenCV, and real-time video analysis.",
    image: "/images/project-cheat-detection.png",
    tags: ["YOLOv8", "Computer Vision", "Roboflow", "OpenCV", "Python"],
    github: "https://github.com/Ekaanta/Ai_Project-Real-time-cheat-detection-system-exam"
  },
  {
    num: "05",
    title: "Bangladesh AI Agent (LLM Assistant)",
    description: "Intelligent conversational AI agent for Bangladesh healthcare, institutions, restaurants, and policy inquiry with custom UI.",
    image: "/images/project-bangladesh-ai-agent.png",
    tags: ["LLM Agent", "Prompt Eng", "Node.js", "AI Assistant"],
    github: "https://github.com/Ekaanta"
  },
  {
    num: "06",
    title: "Bornolipi Android & iOS Augmented Reality App",
    description: "Directed AR learning app project from planning to delivery. Oversaw QA processes, validated AR features, and coordinated testing efforts.",
    image: "/images/bornolipi-cover.png",
    tags: ["Augmented Reality", "QA Oversight", "App Testing", "Agile PM"],
    github: "https://github.com/Ekaanta"
  },
  {
    num: "07",
    title: "Coupon Management & Volunteering Systems",
    description: "Managed mobile automation testing project for Android/iOS with Python test scripts and led Postman API testing & bug tracking.",
    image: "/images/app-flow.png",
    tags: ["Python Automation", "Postman API", "Bug Tracking", "QA"],
    github: "https://github.com/Ekaanta"
  }
];

export default function ProjectsSection({ onOpenProjectsModal }: ProjectsSectionProps) {
  return (
    <section className="section-wrapper" id="projects">
      <div className="section-tag" style={{ fontFamily: "'Poppins', sans-serif" }}>SELECTED REAL PROJECTS</div>
      <h2 className="section-title-large" style={{ fontFamily: "'Poppins', sans-serif" }}>
        Built to Scale,<br /><em>Made to Perform</em>
      </h2>

      {/* Grid of Clean Project Cards matching Deliverables style */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.35rem"
        }}
      >
        {projects.map((proj, idx) => (
          <div
            key={proj.num}
            className="what-card fade-up"
            onClick={() => onOpenProjectsModal(idx)}
            style={{
              background: "var(--bg-card-white)",
              border: "1px solid var(--sandy-amber)",
              borderRadius: "var(--radius-md)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1rem",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            {/* Top Thumbnail Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 10",
                borderRadius: "var(--radius-sm)",
                overflow: "hidden",
                border: "1px solid var(--purple-border)",
                background: "#111"
              }}
            >
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0.6rem",
                  left: "0.6rem",
                  background: "var(--purple-primary)",
                  color: "#ffffff",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  padding: "0.2rem 0.55rem",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "'Poppins', sans-serif"
                }}
              >
                PROJ {proj.num}
              </div>
            </div>

            {/* Title & Description */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              <h3
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  margin: 0,
                  lineHeight: 1.35
                }}
              >
                {proj.title}
              </h3>
              <p
                style={{
                  fontSize: "0.84rem",
                  color: "var(--ink-muted)",
                  lineHeight: 1.55,
                  margin: 0
                }}
              >
                {proj.description}
              </p>
            </div>

            {/* Tags */}
            <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
              {proj.tags.slice(0, 3).map((t, i) => (
                <span
                  key={i}
                  className="type-badge"
                  style={{ fontSize: "0.66rem", padding: "0.2rem 0.5rem" }}
                >
                  {t}
                </span>
              ))}
              {proj.tags.length > 3 && (
                <span
                  className="type-badge"
                  style={{ fontSize: "0.66rem", padding: "0.2rem 0.5rem", background: "var(--bg-card)" }}
                >
                  +{proj.tags.length - 3}
                </span>
              )}
            </div>

            {/* Action Buttons Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid var(--border)",
                paddingTop: "0.85rem",
                marginTop: "0.25rem",
                gap: "0.5rem",
                flexWrap: "wrap"
              }}
            >
              <div style={{ display: "flex", gap: "0.4rem" }}>
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more-btn"
                    style={{
                      background: "var(--purple-primary)",
                      color: "#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      padding: "0.35rem 0.75rem",
                      fontSize: "0.75rem"
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more-btn"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      padding: "0.35rem 0.75rem",
                      fontSize: "0.75rem"
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={12} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenProjectsModal(idx);
                }}
                className="row-arrow-btn"
                style={{ width: "34px", height: "34px", fontSize: "0.9rem" }}
                aria-label={`View ${proj.title} Details`}
                title={`View ${proj.title} Details`}
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
