"use client";

import React from "react";

const stacks = [
  {
    title: "QA & Test Automation",
    items: [
      "Playwright (UI & E2E Testing)",
      "Selenium Web Automation",
      "C# & ASP.NET Core Frameworks",
      "CI/CD Pipeline Integration",
      "Manual & Regression Test Suites"
    ]
  },
  {
    title: "Project Management & Agile",
    items: [
      "Agile / Scrum Sprint Leadership",
      "Jira & Confluence Administration",
      "Backlog Grooming & User Stories",
      "Stakeholder Communication",
      "Risk Management & Mitigation"
    ]
  },
  {
    title: "API, Backend & Databases",
    items: [
      "REST API Testing (Postman)",
      "PostgreSQL & SQL Databases",
      "MongoDB & NoSQL Stores",
      "JSON Schema Validation",
      "Git / GitHub Workflow"
    ]
  }
];

export default function SkillsSection() {
  return (
    <section className="section-wrapper" id="stack">
      <div className="section-tag">STACK</div>
      <h2 className="section-title-large">
        The Stack<br /><em>I Build With</em>
      </h2>

      <div className="stack-grid">
        {stacks.map((st, idx) => (
          <div key={idx} className="stack-card fade-up">
            <h3 className="stack-card-title">{st.title}</h3>
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
