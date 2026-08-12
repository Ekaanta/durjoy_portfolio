"use client";

import React from "react";

const capabilities = [
  {
    num: "01",
    title: "Agile & Project Management",
    skills: [
      "Agile / Scrum Sprint Management",
      "Sprint Planning & Backlog Grooming",
      "Stakeholder Communication & Alignment",
      "Cross-functional Team Leadership",
      "Risk Assessment & Mitigation Scoping"
    ]
  },
  {
    num: "02",
    title: "Test Automation Architecture",
    skills: [
      "C# & ASP.NET Core Frameworks",
      "Playwright Automated UI & E2E Testing",
      "Selenium Web Automation",
      "CI/CD Test Pipeline Integration",
      "Cross-Browser & Multi-Device Suites"
    ]
  },
  {
    num: "03",
    title: "QA Engineering & Execution",
    skills: [
      "Manual & Automated Test Execution",
      "Bug Life Cycle & Defect Matrix",
      "Comprehensive Test Case Design",
      "Regression & Sanity Suite Planning",
      "UI/UX & Accessibility Validation"
    ]
  },
  {
    num: "04",
    title: "Product Operations & Scoping",
    skills: [
      "Jira, Confluence & Trello Management",
      "User Story & Acceptance Criteria Writing",
      "Release Management Checklists",
      "Technical Documentation & Reporting",
      "Client Onboarding & Product Demos"
    ]
  },
  {
    num: "05",
    title: "API & Data Validation",
    skills: [
      "REST API Testing & Assertion Suites",
      "Postman Collection Automation",
      "SQL, PostgreSQL & MongoDB Validation",
      "JSON Schema & Payload Inspection",
      "Performance & Load Benchmarking"
    ]
  },
  {
    num: "06",
    title: "Technical Strategy & Quality",
    skills: [
      "End-to-End Delivery Ownership",
      "Defect Root Cause Analysis",
      "Zero-Critical Post-Launch QA Standard",
      "Requirement Traceability Matrix",
      "Continuous Quality Improvement"
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">01 / CORE CAPABILITIES</div>
        <h2 className="section-heading">
          Systematic PM & <em>QA Discipline</em>
        </h2>

        <div className="skills-grid">
          {capabilities.map((cap) => (
            <div key={cap.num} className="skill-card fade-up">
              <div className="skill-num">{cap.num}</div>
              <h3 className="skill-title">{cap.title}</h3>
              <ul className="skill-list">
                {cap.skills.map((s, i) => (
                  <li key={i} className="skill-item">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
