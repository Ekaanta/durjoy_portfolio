"use client";

import React from "react";

interface ProjectsSectionProps {
  onOpenProjectsModal: () => void;
}

const projects = [
  {
    num: "01",
    title: "Bornolipi – Multi-Platform Learning Ecosystem",
    description: "Educational platform for Bengali alphabet & writing. Managed QA automation & sprint releases.",
    tags: ["Agile PM", "Playwright", "C# .NET", "Selenium"],
    timeline: "2023 - 2024"
  },
  {
    num: "02",
    title: "Hidaya App – Islamic Lifestyle & Community Platform",
    description: "Mobile app with prayer schedules, Qibla compass & audio. Led mobile QA & localization validation.",
    tags: ["Mobile QA", "App Testing", "Postman API"],
    timeline: "2023"
  },
  {
    num: "03",
    title: "Barbers Time – Service Booking & Shop SaaS",
    description: "Online appointment scheduling platform. Designed test plans for payment QA & calendar sync.",
    tags: ["SaaS PM", "Payment QA", "PostgreSQL"],
    timeline: "2024"
  },
  {
    num: "04",
    title: "Automated QA Framework & Defect Matrix",
    description: "Custom Playwright + GitHub Actions CI/CD pipeline framework reducing regression runtime by 65%.",
    tags: ["Test Automation", "Playwright", "CI/CD"],
    timeline: "2024 - 2025"
  }
];

export default function ProjectsSection({ onOpenProjectsModal }: ProjectsSectionProps) {
  return (
    <section className="section-wrapper" id="projects">
      <div className="section-tag">SELECTED WORK</div>
      <h2 className="section-title-large">
        Built to Scale,<br /><em>Made to Perform</em>
      </h2>

      <div className="projects-rows-list">
        {projects.map((proj) => (
          <div key={proj.num} className="project-row-item fade-up" onClick={onOpenProjectsModal}>
            <div className="row-left">
              <div className="row-num">{proj.num}</div>
              <div>
                <h3 className="row-title">{proj.title}</h3>
                <div className="row-desc">{proj.description}</div>
              </div>
            </div>

            <div className="row-right">
              <div className="row-tags">
                {proj.tags.map((t, idx) => (
                  <span key={idx} className="type-badge">
                    {t}
                  </span>
                ))}
              </div>
              <button className="row-arrow-btn" aria-label="View Project">
                →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
