"use client";

import React from "react";

export default function AutomationSection() {
  return (
    <section id="automation">
      <div className="container">
        <div className="section-label">04 / AUTOMATION ARCHITECTURE</div>
        <h2 className="section-heading">
          When PM tools <em>weren't enough,</em><br />I built my own.
        </h2>

        <div className="auto-grid">
          {/* Left Column: Problem / Solution Story */}
          <div>
            <div className="auto-block problem">
              <div className="auto-block-label" style={{ color: "var(--rust)" }}>
                The Challenge
              </div>
              <div className="auto-block-text">
                Manual regression testing across multiple web and mobile platforms created severe bottlenecks prior to major bi-weekly production releases, delaying deployment velocity.
              </div>
            </div>

            <div className="auto-block decision">
              <div className="auto-block-label" style={{ color: "var(--gold-dark)" }}>
                The Architecture
              </div>
              <div className="auto-block-text">
                Designed and built a modular C# .NET + Playwright test automation framework with Page Object Model (POM) pattern, integrated directly into GitHub Actions CI/CD workflows.
              </div>
            </div>

            <div className="auto-block result">
              <div className="auto-block-label" style={{ color: "var(--forest)" }}>
                The Impact
              </div>
              <div className="auto-block-text">
                Reduced full regression testing execution time from 18 hours to 45 minutes, detecting 99%+ of UI & REST API regressions before staging deployments.
              </div>
            </div>
          </div>

          {/* Right Column: Large Terminal & Architecture Diagram */}
          <div>
            <div className="auto-diagram">
              <div className="auto-diagram-header">
                <div className="auto-diagram-title">CI/CD TEST AUTOMATION RUNNER</div>
                <div className="auto-status">● RUNNER ACTIVE</div>
              </div>

              <div className="auto-node" style={{ background: "rgba(52,168,83,0.08)", borderColor: "rgba(52,168,83,0.2)" }}>
                <div className="auto-node-label">1. TRIGGER</div>
                <div className="auto-node-name">Git Commit / Pull Request Hook</div>
              </div>

              <div className="auto-arrow">↓</div>

              <div className="auto-node" style={{ background: "rgba(201,168,76,0.08)", borderColor: "rgba(201,168,76,0.2)" }}>
                <div className="auto-node-label">2. PARALLEL EXECUTION</div>
                <div className="auto-node-name">Playwright E2E UI & REST API Test Suite</div>
              </div>

              <div className="auto-arrow">↓</div>

              <div className="auto-node" style={{ background: "rgba(138,180,248,0.08)", borderColor: "rgba(138,180,248,0.2)" }}>
                <div className="auto-node-label">3. ASSERTION & AUDIT</div>
                <div className="auto-node-name">Database State Validation & Visual Snapshot Comparison</div>
              </div>

              <div className="auto-outputs">
                <div className="auto-output">
                  <span style={{ color: "#48bb78" }}>Status:</span> 100% Passed
                </div>
                <div className="auto-output">
                  <span style={{ color: "#a0aec0" }}>Duration:</span> 45 mins
                </div>
                <div className="auto-output">
                  <span style={{ color: "#cbd5e0" }}>Report:</span> Allure HTML
                </div>
                <div className="auto-output">
                  <span style={{ color: "#ecc94b" }}>Alerts:</span> Slack & Email
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
