"use client";

import React from "react";
import Image from "next/image";

interface ProjectsSectionProps {
  onOpenProjectsModal: () => void;
}

export default function ProjectsSection({ onOpenProjectsModal }: ProjectsSectionProps) {
  return (
    <section id="projects">
      <div className="section-label">02 / FEATURED PROJECTS</div>
      
      {/* Project 1: Bornolipi */}
      <div className="proj-card fade-up">
        <div className="proj-inner-grid">
          <div className="proj-info">
            <div className="proj-num">01 / FEATURED CASE STUDY</div>
            <h3 className="proj-name">Bornolipi – Multi-Platform Learning Ecosystem</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              A comprehensive educational platform designed to teach the Bengali alphabet, pronunciation, and language writing across mobile and web interfaces. Managed end-to-end QA planning, test automation, and cross-platform release synchronization.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.25rem" }}>
              <div style={{ fontSize: "0.8rem", color: "var(--ink)", fontWeight: 600 }}>Key Deliverables:</div>
              <div style={{ fontSize: "0.78rem", color: "var(--muted)", paddingLeft: "0.85rem", borderLeft: "2px solid var(--gold)" }}>
                • Built Playwright & Selenium automated test suites covering 95%+ of user workflows.
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--muted)", paddingLeft: "0.85rem", borderLeft: "2px solid var(--border)" }}>
                • Orchestrated bi-weekly Agile sprint cycles and backlog grooming sessions.
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--muted)", paddingLeft: "0.85rem", borderLeft: "2px solid var(--border)" }}>
                • Managed complete UI/UX consistency across iOS, Android, and Web clients.
              </div>
            </div>
            <div className="tags">
              <span className="tag">Agile Management</span>
              <span className="tag">Playwright</span>
              <span className="tag">C# / .NET</span>
              <span className="tag">Selenium</span>
              <span className="tag">Postman</span>
              <span className="tag">Jira</span>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <button onClick={onOpenProjectsModal} className="btn-primary">
                View Full Bornolipi Gallery & Slides ({'11 Slides'})
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/images/bornolipi-cover.png"
              alt="Bornolipi Cover"
              width={600}
              height={400}
              className="large-proj-img"
            />
          </div>
        </div>
      </div>

      {/* Project 2: Hidaya App */}
      <div className="proj-card fade-up">
        <div className="proj-inner-grid">
          <div style={{ order: 2 }}>
            <Image
              src="/images/hidaya-app.png"
              alt="Hidaya App"
              width={600}
              height={400}
              className="large-proj-img"
            />
          </div>
          <div className="proj-info" style={{ order: 1 }}>
            <div className="proj-num">02 / MOBILE & COMMUNITY PLATFORM</div>
            <h3 className="proj-name">Hidaya App – Islamic Lifestyle Platform</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              A feature-rich mobile app offering accurate prayer schedules, location-based Qibla compass, Quranic audio, and community tools. Led QA automation, localization validation across multiple languages, and release management.
            </p>
            <div className="tags">
              <span className="tag">Mobile QA</span>
              <span className="tag">App Testing</span>
              <span className="tag">Localization</span>
              <span className="tag">API Testing</span>
              <span className="tag">Postman</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3: Barbers Time */}
      <div className="proj-card fade-up">
        <div className="proj-inner-grid">
          <div className="proj-info">
            <div className="proj-num">03 / SAAS & BOOKING PLATFORM</div>
            <h3 className="proj-name">Barbers Time – Shop & Appointment SaaS</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              An online appointment scheduling and shop management system for barbershops and salons. Designed test plans for real-time calendar syncing, multi-tenant payment gateways, and push notifications.
            </p>
            <div className="tags">
              <span className="tag">SaaS PM</span>
              <span className="tag">Web Application</span>
              <span className="tag">Payment Gateway QA</span>
              <span className="tag">Postgres</span>
            </div>
          </div>
          <div>
            <Image
              src="/images/barbers-time-login.png"
              alt="Barbers Time Login"
              width={600}
              height={400}
              className="large-proj-img"
            />
          </div>
        </div>
      </div>

      {/* Project 4: QA Framework */}
      <div className="proj-card fade-up">
        <div className="proj-inner-grid">
          <div style={{ order: 2 }}>
            <Image
              src="/images/qa-tracker.png"
              alt="QA Tracker"
              width={600}
              height={400}
              className="large-proj-img"
            />
          </div>
          <div className="proj-info" style={{ order: 1 }}>
            <div className="proj-num">04 / INTERNAL INFRASTRUCTURE</div>
            <h3 className="proj-name">Automated QA Framework & Defect Matrix</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Developed custom automated testing frameworks and interactive defect tracking dashboards that reduced regression execution time by 65% and streamlined client bug reporting.
            </p>
            <div className="tags">
              <span className="tag">Test Automation</span>
              <span className="tag">Playwright</span>
              <span className="tag">C# .NET</span>
              <span className="tag">CI/CD Pipeline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
