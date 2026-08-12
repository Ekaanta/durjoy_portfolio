"use client";

import React from "react";

const meetings = [
  {
    title: "Sprint Planning & Backlog Refinement",
    meta: "Agile Ceremony • Stakeholder Alignment",
    duration: "45 mins"
  },
  {
    title: "Client Demo & Release Presentation",
    meta: "Product Walkthrough • Feature Sign-off",
    duration: "30 mins"
  },
  {
    title: "QA Bug Triage & Dev Alignment",
    meta: "Defect Review • Priority Mapping",
    duration: "25 mins"
  }
];

export default function MeetingsSection() {
  return (
    <section id="meetings" style={{ background: "var(--paper-card)" }}>
      <div className="container">
        <div className="section-label">06 / LEADERSHIP & MEETINGS</div>
        <h2 className="section-heading">
          Client Meeting <em>Demos</em>
        </h2>

        <div className="meetings-grid">
          {meetings.map((m, idx) => (
            <div key={idx} className="meeting-card fade-up">
              <div className="meeting-thumb">
                <div className="meeting-play">▶</div>
              </div>
              <div className="meeting-info">
                <h3 className="meeting-title">{m.title}</h3>
                <div className="meeting-meta">{m.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
