"use client";

import React from "react";
import Image from "next/image";
import { Play, Video, Clock, CheckCircle2 } from "lucide-react";

interface ClientManagementSectionProps {
  onOpenVideoModal: () => void;
}

export default function ClientManagementSection({ onOpenVideoModal }: ClientManagementSectionProps) {
  return (
    <section className="section-wrapper" id="client-management">
      <div className="section-tag">INTERNATIONAL COLLABORATION</div>
      <h2 className="section-title-large">
        International Client<br />
        <em>Management</em>
      </h2>
      <p
        style={{
          maxWidth: "640px",
          color: "var(--ink-muted)",
          fontSize: "0.95rem",
          marginBottom: "2.5rem",
          lineHeight: 1.6
        }}
      >
        Demonstrating effective cross-border stakeholder communication, agile ceremony leadership, and clear technical alignment across global time zones.
      </p>

      <div
        className="fade-up"
        style={{
          background: "var(--bg-card-white)",
          border: "1px solid var(--sandy-amber)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          boxShadow: "var(--shadow-md)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          padding: "2rem"
        }}
      >
        {/* Video Thumbnail Box with Play Badge */}
        <div
          onClick={onOpenVideoModal}
          style={{
            position: "relative",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            cursor: "pointer",
            aspectRatio: "16 / 10",
            border: "1px solid var(--border)",
            background: "#1e110c",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)"
          }}
        >
          <Image
            src="/images/client-meeting-demo.jpg"
            alt="International Client Management Meeting Demo"
            fill
            style={{ objectFit: "cover", opacity: 0.9, transition: "all 0.3s ease" }}
          />

          {/* Dark Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(42, 23, 17, 0.85) 0%, rgba(42, 23, 17, 0.2) 60%, transparent 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "1.25rem"
            }}
          >
            {/* Top Video Badge */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  background: "rgba(227, 83, 54, 0.9)",
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  padding: "0.3rem 0.65rem",
                  borderRadius: "var(--radius-sm)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontFamily: "'DM Mono', monospace"
                }}
              >
                <Video size={13} />
                <span>CLIENT DEMO</span>
              </span>

              <span
                style={{
                  background: "rgba(0, 0, 0, 0.6)",
                  color: "#ffffff",
                  fontSize: "0.72rem",
                  padding: "0.25rem 0.55rem",
                  borderRadius: "var(--radius-sm)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontFamily: "'DM Mono', monospace"
                }}
              >
                <Clock size={12} />
                <span>REC • LIVE</span>
              </span>
            </div>

            {/* Center Play Button Icon */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: "50%",
                  background: "var(--purple-primary)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(227, 83, 54, 0.5)",
                  transition: "all 0.25s ease"
                }}
              >
                <Play size={24} style={{ marginLeft: "3px" }} />
              </div>
            </div>

            {/* Bottom Title Preview */}
            <div>
              <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "1rem" }}>
                Client Sprint Review & Technical Demo
              </div>
              <div style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "0.78rem" }}>
                Click to open video lightbox player
              </div>
            </div>
          </div>
        </div>

        {/* Details & Actions Column */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.25rem" }}>
          <div>
            <span className="type-badge" style={{ marginBottom: "0.5rem", display: "inline-block" }}>
              CROSS-BORDER LEADERSHIP
            </span>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.35rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.5rem" }}>
              Live Stakeholder Walkthrough & Q&A Session
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--ink-secondary)", lineHeight: 1.6 }}>
              A walkthrough session covering agile sprint progress, defect triage reports, live architecture demonstrations, and roadmap alignment for international software deliverables.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--ink-secondary)", fontWeight: 500 }}>
              <CheckCircle2 size={16} style={{ color: "var(--purple-primary)", flexShrink: 0 }} />
              <span>Agile sprint backlog review & velocity forecasting</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--ink-secondary)", fontWeight: 500 }}>
              <CheckCircle2 size={16} style={{ color: "var(--purple-primary)", flexShrink: 0 }} />
              <span>Transparent bug lifecycle tracking & quality sign-off</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--ink-secondary)", fontWeight: 500 }}>
              <CheckCircle2 size={16} style={{ color: "var(--purple-primary)", flexShrink: 0 }} />
              <span>Clear technical communication across distributed teams</span>
            </div>
          </div>

          <div>
            <button
              onClick={onOpenVideoModal}
              className="btn-hire-gold"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                width: "auto",
                padding: "0.85rem 2rem",
                fontSize: "0.92rem",
                cursor: "pointer"
              }}
            >
              <Play size={17} style={{ fill: "#ffffff" }} />
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
