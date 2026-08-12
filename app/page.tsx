"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import ProcessSection from "@/components/ProcessSection";
import WorkSamplesSection from "@/components/WorkSamplesSection";
import FaqSection from "@/components/FaqSection";
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
    <div className="app-container">
      {/* Sidebar Navigation */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Content Area */}
      <main className="content-column">
        {/* Giant Hero Section with Cutout Profile */}
        <HeroSection onOpenCvModal={() => setCvModalOpen(true)} />

        {/* Journey Timeline Section ('21, '23, '25) */}
        <JourneySection onOpenCvModal={() => setCvModalOpen(true)} />

        {/* The Stack I Build With */}
        <SkillsSection />

        {/* Built to Scale, Made to Perform (Projects Rows) */}
        <ProjectsSection onOpenProjectsModal={() => setProjectsModalOpen(true)} />

        {/* What You Get? */}
        <WhatYouGetSection />

        {/* Solutions That Deliver (Services) */}
        <ProcessSection />

        {/* From People I've Worked With (Testimonials & Impact Stats) */}
        <WorkSamplesSection />

        {/* Got any questions? (FAQ Accordion) */}
        <FaqSection />

        {/* Footer with Giant DURJOY Header */}
        <Footer onOpenCvModal={() => setCvModalOpen(true)} />
      </main>

      {/* Interactive Modals */}
      <ProjectsModal isOpen={projectsModalOpen} onClose={() => setProjectsModalOpen(false)} />
      <ReviewsModal isOpen={reviewsModalOpen} onClose={() => setReviewsModalOpen(false)} />
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}
