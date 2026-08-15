"use client";

import React from "react";
import Image from "next/image";

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

export default function WorkSamplesSection() {
  return (
    <section className="section-wrapper" id="work-samples">
      <div className="section-tag">TESTIMONIALS</div>
      <h2 className="section-title-large">
        Corporate Companies<br /><em>I Work With</em>
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
        {reviews.map((r, idx) => (
          <div key={idx} className="what-card fade-up" style={{ background: "var(--bg-card)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: 44, height: 44, position: "relative", flexShrink: 0 }}>
                <Image src={r.logo} alt={r.name} fill style={{ objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{r.name}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--ink-muted)" }}>{r.title}</div>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--ink-secondary)", fontStyle: "italic", lineHeight: 1.6 }}>
              "{r.quote}"
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Stats Row */}
      <div className="sidebar-stats-card" style={{ gridTemplateColumns: "repeat(4, 1fr)", padding: "1.5rem", background: "var(--bg-card-white)" }}>
        <div>
          <div className="sb-stat-num" style={{ fontSize: "2rem" }}>15+</div>
          <div className="sb-stat-label">Projects Delivered</div>
        </div>
        <div>
          <div className="sb-stat-num" style={{ fontSize: "2rem" }}>99%</div>
          <div className="sb-stat-label">QA Coverage</div>
        </div>
        <div>
          <div className="sb-stat-num" style={{ fontSize: "2rem" }}>4+</div>
          <div className="sb-stat-label">Years Experience</div>
        </div>
        <div>
          <div className="sb-stat-num" style={{ fontSize: "2rem" }}>100%</div>
          <div className="sb-stat-label">On-Time Delivery</div>
        </div>
      </div>
    </section>
  );
}
