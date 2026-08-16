"use client";

import React from "react";
import Image from "next/image";
import { Play, Video, Clock, CheckCircle2 } from "lucide-react";

export interface VideoItem {
  id: string;
  badgeNum: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  videoUrl: string;
  bullets: string[];
}

interface ClientManagementSectionProps {
  onOpenVideoModal: (video: VideoItem) => void;
}

const clientVideos: VideoItem[] = [
  {
    id: "demo-1",
    badgeNum: "01",
    title: "Sprint Review & E-Commerce QA Walkthrough",
    subtitle: "VEVOR Platform Feature Validation & Bug Triage",
    description: "Live recording demonstration of cross-functional agile sprint facilitation, defect severity classification, and test automation sign-off for international e-commerce software.",
    image: "/images/client-meeting-demo.jpg",
    videoUrl: "https://drive.google.com/file/d/1BfkvPwprIDzNotT-e-2nLXkHIYFXaDT8/preview",
    bullets: [
      "Agile sprint backlog review & velocity forecasting",
      "Live bug triage and API defect reproduction",
      "Stakeholder alignment and sprint sign-off"
    ]
  },
  {
    id: "demo-2",
    badgeNum: "02",
    title: "Theory Panda SaaS & Portal Milestone Review",
    subtitle: "Management Portal & Hazard Perception Verification",
    description: "Live stakeholder session verifying driver theory portal features, user workflow execution, and client requirement verification across distributed engineering teams.",
    image: "/images/client-meeting-demo-2.png",
    videoUrl: "https://drive.google.com/file/d/1Ven1VAkxPzPoo3PuU_AmQiBw4iOduPG1/preview",
    bullets: [
      "SaaS management portal feature inspection",
      "Cross-border communication with remote clients",
      "Release milestone validation & delivery approval"
    ]
  }
];

export default function ClientManagementSection({ onOpenVideoModal }: ClientManagementSectionProps) {
  return (
    <section className="section-wrapper" id="client-management">
      <div className="section-tag" style={{ fontFamily: "'Poppins', sans-serif" }}>
        INTERNATIONAL COLLABORATION
      </div>
      <h2 className="section-title-large" style={{ fontFamily: "'Poppins', sans-serif" }}>
        International Client<br />
        <em>Management</em>
      </h2>
      <p
        style={{
          maxWidth: "640px",
          color: "var(--ink-muted)",
          fontSize: "0.95rem",
          marginBottom: "2.5rem",
          lineHeight: 1.6,
          fontFamily: "'Poppins', sans-serif"
        }}
      >
        Demonstrating effective cross-border stakeholder communication, agile ceremony leadership, and clear technical alignment across global time zones.
      </p>

      {/* Two Videos in the Same Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "1.75rem"
        }}
      >
        {clientVideos.map((video) => (
          <div
            key={video.id}
            className="fade-up"
            style={{
              background: "var(--bg-card-white)",
              border: "1px solid var(--sandy-amber)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              boxShadow: "var(--shadow-sm)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "1.5rem",
              gap: "1.25rem",
              fontFamily: "'Poppins', sans-serif",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            {/* Video Thumbnail Box with Play Badge */}
            <div
              onClick={() => onOpenVideoModal(video)}
              style={{
                position: "relative",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                cursor: "pointer",
                aspectRatio: "16 / 9",
                border: "1px solid var(--border)",
                background: "#1e110c",
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)"
              }}
            >
              <Image
                src={video.image}
                alt={video.title}
                fill
                style={{ objectFit: "cover", opacity: 0.9, transition: "all 0.3s ease" }}
              />

              {/* Dark Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(42, 23, 17, 0.88) 0%, rgba(42, 23, 17, 0.2) 60%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "1rem"
                }}
              >
                {/* Top Badges */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      background: "rgba(227, 83, 54, 0.95)",
                      color: "#ffffff",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "0.25rem 0.55rem",
                      borderRadius: "var(--radius-sm)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem"
                    }}
                  >
                    <Video size={12} />
                    <span>DEMO {video.badgeNum}</span>
                  </span>

                  <span
                    style={{
                      background: "rgba(0, 0, 0, 0.65)",
                      color: "#ffffff",
                      fontSize: "0.68rem",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "var(--radius-sm)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem"
                    }}
                  >
                    <Clock size={11} />
                    <span>REC • LIVE</span>
                  </span>
                </div>

                {/* Center Play Button */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: "var(--purple-primary)",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(227, 83, 54, 0.5)",
                      transition: "all 0.25s ease"
                    }}
                  >
                    <Play size={20} style={{ marginLeft: "3px" }} />
                  </div>
                </div>

                {/* Bottom Video Name */}
                <div>
                  <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.92rem", lineHeight: 1.3 }}>
                    {video.title}
                  </div>
                </div>
              </div>
            </div>

            {/* Video Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", flex: 1, justifyContent: "space-between" }}>
              <div>
                <span className="type-badge" style={{ marginBottom: "0.4rem", display: "inline-block" }}>
                  DEMO {video.badgeNum} • {video.subtitle}
                </span>
                <p style={{ fontSize: "0.86rem", color: "var(--ink-secondary)", lineHeight: 1.55 }}>
                  {video.description}
                </p>
              </div>

              {/* Bullets */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {video.bullets.map((bullet, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      fontSize: "0.82rem",
                      color: "var(--ink-secondary)",
                      fontWeight: 500
                    }}
                  >
                    <CheckCircle2 size={15} style={{ color: "var(--purple-primary)", flexShrink: 0 }} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div style={{ paddingTop: "0.5rem" }}>
                <button
                  onClick={() => onOpenVideoModal(video)}
                  className="btn-hire-gold"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    width: "100%",
                    justifyContent: "center",
                    padding: "0.75rem 1.5rem",
                    fontSize: "0.88rem",
                    cursor: "pointer"
                  }}
                >
                  <Play size={16} style={{ fill: "#ffffff" }} />
                  <span>Watch Video {video.badgeNum}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
