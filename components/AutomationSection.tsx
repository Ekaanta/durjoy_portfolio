"use client";

import React from "react";

export default function AutomationSection() {
  return (
    <section id="automation">
      <div className="section-label">04 / AUTOMATION ARCHITECTURE</div>
      <div className="auto-grid">
        <div>
          <div className="auto-story">
            <div className="auto-block problem">
              <div className="auto-block-label" style={{ color: "var(--rust)" }}>
                The Challenge
              </div>
              <div className="auto-block-text">
                Manual regression testing across 4 platforms created bottlenecks before major bi-weekly releases, slowing deployment velocity.
              </div>
            </div>
            <div className="auto-block decision">
              <div className="auto-block-label" style={{ color: "var(--gold-dark)" }}>
                The Architecture
              </div>
              <div className="auto-block-text">
                Designed a unified C# .NET + Playwright test automation framework integrated directly into GitHub Actions CI/CD pipelines.
              </div>
            </div>
            <div className="auto-block result">
              <div className="auto-block-label" style={{ color: "var(--forest)" }}>
                The Impact
              </div>
              <div className="auto-block-text">
                Reduced regression testing time from 18 hours to 45 minutes, catching 99% of UI/API regressions prior to staging deployment.
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="auto-diagram">
            <div className="auto-diagram-header">
              <div className="auto-diagram-title">CI/CD TEST AUTOMATION PIPELINE</div>
              <div className="auto-status">● ACTIVE</div>
            </div>
            <div className="auto-node" style={{ background: "rgba(52,168,83,0.08)", borderColor: "rgba(52,168,83,0.2)" }}>
              <div className="auto-node-label">1. TRIGGER</div>
              <div className="auto-node-name">Git Commit / Pull Request Trigger</div>
            </div>
            <div className="auto-arrow">↓</div>
            <div className="auto-node" style={{ background: "rgba(201,168,76,0.08)", borderColor: "rgba(201,168,76,0.2)" }}>
              <div className="auto-node-label">2. EXECUTION</div>
              <div className="auto-node-name">Playwright & REST API Parallel Test Suite</div>
            </div>
            <div className="auto-arrow">↓</div>
            <div className="auto-node" style={{ background: "rgba(138,180,248,0.08)", borderColor: "rgba(138,180,248,0.2)" }}>
              <div className="auto-node-label">3. VERIFICATION</div>
              <div className="auto-node-name">Database Validation & Visual Screenshot Comparison</div>
            </div>
            <div className="auto-outputs">
              <div className="auto-output">Status: 100% Passed</div>
              <div className="auto-output">Duration: 45m</div>
              <div className="auto-output">Reports: Allure HTML</div>
              <div className="auto-output">Alerts: Slack & Email</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
