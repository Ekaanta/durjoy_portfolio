"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  onOpenReviewsModal: () => void;
  onOpenCvModal: () => void;
}

export default function HeroSection({ onOpenReviewsModal, onOpenCvModal }: HeroSectionProps) {
  return (
    <section className="hero-wrapper" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content Column */}
          <div>
            <div className="hero-eyebrow">
              <span>●</span> PROJECT MANAGER & QA SPECIALIST
            </div>
            
            <h1 className="hero-title">
              Ekanta Banik Durjoy
              <span>Bridging product vision, QA rigor, and cross-functional team execution.</span>
            </h1>

            <p className="hero-tagline">
              I turn complex software projects into structured, reliable, and user-focused digital products.
            </p>

            <p className="hero-description">
              Specializing in driving web & mobile applications from kickoff to launch. I combine hands-on QA test automation expertise with structured Agile sprint management to deliver defect-free products on schedule.
            </p>

            <div className="hero-ctas">
              <a href="#projects" className="btn-primary">
                View My Work →
              </a>
              <a href="#contact" className="btn-outline">
                Let's Talk
              </a>
              <button onClick={onOpenReviewsModal} className="btn-outline">
                View Reviews
              </button>
              <button onClick={onOpenCvModal} className="btn-outline" style={{ background: "var(--paper-card)" }}>
                View Resume
              </button>
            </div>
          </div>

          {/* Right Profile Photo Card Column */}
          <div>
            <div className="hero-card">
              <div className="hero-image-wrap">
                <Image
                  src="/images/durjoy-hero.png"
                  alt="Ekanta Banik Durjoy"
                  width={340}
                  height={425}
                  priority
                />
              </div>
              <div className="hero-card-info">
                <div className="hero-card-status">
                  <span className="status-dot"></span> Available for Projects & Roles
                </div>
                <div className="hero-card-title">Remote & Hybrid Execution</div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials / Stats Row */}
        <div className="hero-stats-row">
          <div className="stat-box">
            <div className="stat-num">
              4<span>+</span>
            </div>
            <div className="stat-label">Years Experience</div>
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
            <div className="stat-label">QA Coverage Rate</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">
              0<span></span>
            </div>
            <div className="stat-label">Critical Post-Launch Bugs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
