"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  onOpenReviewsModal: () => void;
}

export default function HeroSection({ onOpenReviewsModal }: HeroSectionProps) {
  return (
    <div className="hero">
      <div className="hero-photo-col">
        <div className="hero-photo-wrap">
          <Image
            src="/images/durjoy-hero.png"
            alt="Ekanta Banik Durjoy"
            width={220}
            height={280}
            className="hero-photo"
            priority
          />
        </div>
      </div>
      <div className="hero-content-col">
        <div className="hero-tag-line">PROJECT MANAGER & QA SPECIALIST</div>
        <h1 className="hero-name">
          Ekanta Banik Durjoy
          <span>Bridging product vision, QA rigor, and team execution</span>
        </h1>
        <div className="hero-role">Remote / Hybrid • Available for Full-Time & Contract Roles</div>
        <p className="hero-desc">
          Specializing in driving web & mobile projects from kickoff to launch. I combine hands-on QA test automation expertise with structured Agile sprint management to deliver defect-free products on schedule.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">
            Explore Projects
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
          <button onClick={onOpenReviewsModal} className="btn-outline" style={{ background: "var(--paper2)", cursor: "pointer" }}>
            View Reviews
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat-box">
            <div className="stat-num">
              4<span>+</span>
            </div>
            <div className="stat-label">Years Exp.</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">
              15<span>+</span>
            </div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">
              99<span>%</span>
            </div>
            <div className="stat-label">QA Coverage</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">
              0<span></span>
            </div>
            <div className="stat-label">Critical Post-Launch Bugs</div>
          </div>
        </div>
      </div>
    </div>
  );
}
