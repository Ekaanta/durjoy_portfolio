"use client";

import React from "react";

export default function JourneySection({ onOpenCvModal }: { onOpenCvModal: () => void }) {
  return (
    <section className="section-wrapper journey-section" id="journey">
      <div className="section-tag">CAREER & EXPERIENCE</div>
      <h2 className="section-title-large">
        About Me <em>(S)</em><br />My Journey
      </h2>
      <p style={{ maxWidth: "620px", color: "var(--ink-muted)", fontSize: "0.95rem", marginBottom: "3rem" }}>
        AI Engineer & Technical Project Coordinator with hands-on experience developing Large Language Model (LLM) agents, GenAI automation pipelines, and leading agile software project execution.
      </p>

      <div className="timeline-container">
        {/* Curved SVG connector line behind cards */}
        <svg className="timeline-svg-connector" viewBox="0 0 1000 900" fill="none" preserveAspectRatio="none">
          <path
            d="M 250,150 C 750,250 800,450 350,550 C 100,620 400,780 750,850"
            stroke="#9333ea"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Card 1: Sparktech AI Limited */}
        <div className="journey-card card-left fade-up">
          <div className="journey-year">'25</div>
          <div className="journey-date">01/2025 – PRESENT • GULSHAN-1, DHAKA</div>
          <h3 className="journey-role">Jr. AI Engineer</h3>
          <div className="journey-company">
            <span className="company-name">Sparktech AI Limited</span>
            <span className="type-badge">FULL TIME AI</span>
          </div>
          <p className="journey-desc">
            Working on AI-powered solutions & automation workflows using Python, LangChain, N8N, and FastAPI. Developing & integrating Agentic AI systems, LLM apps, and intelligent APIs.
          </p>
          <div className="journey-footer">
            <div className="journey-tags">
              <span className="journey-tag">LangChain</span>
              <span className="journey-tag">Agentic AI</span>
              <span className="journey-tag">N8N Automation</span>
              <span className="journey-tag">FastAPI</span>
            </div>
            <button onClick={onOpenCvModal} className="read-more-btn">
              Details
            </button>
          </div>
        </div>

        {/* Card 2: Unilever (UCL-Bangladesh) */}
        <div className="journey-card card-right fade-up">
          <div className="journey-year">'25</div>
          <div className="journey-date">01/2025 – PRESENT • GULSHAN-1, DHAKA</div>
          <h3 className="journey-role">Project Coordinator</h3>
          <div className="journey-company">
            <span className="company-name">Unilever (UCL-Bangladesh)</span>
            <span className="type-badge">ENTERPRISE PM</span>
          </div>
          <p className="journey-desc">
            Managing and supporting retail & consumer software solutions. Coordinating cross-functional teams to track progress, ensure smooth execution, and align delivery with customer needs.
          </p>
          <div className="journey-footer">
            <div className="journey-tags">
              <span className="journey-tag">Project Planning</span>
              <span className="journey-tag">Stakeholder Mgmt</span>
              <span className="journey-tag">Retail Software</span>
            </div>
            <button onClick={onOpenCvModal} className="read-more-btn">
              Details
            </button>
          </div>
        </div>

        {/* Card 3: Pureit */}
        <div className="journey-card card-left fade-up">
          <div className="journey-year">'22</div>
          <div className="journey-date">03/2022 – 09/2024 • MOHAKHALI DOHS, DHAKA</div>
          <h3 className="journey-role">Technical Project Coordinator</h3>
          <div className="journey-company">
            <span className="company-name">Pureit</span>
            <span className="type-badge">PM & QA</span>
          </div>
          <p className="journey-desc">
            Assisted in project planning, requirement analysis, task tracking, team coordination, API integration, QA validation, and ensuring timely SDLC software project delivery.
          </p>
          <div className="journey-footer">
            <div className="journey-tags">
              <span className="journey-tag">Requirement Analysis</span>
              <span className="journey-tag">API Integration</span>
              <span className="journey-tag">Task Tracking</span>
            </div>
            <button onClick={onOpenCvModal} className="read-more-btn">
              Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
