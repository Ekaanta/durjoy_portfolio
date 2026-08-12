"use client";

import React from "react";
import { Brain, Code2, CheckSquare } from "lucide-react";

const stacks = [
  {
    icon: <Brain size={22} style={{ color: "var(--purple-primary)" }} />,
    title: "AI Engineering & Automation",
    items: [
      "Large Language Models (LLMs)",
      "Generative AI & Agentic AI Systems",
      "LangChain & N8N Workflow Automation",
      "Computer Vision (YOLOv8, OpenCV)",
      "Stable Diffusion & Diffusers (Inpainting)"
    ]
  },
  {
    icon: <Code2 size={22} style={{ color: "var(--purple-primary)" }} />,
    title: "Programming & Backend Dev",
    items: [
      "Python & JavaScript",
      "Node.js & FastAPI",
      "REST API Testing (Postman)",
      "Selenium WebDriver Automation",
      "Docker Basics & HuggingFace Spaces"
    ]
  },
  {
    icon: <CheckSquare size={22} style={{ color: "var(--purple-primary)" }} />,
    title: "Project Management & QA",
    items: [
      "Agile & Scrum Methodology",
      "Requirement Analysis & Gap Review",
      "Defect Lifecycle & JIRA Tracking",
      "CI/CD Pipelines (GitHub Actions)",
      "Stakeholder Communication & Leadership"
    ]
  }
];

export default function SkillsSection() {
  return (
    <section className="section-wrapper" id="stack">
      <div className="section-tag">TECH STACK</div>
      <h2 className="section-title-large">
        The Stack<br /><em>I Build With</em>
      </h2>

      <div className="stack-grid">
        {stacks.map((st, idx) => (
          <div key={idx} className="stack-card fade-up">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "1.25rem" }}>
              {st.icon}
              <h3 className="stack-card-title" style={{ margin: 0 }}>{st.title}</h3>
            </div>
            <div className="stack-items-list">
              {st.items.map((item, i) => (
                <div key={i} className="stack-item-row">
                  <span className="stack-dot"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
