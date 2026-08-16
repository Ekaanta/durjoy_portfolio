"use client";

import React from "react";
import { Sparkles, Building2, ShieldCheck, ChevronRight } from "lucide-react";

export default function JourneySection({ onOpenCvModal }: { onOpenCvModal: () => void }) {
  return (
    <section className="section-wrapper journey-section" id="journey">
      <div className="section-tag" style={{ fontFamily: "'Poppins', sans-serif" }}>
        CAREER & EXPERIENCE
      </div>
      <h2 className="section-title-large" style={{ fontFamily: "'Poppins', sans-serif" }}>
        My Professional<br /><em>Journey & Leadership</em>
      </h2>

      <p
        style={{
          maxWidth: "640px",
          color: "var(--ink-muted)",
          fontSize: "0.9rem",
          marginBottom: "1.5rem",
          lineHeight: 1.5,
          fontFamily: "'Poppins', sans-serif"
        }}
      >
        Track record of driving AI/ML engineering, QA test automation, and agile software project coordination across global and enterprise teams.
      </p>

      <div className="timeline-container">
        {/* Curved SVG connector line behind cards */}
        <svg className="timeline-svg-connector" viewBox="0 0 1000 640" fill="none" preserveAspectRatio="none">
          <path
            d="M 250,110 C 720,160 800,260 750,310 C 700,360 280,450 250,510"
            stroke="var(--purple-primary)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Card 1: Unilever (UCL-Bangladesh) */}
        <div className="journey-card card-left fade-up">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="journey-year">'25</div>
            <Building2 size={22} style={{ color: "var(--purple-primary)" }} />
          </div>
          <div className="journey-date">01/2025 – PRESENT • GULSHAN-1, DHAKA</div>
          <h3 className="journey-role">Project Coordinator</h3>
          <div className="journey-company">
            <span className="company-name">Unilever (UCL-Bangladesh)</span>
            <span className="type-badge">ENTERPRISE PM</span>
          </div>
          <p className="journey-desc">
            Managed and supported projects related to retail and consumer-based software solutions. Coordinated cross-functional teams to track sprint milestones, ensure smooth delivery, and align execution with client requirements.
          </p>
          <div className="journey-footer">
            <div className="journey-tags">
              <span className="journey-tag">Project Planning</span>
              <span className="journey-tag">Stakeholder Mgmt</span>
              <span className="journey-tag">Retail Software</span>
            </div>
            <button onClick={onOpenCvModal} className="read-more-btn" style={{ display: "inline-flex", alignItems: "center", gap: "0.2rem" }}>
              <span>Details</span>
              <ChevronRight size={13} />
            </button>
          </div>
        </div>

        {/* Card 2: Pureit */}
        <div className="journey-card card-right fade-up">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="journey-year">'22</div>
            <ShieldCheck size={22} style={{ color: "var(--purple-primary)" }} />
          </div>
          <div className="journey-date">03/2022 – 09/2024 • MOHAKHALI DOHS, DHAKA</div>
          <h3 className="journey-role">Trainee Project Coordinator</h3>
          <div className="journey-company">
            <span className="company-name">Pureit</span>
            <span className="type-badge">PM & QA</span>
          </div>
          <p className="journey-desc">
            Assisted in requirement analysis, project planning, task tracking, team coordination, API integration, QA validation, and ensuring timely SDLC software project delivery.
          </p>
          <div className="journey-footer">
            <div className="journey-tags">
              <span className="journey-tag">Requirement Analysis</span>
              <span className="journey-tag">API Integration</span>
              <span className="journey-tag">Task Tracking</span>
            </div>
            <button onClick={onOpenCvModal} className="read-more-btn" style={{ display: "inline-flex", alignItems: "center", gap: "0.2rem" }}>
              <span>Details</span>
              <ChevronRight size={13} />
            </button>
          </div>
        </div>

        {/* Card 3: Sparktech AI Limited */}
        <div className="journey-card card-left fade-up">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="journey-year">'25</div>
            <Sparkles size={22} style={{ color: "var(--purple-primary)" }} />
          </div>
          <div className="journey-date">01/2025 – PRESENT • GULSHAN-1, DHAKA</div>
          <h3 className="journey-role">Jr. AI Engineer</h3>
          <div className="journey-company">
            <span className="company-name">Sparktech AI Limited</span>
            <span className="type-badge">FULL TIME AI</span>
          </div>
          <p className="journey-desc">
            Working on AI-powered solutions and automation workflows using Python, LangChain, N8N, and FastAPI. Developed and integrated AI agents, LLM-based applications, and automated workflows.
          </p>
          <div className="journey-footer">
            <div className="journey-tags">
              <span className="journey-tag">LangChain</span>
              <span className="journey-tag">Agentic AI</span>
              <span className="journey-tag">N8N Automation</span>
              <span className="journey-tag">FastAPI</span>
            </div>
            <button onClick={onOpenCvModal} className="read-more-btn" style={{ display: "inline-flex", alignItems: "center", gap: "0.2rem" }}>
              <span>Details</span>
              <ChevronRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
