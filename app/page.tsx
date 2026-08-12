"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import AutomationSection from "@/components/AutomationSection";
import WorkSamplesSection from "@/components/WorkSamplesSection";
import MeetingsSection from "@/components/MeetingsSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import ProjectsModal from "@/components/modals/ProjectsModal";
import ReviewsModal from "@/components/modals/ReviewsModal";
import CvModal from "@/components/modals/CvModal";

export default function Home() {
  const [projectsModalOpen, setProjectsModalOpen] = useState(false);
  const [reviewsModalOpen, setReviewsModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    // IntersectionObserver for scroll animations
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              e.target.classList.add("visible");
            }, i * 60);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));

    return () => {
      obs.disconnect();
    };
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "var(--paper)" }}>
      {/* Navigation */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Hero Section */}
      <HeroSection onOpenReviewsModal={() => setReviewsModalOpen(true)} />

      {/* 01 / Core Competencies */}
      <SkillsSection />

      {/* 02 / Featured Projects */}
      <ProjectsSection onOpenProjectsModal={() => setProjectsModalOpen(true)} />

      {/* 03 / My Methodology */}
      <ProcessSection />

      {/* 04 / Automation Architecture */}
      <AutomationSection />

      {/* 05 / QA & Management Artifacts */}
      <WorkSamplesSection />

      {/* 06 / Leadership & Meetings */}
      <MeetingsSection />

      {/* 07 / Tools & Tech Stack */}
      <ToolsSection />

      {/* 08 / Get in Touch */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectsModal isOpen={projectsModalOpen} onClose={() => setProjectsModalOpen(false)} />
      <ReviewsModal isOpen={reviewsModalOpen} onClose={() => setReviewsModalOpen(false)} />
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </main>
  );
}
