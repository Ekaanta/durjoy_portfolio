"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, FileText, ArrowDown, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export default function HeroSection({ onOpenCvModal }: HeroSectionProps) {
  return (
    <section className="hero-editorial" id="hero">
      {/* Top Left Floating Stat Pill */}
      <div className="hero-top-left-stats">
        <div className="stat-pill-box">
          <div className="stat-pill-num">PM<span>&AI</span></div>
          <div className="stat-pill-lbl">Sparktech AI & Unilever</div>
        </div>
        <div className="stat-pill-box">
          <div className="stat-pill-num">7<span>+</span></div>
          <div className="stat-pill-lbl">Real AI & PM Projects</div>
        </div>
      </div>

      {/* Giant Typography Header behind Cutout */}
      <h1 className="giant-hero-text">
        <span className="hero-title-nowrap">
          D U <span className="black-text">R</span> J O Y
        </span>
      </h1>

      {/* Transparent Cutout Profile Photo Overlay */}
      <div className="hero-cutout-wrap">
        <Image
          src="/images/durjoy-hero.png"
          alt="Ekanta Banik (Durjoy) - Software Project Coordinator & AI Specialist"
          width={440}
          height={520}
          className="hero-profile-img"
          priority
        />

        {/* Elegant Executive Badge */}
        <div className="hero-chest-badge">
          <Sparkles size={15} style={{ color: "#ffffff", flexShrink: 0 }} />
          <span className="chest-badge-gold">GenAI & LLMs</span>
        </div>
      </div>

      {/* Sub-headline description */}
      <div style={{ textAlign: "center", maxWidth: "680px", margin: "2rem auto 0", zIndex: 10, position: "relative" }}>
        <p style={{ fontSize: "1.05rem", color: "var(--ink-secondary)", fontWeight: 500, lineHeight: 1.6 }}>
          Building intelligent AI agents, LLM automation pipelines, and leading agile software project delivery for enterprise & consumer products.
        </p>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem", flexWrap: "wrap", zIndex: 10, position: "relative" }}>
        <a href="#projects" className="btn-hire-gold" style={{ width: "auto", padding: "0.85rem 2rem", fontSize: "0.92rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
          <span>Explore AI & PM Projects</span>
          <ArrowDown size={16} />
        </a>
        <a
          href="https://durjoy-ai.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          className="read-more-btn"
          style={{ padding: "0.85rem 1.75rem", fontSize: "0.92rem", background: "var(--bg-card-white)", borderColor: "var(--sandy-amber)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
        >
          <span>Live AI Site</span>
          <ExternalLink size={15} />
        </a>
        <button
          onClick={onOpenCvModal}
          className="read-more-btn"
          style={{ padding: "0.85rem 1.75rem", fontSize: "0.92rem", background: "var(--ink)", color: "#ffffff", borderColor: "var(--ink)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
        >
          <FileText size={16} />
          <span>View Full CV</span>
        </button>
      </div>
    </section>
  );
}
