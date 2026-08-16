"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight, Layers } from "lucide-react";

interface ProjectsSectionProps {
  onOpenProjectsModal: (index: number) => void;
}

const featuredProjects = [
  {
    num: "01",
    title: "Virtual Try-On System (AI GenAI)",
    description: "AI clothing try-on web application leveraging Stable Diffusion Inpainting, GrabCut body segmentation, and OpenCV.",
    role: "AI Engineer & System Architecture",
    tags: ["Stable Diffusion", "OpenCV", "Gradio", "Python"],
    live: "https://ekantabanik-virtual-try-on.hf.space",
    github: "https://github.com/Ekaanta/Virtual-Try-On-System",
    image: "/images/project-virtual-tryon.png"
  },
  {
    num: "02",
    title: "Client Requirement Analyzer (Agentic AI)",
    description: "Multi-agent NLP pipeline extracting structured sprint backlogs, functional criteria, and edge cases from unstructured client documents.",
    role: "Lead Agent Developer & Prompt Architect",
    tags: ["Agentic AI", "LangChain", "LLM", "Next.js"],
    live: "https://client-requirement-analyzer-agent.vercel.app/",
    github: "https://github.com/Ekaanta/Client-Requirement-Analyzer-Agent",
    image: "/images/project-requirement-analyzer.png"
  },
  {
    num: "03",
    title: "N8N AI Model Automation (Workflows)",
    description: "Automated end-to-end multi-step AI workflows orchestrating LLM agents, webhooks, conditional branching, and API data processing.",
    role: "Workflow Automation Architect",
    tags: ["N8N", "Workflow Pipelines", "REST APIs", "Python"],
    github: "https://github.com/Ekaanta/N8N_AI-MODEL",
    image: "/images/project-n8n-automation.png"
  },
  {
    num: "04",
    title: "Real-Time Cheat Detection (Computer Vision)",
    description: "Exam security analysis detecting unauthorized behaviors in real time using YOLOv8, Roboflow dataset, and OpenCV stream processing.",
    role: "Computer Vision Engineer",
    tags: ["YOLOv8", "Computer Vision", "Roboflow", "Python"],
    github: "https://github.com/Ekaanta/Ai_Project-Real-time-cheat-detection-system-exam",
    image: "/images/project-cheat-detection.png"
  },
  {
    num: "05",
    title: "Bornolipi Augmented Reality Learning App",
    description: "Guided AR children's learning application from sprint planning to release. Led QA validation, 3D asset testing, and milestone delivery.",
    role: "Project Coordinator & QA Lead",
    tags: ["Augmented Reality", "QA Oversight", "Agile Sprints"],
    github: "https://github.com/Ekaanta",
    image: "/images/bornolipi-cover.png"
  },
  {
    num: "06",
    title: "Bangladesh AI Assistant Agent",
    description: "Domain-tailored conversational AI agent providing instant structured guidance for healthcare, administrative services, and emergency protocols.",
    role: "Full-Stack AI Developer",
    tags: ["LLM Agents", "Prompt Eng", "Node.js", "AI Assistant"],
    github: "https://github.com/Ekaanta",
    image: "/images/project-bangladesh-ai-agent.png"
  }
];

export default function ProjectsSection({ onOpenProjectsModal }: ProjectsSectionProps) {
  return (
    <section className="section-wrapper" id="projects">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "1.75rem" }}>
        <div>
          <div className="section-tag">SELECTED REAL PRODUCTION WORK</div>
          <h2 className="section-title-large" style={{ margin: 0 }}>
            Featured AI & Software<br /><em>Projects</em>
          </h2>
        </div>
        <button
          onClick={() => onOpenProjectsModal(0)}
          className="read-more-btn"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1.15rem", background: "var(--bg-card-white)", borderColor: "var(--border)" }}
        >
          <Layers size={14} />
          <span>View All Project Walkthroughs</span>
        </button>
      </div>

      {/* 3-Column Prominent Project Showcase Grid */}
      <div className="projects-grid">
        {featuredProjects.map((proj, idx) => (
          <div
            key={proj.num}
            className="project-card fade-up"
            onClick={() => onOpenProjectsModal(idx)}
          >
            {/* Thumbnail */}
            <div className="project-thumb-wrap">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0.55rem",
                  left: "0.55rem",
                  background: "rgba(227, 83, 54, 0.95)",
                  color: "#ffffff",
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  padding: "0.2rem 0.5rem",
                  borderRadius: "var(--radius-sm)"
                }}
              >
                PROJ {proj.num}
              </div>
            </div>

            {/* Content */}
            <div className="project-card-body">
              <h3 className="project-card-title">{proj.title}</h3>
              <p className="project-card-desc">{proj.description}</p>
              <div className="project-card-meta">Role: {proj.role}</div>

              {/* Tags */}
              <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginTop: "0.35rem" }}>
                {proj.tags.map((t, i) => (
                  <span
                    key={i}
                    className="type-badge"
                    style={{ fontSize: "0.65rem", padding: "0.18rem 0.45rem" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="project-card-footer">
              <div style={{ display: "flex", gap: "0.35rem" }}>
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more-btn"
                    style={{ background: "var(--purple-primary)", color: "#fff", display: "inline-flex", alignItems: "center", gap: "0.25rem", padding: "0.3rem 0.65rem", fontSize: "0.72rem" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={11} />
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more-btn"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", padding: "0.3rem 0.65rem", fontSize: "0.72rem" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={11} />
                    <span>Code</span>
                  </a>
                )}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenProjectsModal(idx);
                }}
                className="read-more-btn"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", padding: "0.3rem 0.65rem", fontSize: "0.72rem" }}
                aria-label={`View ${proj.title} details`}
              >
                <span>Details</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
