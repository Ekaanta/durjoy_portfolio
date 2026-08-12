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
          <div className="stat-pill-num">15<span>+</span></div>
          <div className="stat-pill-lbl">Projects Delivered</div>
        </div>
        <div className="stat-pill-box">
          <div className="stat-pill-num">4<span>+</span></div>
          <div className="stat-pill-lbl">Years Experience</div>
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
          alt="Durjoy - Project Manager & QA Lead"
          width={400}
          height={480}
          className="hero-profile-img"
          priority
        />

        <div className="hero-chest-badge">
          <span>Project Manager & QA Lead</span>
          <span className="chest-badge-gold">Agile & QA</span>
        </div>
      </div>
    </section>
  );
}
