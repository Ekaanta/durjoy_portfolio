"use client";

import React from "react";

export default function ProcessSection() {
  return (
    <section id="process">
      <div className="section-label">03 / MY METHODOLOGY</div>
      <div className="process-steps">
        <div className="process-step fade-up">
          <div className="step-num">01</div>
          <div className="step-name">Discovery & Alignment</div>
          <div className="step-desc">
            Deep dive into project scope, business requirements, stakeholder goals, and initial architecture constraints.
          </div>
        </div>
        <div className="process-step fade-up">
          <div className="step-num">02</div>
          <div className="step-name">Sprint & Backlog Setup</div>
          <div className="step-desc">
            Break down epics into actionable user stories with clear acceptance criteria and estimation in Jira.
          </div>
        </div>
        <div className="process-step fade-up">
          <div className="step-num">03</div>
          <div className="step-name">Agile Execution & QA</div>
          <div className="step-desc">
            Coordinate daily standups, integrate manual/automated testing alongside active dev sprints.
          </div>
        </div>
        <div className="process-step fade-up">
          <div className="step-num">04</div>
          <div className="step-name">Testing & Automation</div>
          <div className="step-desc">
            Execute Playwright regression suites, performance benchmarks, and multi-device UI/UX validation.
          </div>
        </div>
        <div className="process-step fade-up">
          <div className="step-num">05</div>
          <div className="step-name">Launch & Retrospective</div>
          <div className="step-desc">
            Ensure zero-critical defect production deployment, deliver client reporting, and conduct post-mortems.
          </div>
        </div>
      </div>
    </section>
  );
}
