"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "What roles are you available for?",
    a: "I am available for full-time, contract, and project-based roles as a Project Manager, QA Lead, or Test Automation Specialist in remote or hybrid configurations."
  },
  {
    q: "How do you integrate QA test automation into Agile sprints?",
    a: "I build modular test automation frameworks (Playwright/C#) that run in parallel with active sprint cycles. Tests are triggered automatically via CI/CD on every Git pull request, giving immediate feedback without delaying deployment velocity."
  },
  {
    q: "Can you manage cross-functional international teams?",
    a: "Yes! I have extensive experience coordinating developers, designers, QA engineers, and business stakeholders across different time zones using Jira, Confluence, and Slack."
  },
  {
    q: "What is your typical project delivery workflow?",
    a: "1) Discovery & Requirements Scope → 2) Sprint & Backlog Planning → 3) Agile Execution & Daily Standups → 4) Test Automation & QA Audit → 5) Staging Verification & Production Launch."
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="section-wrapper" id="faq">
      <div className="section-tag">FAQ</div>
      <h2 className="section-title-large">
        Got any<br /><em>questions?</em>
      </h2>

      <div className="faq-grid">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="faq-item fade-up">
              <button className="faq-trigger" onClick={() => toggleFaq(idx)}>
                <span>{faq.q}</span>
                <span className="faq-icon" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
                  +
                </span>
              </button>
              {isOpen && <div className="faq-content">{faq.a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
