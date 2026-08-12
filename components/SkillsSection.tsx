"use client";

import React from "react";

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="section-label">01 / CORE COMPETENCIES</div>
      <div className="skills-grid">
        <div className="skill-card fade-up">
          <h3 className="skill-title">Core Management Skills</h3>
          <ul className="skill-list">
            <li className="skill-item">Agile / Scrum Project Management</li>
            <li className="skill-item">Sprint Planning & Backlog Grooming</li>
            <li className="skill-item">Stakeholder Communication & Alignment</li>
            <li className="skill-item">QA Strategy & Test Automation Integration</li>
            <li className="skill-item">Cross-functional Team Leadership</li>
            <li className="skill-item">Risk Assessment & Mitigation</li>
          </ul>
        </div>
        <div className="skill-card fade-up">
          <h3 className="skill-title">Technical & Automation</h3>
          <ul className="skill-list">
            <li className="skill-item">C# & ASP.NET Core Frameworks</li>
            <li className="skill-item">Playwright & Selenium Automation</li>
            <li className="skill-item">SQL, PostgreSQL & MongoDB Databases</li>
            <li className="skill-item">REST API Testing & Postman Collections</li>
            <li className="skill-item">Git / GitHub Workflow & CI/CD Pipelines</li>
            <li className="skill-item">BrowserStack & Cross-Device Testing</li>
          </ul>
        </div>
        <div className="skill-card fade-up">
          <h3 className="skill-title">QA & Process Discipline</h3>
          <ul className="skill-list">
            <li className="skill-item">Manual & Automated Test Execution</li>
            <li className="skill-item">Bug Life Cycle & Defect Tracking</li>
            <li className="skill-item">Test Case Design & Matrix Creation</li>
            <li className="skill-item">Performance & Load Testing</li>
            <li className="skill-item">Regression & Sanity Testing Suites</li>
            <li className="skill-item">API Validation via Postman & Swagger</li>
          </ul>
        </div>
        <div className="skill-card fade-up">
          <h3 className="skill-title">Product & Operations</h3>
          <ul className="skill-list">
            <li className="skill-item">Jira, Confluence & Trello Administration</li>
            <li className="skill-item">User Story & Acceptance Criteria Writing</li>
            <li className="skill-item">UI/UX Auditing & Accessibility Review</li>
            <li className="skill-item">Release Management & Deployment Checklists</li>
            <li className="skill-item">Technical Documentation & Reporting</li>
            <li className="skill-item">Client Onboarding & Demos</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
