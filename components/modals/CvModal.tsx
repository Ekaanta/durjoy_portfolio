"use client";

import React from "react";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "850px" }}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "var(--gold-dark)", textTransform: "uppercase" }}>
              RESUME / CURRICULUM VITAE
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.6rem", fontWeight: 700 }}>
              Ekanta Banik Durjoy
            </h2>
            <div style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
              Project Manager & QA Specialist • Remote / Hybrid
            </div>
          </div>
          <a
            href="mailto:durjoybanik35138@gmail.com?subject=Inquiry%20from%20Portfolio%20CV"
            className="btn-primary"
            style={{ fontSize: "0.75rem", padding: "0.6rem 1.2rem" }}
          >
            Request Official PDF
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Executive Summary */}
          <div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--gold-dark)" }}>
              Executive Summary
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7 }}>
              Results-driven Project Manager and QA Specialist with 4+ years of hands-on experience managing web, mobile, and SaaS product deliveries. Adept at coordinating cross-functional Agile teams, implementing automated QA testing frameworks (Playwright, C#), and maintaining 99%+ quality assurance standards across production releases.
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--gold-dark)" }}>
              Core Technical & PM Skills
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem", fontSize: "0.8rem" }}>
              <div style={{ background: "var(--paper2)", padding: "0.75rem", borderRadius: "4px" }}>
                <strong>Agile / Scrum:</strong> Sprint planning, Jira backlog grooming, retrospectives.
              </div>
              <div style={{ background: "var(--paper2)", padding: "0.75rem", borderRadius: "4px" }}>
                <strong>Test Automation:</strong> Playwright, Selenium, C# / ASP.NET Core.
              </div>
              <div style={{ background: "var(--paper2)", padding: "0.75rem", borderRadius: "4px" }}>
                <strong>API & DB:</strong> Postman, REST API, PostgreSQL, MongoDB, SQL.
              </div>
              <div style={{ background: "var(--paper2)", padding: "0.75rem", borderRadius: "4px" }}>
                <strong>DevOps & CI/CD:</strong> GitHub Actions, Git, Release Checklists.
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--gold-dark)" }}>
              Professional Experience
            </h3>

            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "0.9rem" }}>
                <span>Project Manager & Lead QA</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "var(--muted)" }}>2022 – Present</span>
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--rust)", marginBottom: "0.4rem" }}>
                Bornolipi & Client Projects
              </div>
              <ul style={{ fontSize: "0.8rem", color: "var(--muted)", paddingLeft: "1.2rem", lineHeight: 1.6 }}>
                <li>Led cross-functional development team across bi-weekly Agile sprints for mobile & web apps.</li>
                <li>Implemented Playwright test automation suite reducing manual regression testing by 65%.</li>
                <li>Managed client communication, requirement documentation, and post-launch maintenance.</li>
              </ul>
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: "0.9rem" }}>
                <span>QA Specialist & Agile Coordinator</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "var(--muted)" }}>2020 – 2022</span>
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--rust)", marginBottom: "0.4rem" }}>
                Software & Digital Solutions
              </div>
              <ul style={{ fontSize: "0.8rem", color: "var(--muted)", paddingLeft: "1.2rem", lineHeight: 1.6 }}>
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
