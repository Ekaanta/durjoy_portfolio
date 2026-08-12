"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export default function HeroSection({ onOpenCvModal }: HeroSectionProps) {
  return (
    <section className="hero-editorial" id="hero">
      {/* Top Left Stats Overlay */}
      <div className="hero-top-left-stats">
        <div className="stat-pill-box">
          <div className="stat-pill-num">AI<span>/ML</span></div>
          <div className="stat-pill-lbl">Sparktech AI & Unilever</div>
        </div>
        <div className="stat-pill-box">
          <div className="stat-pill-num">7<span>+</span></div>
          <div className="stat-pill-lbl">Real AI & PM Projects</div>
        </div>
      </div>

      {/* Giant Typography Header */}
      <h1 className="giant-hero-text">
        D U <span className="black-text">R</span> J O Y
      </h1>

      {/* Centered Cutout Profile Photo with Chest Badge */}
      <div className="hero-cutout-wrap">
        <Image
          src="/images/durjoy-hero.png"
          alt="Ekanta Banik (Durjoy) - AI/ML Engineer & Project Coordinator"
          width={400}
          height={480}
          className="hero-profile-img"
          priority
        />

        <div className="hero-chest-badge">
          <span>AI/ML Engineer & Project Coordinator</span>
          <span className="chest-badge-gold">GenAI & LLMs</span>
        </div>
      </div>

      {/* Interactive Quick Links */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.8rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
        <a href="#projects" className="btn-hire-gold" style={{ width: "auto", padding: "0.8rem 1.8rem" }}>
          Explore AI & PM Projects ↓
        </a>
        <a
          href="https://durjoy-ai.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          className="read-more-btn"
          style={{ padding: "0.8rem 1.6rem", fontSize: "0.88rem" }}
        >
          Live AI Site ↗
        </a>
        <button
          onClick={onOpenCvModal}
          className="read-more-btn"
          style={{ padding: "0.8rem 1.6rem", fontSize: "0.88rem", background: "var(--ink)", color: "#ffffff" }}
        >
          View Full CV
        </button>
      </div>
    </section>
  );
}
