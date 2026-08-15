"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

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
      <div className="section-tag">SELECTED REAL PROJECTS</div>
      <h2 className="section-title-large">
        Built to Scale,<br /><em>Made to Perform</em>
      </h2>

      <div className="projects-rows-list">
        {projects.map((proj, idx) => (
          <div
            key={proj.num}
            className="project-row-item fade-up"
            onClick={() => onOpenProjectsModal(idx)}
          >
            <div className="row-left">
              <div className="row-num">{proj.num}</div>
              <div
                style={{ width: 72, height: 72, position: "relative", flexShrink: 0, borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid var(--purple-border)", background: "#111", cursor: "pointer" }}
              >
                <Image src={proj.image} alt={proj.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div>
                <h3 className="row-title">{proj.title}</h3>
                <div className="row-desc">{proj.description}</div>
                <div className="row-tags" style={{ marginTop: "0.5rem" }}>
                  {proj.tags.map((t, i) => (
                    <span key={i} className="type-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="row-right" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more-btn"
                  style={{ background: "var(--purple-primary)", color: "#fff", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Live Demo</span>
                  <ExternalLink size={13} />
                </a>
              )}
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more-btn"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={13} />
                  <span>GitHub</span>
                </a>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenProjectsModal(idx);
                }}
                className="row-arrow-btn"
                aria-label={`View ${proj.title}`}
                title={`View ${proj.title} Details`}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
