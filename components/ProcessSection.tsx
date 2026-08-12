"use client";

import React from "react";

const steps = [
  {
    num: "01",
    name: "Discover & Align",
    desc: "Understand business scope, stakeholder requirements, technical constraints, and project objectives."
  },
  {
    num: "02",
    name: "Plan & Scope",
    desc: "Break down epics into actionable user stories with clear acceptance criteria and backlog estimations."
  },
  {
    num: "03",
    name: "Build & Execute",
    desc: "Coordinate daily standups, manage developer workflows, and align sprint goals across cross-functional teams."
  },
  {
    num: "04",
    name: "Test & Validate",
    desc: "Execute Playwright automated regression suites, multi-device manual testing, and performance audits."
  },
  {
    num: "05",
    name: "Deliver & Launch",
    desc: "Deploy zero-critical defect production releases, deliver client reporting, and conduct post-mortems."
  }
];

export default function ProcessSection() {
  return (
    <section id="process">
      <div className="container">
        <div className="section-label">03 / MY METHODOLOGY</div>
        <h2 className="section-heading">
          Structured Delivery <em>Lifecycle</em>
        </h2>

        <div className="process-steps">
          {steps.map((step) => (
            <div key={step.num} className="process-step fade-up">
              <div className="step-num">{step.num}</div>
              <h3 className="step-name">{step.name}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
