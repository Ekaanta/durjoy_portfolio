"use client";

import React from "react";

export default function JourneySection({ onOpenCvModal }: { onOpenCvModal: () => void }) {
  return (
    <section className="section-wrapper journey-section" id="journey">
      <div className="section-tag">MY BACKGROUND</div>
      <h2 className="section-title-large">
        About Me <em>(S)</em><br />My Journey
      </h2>
      <p style={{ maxWidth: "600px", color: "var(--ink-muted)", fontSize: "0.95rem", marginBottom: "3rem" }}>
        A timeline of my professional growth across field operations, quality assurance, project management, and automated engineering architecture.
      </p>

      <div className="timeline-container">
        {/* Curved SVG connector line behind cards */}
        <svg className="timeline-svg-connector" viewBox="0 0 1000 900" fill="none" preserveAspectRatio="none">
          <path
            d="M 250,150 C 750,250 800,450 350,550 C 100,620 400,780 750,850"
            stroke="#c49420"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Card '21 */}
        <div className="journey-card card-left fade-up">
          <div className="journey-year">'21</div>
          <div className="journey-date">JUN 2021 – DEC 2022</div>
          <h3 className="journey-role">Operating Manager & QA Specialist</h3>
          <div className="journey-company">
            <span className="company-name">Titas Gas Field</span>
            <span className="type-badge">PROJECT BASED</span>
          </div>
          <p className="journey-desc">
            Ran line inspections in the field — verifying gas was flowing correctly, defect tracking, and auditing connections for compliance and safety.
          </p>
          <div className="journey-footer">
            <div className="journey-tags">
              <span className="journey-tag">Field Operations</span>
              <span className="journey-tag">Inspection</span>
              <span className="journey-tag">Reporting</span>
            </div>
            <button onClick={onOpenCvModal} className="read-more-btn">
              Read more
            </button>
          </div>
        </div>

        {/* Card '23 */}
        <div className="journey-card card-right fade-up">
          <div className="journey-year">'23</div>
          <div className="journey-date">JAN 2023 – DEC 2024</div>
          <h3 className="journey-role">Lead QA & Project Manager</h3>
          <div className="journey-company">
            <span className="company-name">Bornolipi Ecosystem</span>
            <span className="type-badge">REMOTE & HYBRID</span>
          </div>
          <p className="journey-desc">
            Supported live products, shipped new features, built automated Playwright test suites, and managed Agile sprint deliverables through launch.
          </p>
          <div className="journey-footer">
            <div className="journey-tags">
              <span className="journey-tag">Agile / Scrum</span>
              <span className="journey-tag">Playwright</span>
              <span className="journey-tag">Sprint Planning</span>
            </div>
            <button onClick={onOpenCvModal} className="read-more-btn">
              Read more
            </button>
          </div>
        </div>

        {/* Card '25 */}
        <div className="journey-card card-left fade-up">
          <div className="journey-year">'25</div>
          <div className="journey-date">JAN 2025 – PRESENT</div>
          <h3 className="journey-role">Senior PM & Automation Lead</h3>
          <div className="journey-company">
            <span className="company-name">Enterprise Client Projects</span>
            <span className="type-badge">FULL TIME & CONTRACT</span>
          </div>
          <p className="journey-desc">
            Leading end-to-end web & mobile product delivery, integrating Playwright CI/CD test automation pipelines, and maintaining zero-critical defect standards.
          </p>
          <div className="journey-footer">
            <div className="journey-tags">
              <span className="journey-tag">CI/CD</span>
              <span className="journey-tag">C# .NET</span>
              <span className="journey-tag">API Testing</span>
            </div>
            <button onClick={onOpenCvModal} className="read-more-btn">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
