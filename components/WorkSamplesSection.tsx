"use client";

import React from "react";
import Image from "next/image";
import { Rocket, ShieldCheck, Briefcase, CheckCircle2, Star } from "lucide-react";

const reviews = [
  {
    logo: "/images/unilever.png",
    name: "Unilever Project Lead",
    title: "Enterprise Retail Software Solutions",
    quote: "Durjoy's attention to detail during our product rollout was exceptional. He ensured cross-functional software teams remained synchronized and delivered features on schedule."
  },
  {
    logo: "/images/betupia.png",
    name: "Betupia Product Director",
    title: "AI & Full-Stack Application Delivery",
    quote: "Working with Durjoy transformed our delivery pipeline. His structured Agile sprints and clear stakeholder communication gave our leadership full visibility."
  },
  {
    logo: "/images/pureit.png",
    name: "Pureit Technical Lead",
    title: "QA Validation & System Integration",
    quote: "Highly professional, communicative, and thorough. Durjoy brings a rare blend of PM organization and technical execution that elevates the entire team."
  }
];

const stats = [
  {
    icon: <Rocket size={22} />,
    value: "15+",
    label: "Projects Delivered",
    subtext: "Enterprise AI & Software Solutions"
  },
  {
    icon: <ShieldCheck size={22} />,
    value: "99%",
    label: "Quality & QA Coverage",
    subtext: "Rigorous Test & Model Validation"
  },
  {
    icon: <Briefcase size={22} />,
    value: "4+",
    label: "Years Experience",
    subtext: "Sparktech AI, Unilever & Pureit"
  },
  {
    icon: <CheckCircle2 size={22} />,
    value: "100%",
    label: "On-Time Delivery",
    subtext: "Agile Sprint Milestone Execution"
  }
];

export default function WorkSamplesSection() {
  return (
    <section className="section-wrapper" id="work-samples">
      {/* Testimonials Header */}
      <div className="section-tag">TESTIMONIALS & TRUST</div>
      <h2 className="section-title-large">
        Corporate Companies<br /><em>I Work With</em>
      </h2>

      {/* Review Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginBottom: "3.5rem"
        }}
      >
        {reviews.map((r, idx) => (
          <div
            key={idx}
            className="what-card fade-up"
            style={{
              background: "var(--bg-card-white)",
              border: "1px solid var(--sandy-amber)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1.25rem"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  position: "relative",
                  flexShrink: 0,
                  background: "var(--purple-light)",
                  borderRadius: "var(--radius-sm)",
                  padding: "6px",
                  border: "1px solid var(--purple-border)"
                }}
              >
                <Image src={r.logo} alt={r.name} fill style={{ objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--ink)" }}>{r.name}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--purple-primary)", fontWeight: 600 }}>{r.title}</div>
              </div>
            </div>

            <p style={{ fontSize: "0.9rem", color: "var(--ink-secondary)", fontStyle: "italic", lineHeight: 1.6 }}>
              "{r.quote}"
            </p>

            <div style={{ display: "flex", gap: "0.25rem", color: "var(--purple-primary)" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Redesigned Impact Metrics Grid */}
      <div className="section-tag" style={{ marginTop: "1rem" }}>PERFORMANCE IMPACT</div>
      <h3
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          fontWeight: 800,
          color: "var(--ink)",
          marginBottom: "1.75rem",
          letterSpacing: "-0.02em"
        }}
      >
        Proven Results Across <em>Real Production Systems</em>
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem"
        }}
      >
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="fade-up"
            style={{
              background: "var(--bg-card-white)",
              border: "1px solid var(--sandy-amber)",
              borderRadius: "var(--radius-lg)",
              padding: "1.75rem 1.5rem",
              boxShadow: "var(--shadow-sm)",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "var(--radius-sm)",
                  background: "var(--purple-light)",
                  color: "var(--purple-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid var(--purple-border)"
                }}
              >
                {s.icon}
              </div>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "var(--purple-badge-text)",
                  background: "var(--purple-light)",
                  padding: "0.25rem 0.6rem",
                  borderRadius: "var(--radius-pill)"
                }}
              >
                VERIFIED
              </span>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "2.4rem",
                  fontWeight: 900,
                  color: "var(--purple-primary)",
                  lineHeight: 1.1
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginTop: "0.25rem"
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "var(--ink-muted)",
                  marginTop: "0.2rem"
                }}
              >
                {s.subtext}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
