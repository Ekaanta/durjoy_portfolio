"use client";

import React from "react";

const services = [
  {
    badge: "AGILE & PM",
    title: "Project Management & Delivery",
    bullets: [
      "Sprint planning & backlog grooming",
      "Resource allocation & scheduling",
      "Risk assessment & mitigation",
      "Cross-functional team alignment"
    ]
  },
  {
    badge: "AUTOMATION",
    title: "QA & Test Automation Architecture",
    bullets: [
      "Playwright & Selenium test suites",
      "CI/CD pipeline test triggers",
      "Manual & regression testing",
      "Zero-critical defect standard"
    ]
  },
  {
    badge: "API TESTING",
    title: "REST API & Backend QA",
    bullets: [
      "Postman collection automation",
      "Payload & JSON schema assertions",
      "PostgreSQL & MongoDB validation",
      "Performance & load checks"
    ]
  },
  {
    badge: "COACHING",
    title: "Agile Process Optimization",
    bullets: [
      "Sprint ceremony facilitation",
      "Jira / Confluence workflow setup",
      "Defect tracking matrix design",
      "Team execution reporting"
    ]
  }
];

export default function ProcessSection() {
  return (
    <section className="section-wrapper" id="services">
      <div className="section-tag">SERVICES</div>
      <h2 className="section-title-large">
        Solutions<br /><em>That Deliver</em>
      </h2>
      <p style={{ maxWidth: "600px", color: "var(--ink-muted)", fontSize: "0.95rem", marginBottom: "2.5rem" }}>
        Tailored project management and QA services designed to elevate product quality and team execution velocity.
      </p>

      <div className="services-grid">
        {services.map((s, idx) => (
          <div key={idx} className="service-card fade-up">
            <span className="service-badge">{s.badge}</span>
            <h3 className="service-title">{s.title}</h3>
            <ul className="service-bullets">
              {s.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
