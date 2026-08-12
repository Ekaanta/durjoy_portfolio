"use client";

import React from "react";
import Image from "next/image";

export default function WorkSamplesSection() {
  return (
    <section id="work-samples">
      <div className="section-label">05 / QA & MANAGEMENT ARTIFACTS</div>
      <div className="work-grid">
        <div className="work-card fade-up">
          <div className="work-card-top">
            <div className="wc-type">QA ARTIFACT</div>
            <div className="wc-name">Automated Test Execution & Code Suite</div>
          </div>
          <Image src="/images/work-code.png" alt="Code" width={400} height={250} style={{ width: "100%", height: "auto", borderRadius: "4px", marginBottom: "1rem" }} />
          <div className="work-card-bot">
            <div className="wc-what-lbl">Deliverable</div>
            <div className="wc-what-txt">Clean, modular C# Playwright test scripts with Page Object Model (POM) pattern.</div>
          </div>
        </div>

        <div className="work-card fade-up">
          <div className="work-card-top">
            <div className="wc-type">PM ARTIFACT</div>
            <div className="wc-name">Sprint Velocity & Burndown Analytics</div>
          </div>
          <Image src="/images/work-stats.png" alt="Stats" width={400} height={250} style={{ width: "100%", height: "auto", borderRadius: "4px", marginBottom: "1rem" }} />
          <div className="work-card-bot">
            <div className="wc-what-lbl">Deliverable</div>
            <div className="wc-what-txt">Jira dashboard tracking team velocity, bug burn rate, and sprint release predictability.</div>
          </div>
        </div>

        <div className="work-card fade-up">
          <div className="work-card-top">
            <div className="wc-type">METRICS ARTIFACT</div>
            <div className="wc-name">Test Coverage & Quality Distribution</div>
          </div>
          <Image src="/images/work-graph.png" alt="Graph" width={400} height={250} style={{ width: "100%", height: "auto", borderRadius: "4px", marginBottom: "1rem" }} />
          <div className="work-card-bot">
            <div className="wc-what-lbl">Deliverable</div>
            <div className="wc-what-txt">Comprehensive coverage breakdown mapping user requirements to automated test cases.</div>
          </div>
        </div>

        <div className="work-card fade-up">
          <div className="work-card-top">
            <div className="wc-type">API QA ARTIFACT</div>
            <div className="wc-name">REST API Testing & Postman Workspace</div>
          </div>
          <Image src="/images/work-api-dashboard.png" alt="API Test Dashboard" width={400} height={250} style={{ width: "100%", height: "auto", borderRadius: "4px", marginBottom: "1rem" }} />
          <div className="work-card-bot">
            <div className="wc-what-lbl">Deliverable</div>
            <div className="wc-what-txt">Automated API collection runs, environment variable management, and JSON schema assertions.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
