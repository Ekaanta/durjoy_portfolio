"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import ClientManagementSection, { VideoItem } from "@/components/ClientManagementSection";
import WorkSamplesSection from "@/components/WorkSamplesSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";

import ProjectsModal from "@/components/modals/ProjectsModal";
import ReviewsModal from "@/components/modals/ReviewsModal";
import CvModal from "@/components/modals/CvModal";
import VideoModal from "@/components/modals/VideoModal";

export default function Home() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [reviewsModalOpen, setReviewsModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  useEffect(() => {
    // IntersectionObserver for scroll animations
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              e.target.classList.add("visible");
            }, i * 50);
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

      {/* Main Content Area with Unified 1180px Max-Width Grid */}
      <main className="content-column">
        {/* 1. Hero Section */}
        <HeroSection onOpenCvModal={() => setCvModalOpen(true)} />

        {/* 2. Professional Journey / Experience Section */}
        <JourneySection onOpenCvModal={() => setCvModalOpen(true)} />

        {/* 3. Technical Capabilities / Stack */}
        <SkillsSection />

        {/* 4. Featured Projects Showcase */}
        <ProjectsSection onOpenProjectsModal={(index: number) => setSelectedProjectIndex(index)} />

        {/* 5. What I Deliver (Consolidated Capabilities) */}
        <WhatYouGetSection />

        {/* 6. International Client Management (Video Demos) */}
        <ClientManagementSection onOpenVideoModal={(video: VideoItem) => setSelectedVideo(video)} />

        {/* 7. Results & Verified Client Reviews */}
        <WorkSamplesSection />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* Interactive Modals */}
      <ProjectsModal
        isOpen={selectedProjectIndex !== null}
        initialSlide={selectedProjectIndex ?? 0}
        onClose={() => setSelectedProjectIndex(null)}
      />
      <ReviewsModal isOpen={reviewsModalOpen} onClose={() => setReviewsModalOpen(false)} />
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.videoUrl}
        title={selectedVideo?.title}
        description={selectedVideo?.description}
      />
    </div>
  );
}
