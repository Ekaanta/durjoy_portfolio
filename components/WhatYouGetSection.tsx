"use client";

import React from "react";

const deliverables = [
  {
    icon: "⚡",
    title: "Sprint Management",
    desc: "Structured Agile sprint planning, backlog grooming, and predictable velocity."
  },
  {
    icon: "🛡",
    title: "Test Automation",
    desc: "Robust Playwright & Selenium automated E2E testing suites covering critical user flows."
  },
  {
    icon: "🔌",
    title: "API Validation",
    desc: "Postman collections, payload assertion tests, and REST endpoint verification."
  },
  {
    icon: "📊",
    title: "Defect Matrix",
    desc: "Clear bug lifecycle tracking in Jira with severity classification and zero critical post-launch bugs."
  },
  {
    icon: "👥",
    title: "Team Leadership",
    desc: "Aligning developers, designers, QA engineers, and clients through clear communication."
  },
  {
    icon: "🚀",
    title: "Release Management",
    desc: "Strict pre-deployment checklists, staging verification, and production release sign-off."
  },
  {
    icon: "🔄",
    title: "CI/CD Integration",
    desc: "Automated test runs triggered on Git commits & pull requests via GitHub Actions."
  },
  {
    icon: "🎤",
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
        Clean workflows, automated QA, and scalable architecture combined — turning your vision into a product that holds up in production.
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
