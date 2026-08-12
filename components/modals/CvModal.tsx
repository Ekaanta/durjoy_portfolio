"use client";

import React, { useEffect } from "react";

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
          ✕
        </button>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.75rem", borderBottom: "1px solid var(--border)", paddingBottom: "1.25rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "var(--gold-dark)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              CURRICULUM VITAE / RESUME SUMMARY
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.8rem", fontWeight: 700, margin: "0.2rem 0" }}>
              Ekanta Banik Durjoy
            </h2>
            <div style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
              Project Manager & QA Specialist • Remote / Hybrid
            </div>
          </div>
          <a
            href="mailto:durjoybanik35138@gmail.com?subject=Inquiry%20from%20Portfolio%20CV"
            className="btn-primary"
            style={{ fontSize: "0.82rem", padding: "0.65rem 1.25rem" }}
          >
            Request Official PDF
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {/* Executive Summary */}
          <div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--gold-dark)" }}>
              Executive Summary
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7 }}>
              Results-driven Project Manager and QA Specialist with 4+ years of hands-on experience managing web, mobile, and SaaS product deliveries. Adept at coordinating cross-functional Agile teams, implementing automated QA testing frameworks (Playwright, C#), and maintaining 99%+ quality assurance standards across production releases.
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--gold-dark)" }}>
              Core Technical & PM Skills
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.85rem", fontSize: "0.85rem" }}>
              <div style={{ background: "var(--paper-card)", padding: "0.85rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
                <strong>Agile / Scrum:</strong> Sprint planning, Jira backlog grooming, retrospectives.
              </div>
              <div style={{ background: "var(--paper-card)", padding: "0.85rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
                <strong>Test Automation:</strong> Playwright, Selenium, C# / ASP.NET Core.
              </div>
              <div style={{ background: "var(--paper-card)", padding: "0.85rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
                <strong>API & DB:</strong> Postman, REST API, PostgreSQL, MongoDB, SQL.
              </div>
              <div style={{ background: "var(--paper-card)", padding: "0.85rem", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)" }}>
                <strong>DevOps & CI/CD:</strong> GitHub Actions, Git, Release Checklists.
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.85rem", color: "var(--gold-dark)" }}>
              Professional Experience
            </h3>

            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "0.95rem" }}>
                <span>Project Manager & Lead QA</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "var(--muted)" }}>2022 – Present</span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--rust)", marginBottom: "0.5rem" }}>
                Bornolipi & Client Projects
              </div>
              <ul style={{ fontSize: "0.88rem", color: "var(--muted)", paddingLeft: "1.2rem", lineHeight: 1.6 }}>
                <li>Led cross-functional development team across bi-weekly Agile sprints for mobile & web apps.</li>
                <li>Implemented Playwright test automation suite reducing manual regression testing by 65%.</li>
                <li>Managed client communication, requirement documentation, and post-launch maintenance.</li>
              </ul>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "0.95rem" }}>
                <span>QA Specialist & Agile Coordinator</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "var(--muted)" }}>2020 – 2022</span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--rust)", marginBottom: "0.5rem" }}>
                Software & Digital Solutions
              </div>
              <ul style={{ fontSize: "0.88rem", color: "var(--muted)", paddingLeft: "1.2rem", lineHeight: 1.6 }}>
                <li>Created automated and manual test plans for client web platforms.</li>
                <li>Coordinated defect triage meetings, tracked bug resolution in Jira, and delivered client updates.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
