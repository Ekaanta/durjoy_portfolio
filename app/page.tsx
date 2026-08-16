"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import ProcessSection from "@/components/ProcessSection";
import ClientManagementSection, { VideoItem } from "@/components/ClientManagementSection";
import WorkSamplesSection from "@/components/WorkSamplesSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
        <ProjectsSection onOpenProjectsModal={(index: number) => setSelectedProjectIndex(index)} />

        {/* What You Get? */}
        <WhatYouGetSection />

        {/* Solutions That Deliver (Services) */}
        <ProcessSection />

        {/* International Client Management Section with 2 Side-by-Side Video Demos */}
        <ClientManagementSection onOpenVideoModal={(video: VideoItem) => setSelectedVideo(video)} />

        {/* From People I've Worked With (Testimonials & Impact Stats) */}
        <WorkSamplesSection />

        {/* Got any questions? (FAQ Accordion) */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer with Copyright & Back to Top */}
        <Footer onOpenCvModal={() => setCvModalOpen(true)} />
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
