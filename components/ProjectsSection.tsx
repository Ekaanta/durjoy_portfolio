"use client";

import React from "react";

interface ProjectsSectionProps {
  onOpenProjectsModal: () => void;
}

const projects = [
  {
    num: "01",
    title: "Virtual Try-On System (AI GenAI)",
    description: "AI-powered clothing virtual try-on app using Stable Diffusion Inpainting, GrabCut body segmentation, OpenCV, Diffusers & HuggingFace Spaces.",
    tags: ["Python", "Stable Diffusion", "OpenCV", "Gradio", "HuggingFace"],
    live: "https://ekantabanik-virtual-try-on.hf.space",
    github: "https://github.com/Ekaanta/Virtual-Try-On-System"
  },
  {
    num: "02",
    title: "Client Requirement Analyzer Agent (Agentic AI)",
    description: "Agentic AI system that intelligently analyzes client documents and extracts structured business requirements using LLMs, LangChain & NLP.",
    tags: ["Agentic AI", "LangChain", "LLM", "Prompt Eng", "Document AI"],
    live: "https://client-requirement-analyzer-agent.vercel.app/",
    github: "https://github.com/Ekaanta/Client-Requirement-Analyzer-Agent"
  },
  {
    num: "03",
    title: "N8N AI Model Automation (Workflow Pipelines)",
    description: "Multi-step AI automation workflows using N8N, orchestrating LLM agents, external APIs, conditional branching, and process automation.",
    tags: ["N8N", "Workflow Automation", "LLM Agents", "Python", "API"],
    github: "https://github.com/Ekaanta/N8N_AI-MODEL"
  },
  {
    num: "04",
    title: "Real-Time Cheat Detection System (Computer Vision)",
    description: "AI-powered exam cheat detection using YOLOv8, Roboflow custom dataset, Matplotlib, OpenCV, and real-time video analysis.",
    tags: ["YOLOv8", "Computer Vision", "Roboflow", "OpenCV", "Python"],
    github: "https://github.com/Ekaanta/Ai_Project-Real-time-cheat-detection-system-exam"
  },
  {
    num: "05",
    title: "Bornolipi Android & iOS Augmented Reality App",
    description: "Directed AR learning app project from planning to delivery. Oversaw QA processes, validated AR features, and coordinated testing efforts.",
    tags: ["Augmented Reality", "QA Oversight", "App Testing", "Agile PM"],
    github: "https://github.com/Ekaanta"
  },
  {
    num: "06",
    title: "Coupon Management System (Mobile Automation)",
    description: "Managed mobile automation testing project for Android and iOS applications with Python-based test scripts and quality deliverables.",
    tags: ["Python Automation", "Mobile Testing", "Android/iOS", "QA"],
    github: "https://github.com/Ekaanta"
  },
  {
    num: "07",
    title: "Volunteering Application System (API & QA)",
    description: "Led project activities for volunteering management application. Organized test case design, bug tracking, and Postman API validation.",
    tags: ["Postman API", "Bug Tracking", "Test Case Design", "PM"],
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
        {projects.map((proj) => (
          <div key={proj.num} className="project-row-item fade-up">
            <div className="row-left">
              <div className="row-num">{proj.num}</div>
              <div>
                <h3 className="row-title">{proj.title}</h3>
                <div className="row-desc">{proj.description}</div>
                <div className="row-tags" style={{ marginTop: "0.5rem" }}>
                  {proj.tags.map((t, idx) => (
                    <span key={idx} className="type-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="row-right" style={{ flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more-btn"
                    style={{ background: "var(--purple-primary)", color: "#fff" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo ↗
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
              <button
                onClick={onOpenProjectsModal}
                className="row-arrow-btn"
                aria-label="View Project Gallery"
                title="View Gallery Details"
              >
                →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
