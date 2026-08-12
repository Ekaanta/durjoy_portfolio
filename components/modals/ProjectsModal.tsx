"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const slides = [
  {
    title: "Bornolipi – App Cover & Branding",
    subtitle: "Educational Learning Platform",
    image: "/images/bornolipi-cover.png",
    description: "Primary visual design system and branding for Bornolipi Bengali learning platform."
  },
  {
    title: "Bornolipi – Educational Brochure",
    subtitle: "Marketing & Onboarding Collateral",
    image: "/images/brochure.png",
    description: "Detailed curriculum guide and feature overview distributed for institutional onboarding."
  },
  {
    title: "User Journey & Interactive Flow",
    subtitle: "UI/UX & Navigation Architecture",
    image: "/images/app-flow.png",
    description: "Comprehensive step-by-step user onboarding and tracing module progression."
  },
  {
    title: "Augmented Reality (AR) Tracing",
    subtitle: "Interactive Alphabet Learning",
    image: "/images/ar-experience.png",
    description: "AR-assisted character writing and stroke order verification engine."
  },
  {
    title: "Barbers Time – Mobile Login",
    subtitle: "Appointment Booking App",
    image: "/images/barbers-time-login.png",
    description: "Secure customer authentication, social sign-in, and instant booking interface."
  },
  {
    title: "Barbers Time – Shop Dashboard",
    subtitle: "SaaS Shop Management",
    image: "/images/shop-profile.png",
    description: "Barber schedule management, service pricing, and customer analytics."
  },
  {
    title: "Figma Component System",
    subtitle: "UI/UX Design Tokens",
    image: "/images/figma-design.png",
    description: "Reusable design components, typography scale, and color tokens."
  },
  {
    title: "QA Test Matrix & Defect Tracker",
    subtitle: "Automation Dashboard",
    image: "/images/qa-tracker.png",
    description: "Real-time Playwright execution results and severity-based bug classification."
  },
  {
    title: "Hidaya App – Community Screen",
    subtitle: "Islamic Community Features",
    image: "/images/hidaya-app.png",
    description: "Daily Quranic verses, notification settings, and community prayer requests."
  },
  {
    title: "Hidaya App – Qibla & Times",
    subtitle: "Geolocation Services",
    image: "/images/hidaya-home.png",
    description: "Precise GPS prayer timing calculations and dynamic Qibla compass alignment."
  },
  {
    title: "REST API Test Suite",
    subtitle: "Postman Automation",
    image: "/images/work-api-dashboard.png",
    description: "Automated API endpoints assertion tests, bearer token auth, and schema validation."
  }
];

export default function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "750px" }}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div style={{ marginBottom: "1rem" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "var(--gold-dark)", textTransform: "uppercase" }}>
            Slide {currentSlide + 1} of {slides.length}
          </div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.4rem", fontWeight: 700, margin: "0.2rem 0" }}>
            {slide.title}
          </h2>
          <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{slide.subtitle}</div>
        </div>

        <div style={{ background: "var(--paper2)", borderRadius: "4px", overflow: "hidden", position: "relative", marginBottom: "1rem" }}>
          <Image
            src={slide.image}
            alt={slide.title}
            width={700}
            height={450}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: "1.5rem" }}>
          {slide.description}
        </p>

        {/* Controls */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={prevSlide} className="btn-outline" style={{ padding: "0.5rem 1rem" }}>
            ← Previous
          </button>

          <div style={{ display: "flex", gap: "0.4rem" }}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: idx === currentSlide ? "20px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: idx === currentSlide ? "var(--gold)" : "var(--border)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="btn-primary" style={{ padding: "0.5rem 1rem" }}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
