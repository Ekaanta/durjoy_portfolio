"use client";

import React from "react";
import { Zap, ShieldCheck, Plug, BarChart3, Users, Rocket, RefreshCw, Mic } from "lucide-react";

const deliverables = [
  {
    icon: <Zap size={20} />,
    title: "Sprint Management",
    desc: "Structured Agile sprint planning, backlog grooming, and predictable velocity."
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Test Automation",
    desc: "Robust Playwright, Selenium & Python automated testing suites covering critical user flows."
  },
  {
    icon: <Plug size={20} />,
    title: "API Validation",
    desc: "Postman collections, payload assertion tests, and REST endpoint verification."
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Defect Matrix",
    desc: "Clear bug lifecycle tracking in Jira with severity classification and zero critical post-launch bugs."
  },
  {
    icon: <Users size={20} />,
    title: "Team Leadership",
    desc: "Aligning developers, designers, QA engineers, and clients through clear communication."
  },
  {
    icon: <Rocket size={20} />,
    title: "Release Management",
    desc: "Strict pre-deployment checklists, staging verification, and production release sign-off."
  },
  {
    icon: <RefreshCw size={20} />,
    title: "CI/CD Integration",
    desc: "Automated test runs triggered on Git commits & pull requests via GitHub Actions."
  },
  {
    icon: <Mic size={20} />,
    title: "Client Demos",
    desc: "Transparent product walkthroughs, stakeholder progress reports, and sprint retrospectives."
  }
];

export default function WhatYouGetSection() {
  return (
    <section className="section-wrapper" id="what-you-get">
      <div className="section-tag">DELIVERABLES</div>
      <h2 className="section-title-large">
        What<br /><em>You Get?</em>
      </h2>
      <p style={{ maxWidth: "600px", color: "var(--ink-muted)", fontSize: "0.95rem", marginBottom: "2.5rem" }}>
        Clean workflows, automated QA, and scalable AI architecture combined — turning your vision into a product that holds up in production.
      </p>

      <div className="what-grid">
        {deliverables.map((d, idx) => (
          <div key={idx} className="what-card fade-up">
            <div className="what-icon">{d.icon}</div>
            <h3 className="what-title">{d.title}</h3>
            <p className="what-desc">{d.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
