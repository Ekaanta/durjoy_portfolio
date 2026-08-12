"use client";

import React from "react";
import Image from "next/image";

const artifacts = [
  {
    type: "QA ARTIFACT",
    title: "Automated Test Suite & Codebase",
    image: "/images/work-code.png",
    alt: "Code",
    description: "Modular C# Playwright test scripts with Page Object Model (POM) pattern and clean assertions."
  },
  {
    type: "PM ARTIFACT",
    title: "Sprint Velocity & Burndown Analytics",
    image: "/images/work-stats.png",
    alt: "Stats",
    description: "Jira dashboard tracking team velocity, bug burn rate, and sprint release predictability."
  },
  {
    type: "METRICS ARTIFACT",
    title: "Test Coverage & Quality Distribution",
    image: "/images/work-graph.png",
    alt: "Graph",
    description: "Comprehensive coverage matrix mapping user stories directly to automated test cases."
  },
  {
    type: "API QA ARTIFACT",
    title: "REST API Postman Workspace",
    image: "/images/work-api-dashboard.png",
    alt: "API Test Dashboard",
    description: "Automated API collection runs, environment variable configs, and JSON schema assertions."
  }
];

export default function WorkSamplesSection() {
  return (
    <section id="work-samples">
      <div className="container">
        <div className="section-label">05 / QA & MANAGEMENT ARTIFACTS</div>
        <h2 className="section-heading">
          My Work <em>In Action</em>
        </h2>

        <div className="work-grid">
          {artifacts.map((art, idx) => (
            <div key={idx} className="work-card fade-up">
              <div className="wc-type">{art.type}</div>
              <h3 className="wc-name">{art.title}</h3>
              
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", borderRadius: "var(--radius-sm)", overflow: "hidden", marginBottom: "1rem", background: "#111" }}>
                <Image
                  src={art.image}
                  alt={art.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="work-card-bot">
                <div className="wc-what-lbl">Deliverable Summary</div>
                <div className="wc-what-txt">{art.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
