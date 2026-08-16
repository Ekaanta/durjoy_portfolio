"use client";

import React from "react";
import { Brain, Code2, ShieldCheck, CheckSquare } from "lucide-react";

const stacks = [
  {
    icon: <Brain size={20} style={{ color: "var(--purple-primary)" }} />,
    title: "AI & GenAI Automation",
    items: [
      "Large Language Models (LLMs) & Prompting",
      "Agentic AI Workflows & LangChain",
      "N8N & Make Automation Pipelines",
      "Computer Vision (YOLOv8, OpenCV)",
      "Diffusion Models (Inpainting)"
    ]
  },
  {
    icon: <Code2 size={20} style={{ color: "var(--purple-primary)" }} />,
    title: "Programming & Backend",
    items: [
      "Python & JavaScript (ES6+)",
      "FastAPI & Node.js REST APIs",
      "PostgreSQL & MongoDB Queries",
      "Git & GitHub Actions CI/CD",
      "Docker Basics & HuggingFace Spaces"
    ]
  },
  {
    icon: <ShieldCheck size={20} style={{ color: "var(--purple-primary)" }} />,
    title: "QA & Test Automation",
    items: [
      "Selenium WebDriver & Playwright",
      "Postman API Automated Collections",
      "JSON Schema & Payload Validation",
      "Regression & Smoke Test Suites",
      "Defect Lifecycle & Triage in JIRA"
    ]
  },
  {
    icon: <CheckSquare size={20} style={{ color: "var(--purple-primary)" }} />,
    title: "Project Coordination & Agile",
    items: [
      "Agile Scrum Ceremonies & Sprints",
      "Requirement Analysis & Scope Matrix",
      "Cross-Functional Team Alignment",
      "Milestone Forecasting & Delivery",
      "Client Communication & Walkthroughs"
    ]
  }
];

export default function SkillsSection() {
  return (
    <section className="section-wrapper" id="stack">
      <div className="section-tag">TECHNICAL CAPABILITIES</div>
      <h2 className="section-title-large">
        The Stack<br /><em>I Build & Lead With</em>
      </h2>
      <p style={{ maxWidth: "620px", color: "var(--ink-muted)", fontSize: "0.9rem", marginBottom: "1.75rem", lineHeight: 1.55 }}>
        A balanced blend of hands-on AI engineering, robust test automation frameworks, and structured agile project delivery.
      </p>

      <div className="stack-grid">
        {stacks.map((st, idx) => (
          <div key={idx} className="stack-card fade-up">
            <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
              {st.icon}
              <h3 className="stack-card-title">{st.title}</h3>
            </div>
            <div className="stack-items-list">
              {st.items.map((item, i) => (
                <div key={i} className="stack-item-row">
                  <span className="stack-dot"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
