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
    icon: <Rocket size={20} style={{ color: "var(--purple-primary)" }} />,
    value: "30+",
    label: "Projects Delivered",
    subtext: "Enterprise AI & Software Solutions"
  },
  {
    icon: <ShieldCheck size={20} style={{ color: "var(--purple-primary)" }} />,
    value: "99%",
    label: "Quality & QA Coverage",
    subtext: "Automated Test & Model Validation"
  },
  {
    icon: <Briefcase size={20} style={{ color: "var(--purple-primary)" }} />,
    value: "2+",
    label: "Years Experience",
    subtext: "Sparktech AI, Unilever & Pureit"
  },
  {
    icon: <CheckCircle2 size={20} style={{ color: "var(--purple-primary)" }} />,
    value: "100%",
    label: "On-Time Milestone Rate",
    subtext: "Agile Sprint Delivery Record"
  }
];

export default function WorkSamplesSection() {
  return (
    <section className="section-wrapper" id="work-samples">
      {/* Horizontal Stats Banner */}
      <div className="stats-banner-row fade-up">
        {stats.map((s, idx) => (
          <div key={idx} className="stat-item-box">
            <div className="stat-num-highlight">{s.value}</div>
            <div className="stat-lbl-group">
              <span className="stat-lbl-title">{s.label}</span>
              <span className="stat-lbl-sub">{s.subtext}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Header */}
      <div className="section-tag">TESTIMONIALS & TRUST</div>
      <h2 className="section-title-large">
        Corporate Companies<br /><em>I Work With</em>
      </h2>

      {/* Responsive Review Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "1.25rem",
          width: "100%"
        }}
      >
        {reviews.map((r, idx) => (
          <div
            key={idx}
            className="capability-card fade-up"
            style={{
              justifyContent: "space-between",
              gap: "1rem",
              width: "100%"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", flexWrap: "wrap" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  position: "relative",
                  flexShrink: 0,
                  background: "var(--purple-light)",
                  borderRadius: "var(--radius-sm)",
                  padding: "5px",
                  border: "1px solid var(--purple-border)"
                }}
              >
                <Image src={r.logo} alt={r.name} fill style={{ objectFit: "contain" }} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--ink)", overflowWrap: "break-word" }}>{r.name}</div>
                <div style={{ fontSize: "0.74rem", color: "var(--purple-primary)", fontWeight: 600, overflowWrap: "break-word" }}>{r.title}</div>
              </div>
            </div>

            <p style={{ fontSize: "0.84rem", color: "var(--ink-secondary)", fontStyle: "italic", lineHeight: 1.55 }}>
              "{r.quote}"
            </p>

            <div style={{ display: "flex", gap: "0.2rem", color: "var(--purple-primary)" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
