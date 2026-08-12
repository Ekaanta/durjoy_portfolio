"use client";

import React from "react";

export default function MeetingsSection() {
  return (
    <section id="meetings" style={{ background: "var(--paper2)" }}>
      <div className="section-label">06 / LEADERSHIP & MEETINGS</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
        <div className="meeting-card">
          <div className="meeting-thumb">
            <div className="meeting-play">▶</div>
          </div>
          <div className="meeting-info">
            <div className="meeting-title">Sprint Planning & Backlog Refinement</div>
            <div className="meeting-meta">Agile Ceremony • Stakeholder Alignment</div>
          </div>
        </div>
        <div className="meeting-card">
          <div className="meeting-thumb">
            <div className="meeting-play">▶</div>
          </div>
          <div className="meeting-info">
            <div className="meeting-title">Client Demo & Release Presentation</div>
            <div className="meeting-meta">Product Walkthrough • Feature Sign-off</div>
          </div>
        </div>
        <div className="meeting-card">
          <div className="meeting-thumb">
            <div className="meeting-play">▶</div>
          </div>
          <div className="meeting-info">
            <div className="meeting-title">QA Bug Triage & Dev Alignment</div>
            <div className="meeting-meta">Defect Review • Priority Mapping</div>
          </div>
        </div>
      </div>
    </section>
  );
}
