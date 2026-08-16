"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, FileText, ArrowDown } from "lucide-react";

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
          <div className="stat-pill-lbl">Coordinator & Specialist</div>
        </div>
        <div className="stat-pill-box">
          <div className="stat-pill-num">30<span>+</span></div>
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
          width={340}
          height={410}
          className="hero-profile-img"
          priority
        />

        {/* Elegant Executive Badge */}
        <div className="hero-chest-badge">
          <span>Software Project Coordinator & AI Specialist</span>
        </div>
      </div>

      {/* Sub-headline description */}
      <div style={{ textAlign: "center", maxWidth: "640px", margin: "1.1rem auto 0", zIndex: 10, position: "relative" }}>
        <p style={{ fontSize: "0.95rem", color: "var(--ink-secondary)", fontWeight: 500, lineHeight: 1.55 }}>
          Building intelligent AI agents, LLM automation pipelines, and leading agile software project delivery for enterprise & consumer products.
        </p>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginTop: "1.15rem", flexWrap: "wrap", zIndex: 10, position: "relative" }}>
        <a href="#projects" className="btn-hire-gold" style={{ width: "auto", padding: "0.75rem 1.6rem", fontSize: "0.86rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
          <span>Explore AI & PM Projects</span>
          <ArrowDown size={15} />
        </a>
        <a
          href="https://durjoy-ai.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          className="read-more-btn"
          style={{ padding: "0.75rem 1.4rem", fontSize: "0.86rem", background: "var(--bg-card-white)", borderColor: "var(--sandy-amber)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
        >
          <span>Live AI Site</span>
          <ExternalLink size={14} />
        </a>
        <button
          onClick={onOpenCvModal}
          className="read-more-btn"
          style={{ padding: "0.75rem 1.4rem", fontSize: "0.86rem", background: "var(--ink)", color: "#ffffff", borderColor: "var(--ink)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
        >
          <FileText size={15} />
          <span>View Full CV</span>
        </button>
      </div>
    </section>
  );
}
