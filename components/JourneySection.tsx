"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Building2, ShieldCheck, ChevronRight } from "lucide-react";

const reviews = [
  {
    logo: "/images/unilever.png",
    name: "Unilever Campaign Lead",
    title: "FMCG Digital Transformation & QA",
    quote: "Durjoy's attention to detail during our product rollout was exceptional. He caught several critical API integration bugs prior to go-live and kept cross-functional teams synchronized."
  },
  {
    logo: "/images/betupia.png",
    name: "Betupia Group Product Director",
    title: "Mobile App & SaaS Delivery",
    quote: "Working with Durjoy transformed our release pipeline. His automated Playwright scripts reduced test cycles drastically, and his daily standup reports gave stakeholders full visibility."
  },
  {
    logo: "/images/pureit.png",
    name: "Pureit Tech Lead",
    title: "Web Application QA",
    quote: "Highly professional, communicative, and thorough. Durjoy brings a rare blend of PM organization and deep QA technical skills that elevate the entire engineering team."
  }
];

export default function JourneySection({ onOpenCvModal }: { onOpenCvModal: () => void }) {
  return (
    <section className="section-wrapper journey-section" id="journey">
      <div className="section-tag">CAREER & EXPERIENCE</div>
      <h2 className="section-title-large">
        About Me <em>(S)</em><br />My Journey
      </h2>

      {/* Endorsements / Testimonials Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3.5rem" }}>
        {reviews.map((r, idx) => (
          <div key={idx} className="what-card fade-up" style={{ background: "var(--bg-card-white)", border: "1px solid var(--sandy-amber)", borderRadius: "var(--radius-md)", padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.85rem" }}>
              <div style={{ width: 44, height: 44, position: "relative", flexShrink: 0, borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid var(--border)", background: "#fff" }}>
                <Image src={r.logo} alt={r.name} fill style={{ objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--ink)" }}>{r.name}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--purple-badge-text)", fontWeight: 600 }}>{r.title}</div>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--ink-secondary)", fontStyle: "italic", lineHeight: 1.6 }}>
              "{r.quote}"
            </p>
          </div>
        ))}
      </div>

      <div className="timeline-container">
        {/* Curved SVG connector line behind cards */}
        <svg className="timeline-svg-connector" viewBox="0 0 1000 900" fill="none" preserveAspectRatio="none">
          <path
            d="M 250,150 C 750,250 800,450 350,550 C 100,620 400,780 750,850"
            stroke="var(--purple-primary)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Card 1: Unilever (UCL-Bangladesh) */}
        <div className="journey-card card-left fade-up">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="journey-year">'25</div>
            <Building2 size={24} style={{ color: "var(--purple-primary)" }} />
          </div>
          <div className="journey-date">01/2025 – PRESENT • GULSHAN-1, DHAKA.</div>
          <h3 className="journey-role">Project Coordinator</h3>
          <div className="journey-company">
            <span className="company-name">Unilever (UCL-Bangladesh)</span>
            <span className="type-badge">ENTERPRISE PM</span>
          </div>
          <p className="journey-desc">
            Managed and supported projects related to retail and consumer-based software solutions. Coordinated with teams to ensure smooth execution, tracked progress, and helped deliver solutions aligned with business and customer needs.
          </p>
          <div className="journey-footer">
            <div className="journey-tags">
              <span className="journey-tag">Project Planning</span>
              <span className="journey-tag">Stakeholder Mgmt</span>
              <span className="journey-tag">Retail Software</span>
            </div>
            <button onClick={onOpenCvModal} className="read-more-btn" style={{ display: "inline-flex", alignItems: "center", gap: "0.2rem" }}>
              <span>Details</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Card 2: Pureit */}
        <div className="journey-card card-right fade-up">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="journey-year">'22</div>
            <ShieldCheck size={24} style={{ color: "var(--purple-primary)" }} />
          </div>
          <div className="journey-date">03/2022 – 09/2024 • MOHAKHALI DOHS, DHAKA.</div>
          <h3 className="journey-role">Trainee Project Coordinator</h3>
          <div className="journey-company">
            <span className="company-name">Pureit</span>
            <span className="type-badge">PM & QA</span>
          </div>
          <p className="journey-desc">
            Assisted in managing project activities, tracking deliverables, and coordinating with team members. Contributed to ensuring smooth execution and timely completion of project tasks.
          </p>
          <div className="journey-footer">
            <div className="journey-tags">
              <span className="journey-tag">Requirement Analysis</span>
              <span className="journey-tag">API Integration</span>
              <span className="journey-tag">Task Tracking</span>
            </div>
            <button onClick={onOpenCvModal} className="read-more-btn" style={{ display: "inline-flex", alignItems: "center", gap: "0.2rem" }}>
              <span>Details</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Card 3: Sparktech AI Limited */}
        <div className="journey-card card-left fade-up">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="journey-year">'25</div>
            <Sparkles size={24} style={{ color: "var(--purple-primary)" }} />
          </div>
          <div className="journey-date">01/2025 – PRESENT • GULSHAN-1, DHAKA.</div>
          <h3 className="journey-role">Jr. AI Engineer</h3>
          <div className="journey-company">
            <span className="company-name">Sparktech AI Limited</span>
            <span className="type-badge">FULL TIME AI</span>
          </div>
          <p className="journey-desc">
            Working on AI-powered solutions and automation workflows using Python, LangChain, n8n, and FastAPI. Developed and integrated AI agents, LLM-based applications, APIs, and automated workflows to improve business processes and deliver intelligent software solutions.
          </p>
          <div className="journey-footer">
            <div className="journey-tags">
              <span className="journey-tag">LangChain</span>
              <span className="journey-tag">Agentic AI</span>
              <span className="journey-tag">n8n Automation</span>
              <span className="journey-tag">FastAPI</span>
            </div>
            <button onClick={onOpenCvModal} className="read-more-btn" style={{ display: "inline-flex", alignItems: "center", gap: "0.2rem" }}>
              <span>Details</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
