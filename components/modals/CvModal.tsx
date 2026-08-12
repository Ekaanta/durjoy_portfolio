"use client";

import React, { useEffect } from "react";
import { X, Mail, Briefcase, GraduationCap, Award } from "lucide-react";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "850px" }}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.75rem", borderBottom: "1px solid var(--border)", paddingBottom: "1.25rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "var(--purple-primary)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
              CURRICULUM VITAE / RESUME SUMMARY
            </div>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.8rem", fontWeight: 800, margin: "0.2rem 0" }}>
              Ekanta Banik (Durjoy)
            </h2>
            <div style={{ fontSize: "0.9rem", color: "var(--ink-muted)" }}>
              AI/ML Engineer & Technical Project Coordinator • Dhaka, Bangladesh
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <a
              href="mailto:durjoybanik35138@gmail.com?subject=Inquiry%20from%20Portfolio%20CV"
              className="btn-hire-gold"
              style={{ fontSize: "0.82rem", padding: "0.65rem 1.25rem", width: "auto", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
            >
              <Mail size={14} />
              <span>Contact Durjoy</span>
            </a>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {/* Career Objective */}
          <div>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--purple-primary)" }}>
              Career Objective
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--ink-secondary)", lineHeight: 1.7 }}>
              AI Engineer with hands-on experience in Large Language Models (LLMs), Generative AI, Agentic AI systems, and computer vision applications. Experienced in developing intelligent automation pipelines and AI-driven solutions. Seeking an AI/ML Engineer, AI Automation Engineer, or GenAI Developer role to build innovative, real-world AI products.
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
              <Briefcase size={20} style={{ color: "var(--purple-primary)" }} />
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--purple-primary)", margin: 0 }}>
                Professional Experience
              </h3>
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "0.95rem" }}>
                <span>Jr. AI Engineer — Sparktech AI Limited</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "var(--purple-badge-text)" }}>01/2025 – Present</span>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--ink-muted)", marginBottom: "0.4rem" }}>
                Gulshan-1, Dhaka, Bangladesh
              </div>
              <ul style={{ fontSize: "0.88rem", color: "var(--ink-secondary)", paddingLeft: "1.2rem", lineHeight: 1.6 }}>
                <li>Working on AI-powered solutions and automation workflows using Python, LangChain, N8N, and FastAPI.</li>
                <li>Developed and integrated AI agents, LLM-based applications, APIs, and automated workflows to improve business processes and deliver intelligent software solutions.</li>
              </ul>
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "0.95rem" }}>
                <span>Project Coordinator — Unilever (UCL-Bangladesh)</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "var(--purple-badge-text)" }}>01/2025 – Present</span>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--ink-muted)", marginBottom: "0.4rem" }}>
                Gulshan-1, Dhaka, Bangladesh
              </div>
              <ul style={{ fontSize: "0.88rem", color: "var(--ink-secondary)", paddingLeft: "1.2rem", lineHeight: 1.6 }}>
                <li>Managed and supported projects related to retail and consumer-based software solutions.</li>
                <li>Coordinated with teams to ensure smooth execution, tracked progress, and helped deliver solutions aligned with business and customer needs.</li>
              </ul>
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "0.95rem" }}>
                <span>Technical Project Coordinator / Trainee — Pureit</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "var(--purple-badge-text)" }}>03/2022 – 09/2024</span>
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--ink-muted)", marginBottom: "0.4rem" }}>
                Mohakhali DOHS, Dhaka, Bangladesh
              </div>
              <ul style={{ fontSize: "0.88rem", color: "var(--ink-secondary)", paddingLeft: "1.2rem", lineHeight: 1.6 }}>
                <li>Worked on requirement analysis, project planning, task tracking, team coordination, API integration, software development lifecycle, and ensuring timely project delivery.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <GraduationCap size={20} style={{ color: "var(--purple-primary)" }} />
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--purple-primary)", margin: 0 }}>
                Education
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ background: "var(--purple-light)", padding: "1rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--sandy-amber)" }}>
                <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>Canadian University of Bangladesh</div>
                <div style={{ fontSize: "0.85rem", color: "var(--purple-dark)" }}>Bachelor of Science in Computer Science and Engineering</div>
                <div style={{ fontSize: "0.78rem", color: "var(--ink-muted)" }}>08/2022 – 05/2026 • Merul-Badda, Dhaka, Bangladesh</div>
              </div>
              <div style={{ background: "var(--purple-light)", padding: "1rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--sandy-amber)" }}>
                <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>Institute of Computer Science and Technology</div>
                <div style={{ fontSize: "0.85rem", color: "var(--purple-dark)" }}>Diploma in Computer Science</div>
                <div style={{ fontSize: "0.78rem", color: "var(--ink-muted)" }}>2018 – 2022 • Feni Sadar, Feni, Bangladesh</div>
              </div>
            </div>
          </div>

          {/* Certificate */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <Award size={20} style={{ color: "var(--purple-primary)" }} />
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--purple-primary)", margin: 0 }}>
                Certificates & Courses
              </h3>
            </div>
            <div style={{ fontSize: "0.9rem", color: "var(--ink-secondary)", background: "var(--bg-card)", padding: "0.85rem 1.1rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
              <strong>Technical Automation:</strong> Manual and Automated Project Management Course (PMC)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
