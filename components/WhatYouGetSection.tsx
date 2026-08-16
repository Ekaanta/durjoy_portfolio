"use client";

import React from "react";
import { CheckSquare, ShieldCheck, Cpu, Plug, Users, Rocket } from "lucide-react";

const capabilities = [
  {
    icon: <CheckSquare size={20} />,
    title: "Project Coordination & Agile Delivery",
    desc: "Facilitating sprint planning, backlog grooming, risk mitigation, and keeping cross-functional teams synchronized on milestones."
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "QA Architecture & Test Automation",
    desc: "Designing Playwright, Selenium & Python automated regression suites ensuring zero critical defects before deployment."
  },
  {
    icon: <Cpu size={20} />,
    title: "Agentic AI & LLM Automation",
    desc: "Building multi-agent systems, prompt workflows, and N8N automation pipelines to streamline complex business processes."
  },
  {
    icon: <Plug size={20} />,
    title: "REST API & Data Validation",
    desc: "Automated Postman test collections, JSON schema assertion suites, payload verification, and database integrity checks."
  },
  {
    icon: <Users size={20} />,
    title: "International Client Management",
    desc: "Leading sprint reviews, defect triage sessions, and technical walkthroughs across global time zones and stakeholder tiers."
  },
  {
    icon: <Rocket size={20} />,
    title: "Release & Defect Governance",
    desc: "Enforcing pre-deployment checklists, staging validation, Jira defect lifecycle tracking, and CI/CD automated pipeline triggers."
  }
];

export default function WhatYouGetSection() {
  return (
    <section className="section-wrapper" id="what-you-get">
      <div className="section-tag">VALUE & CAPABILITIES</div>
      <h2 className="section-title-large">
        What I Deliver To<br /><em>Your Product & Team</em>
      </h2>
      <p style={{ maxWidth: "620px", color: "var(--ink-muted)", fontSize: "0.9rem", marginBottom: "1.75rem", lineHeight: 1.55 }}>
        Bridging the gap between engineering execution, AI capability, and stakeholder clarity to ship dependable software.
      </p>

      <div className="capabilities-grid">
        {capabilities.map((c, idx) => (
          <div key={idx} className="capability-card fade-up">
            <div className="capability-icon-box">{c.icon}</div>
            <h3 className="capability-title">{c.title}</h3>
            <p className="capability-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
