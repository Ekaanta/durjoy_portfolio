"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What roles are you available for?",
    a: "I am available for full-time, contract, and project-based roles as an AI/ML Engineer, AI Automation Specialist, or Technical Project Coordinator in remote or hybrid configurations."
  },
  {
    q: "How do you build Agentic AI and LLM automation pipelines?",
    a: "I leverage Python, LangChain, N8N, FastAPI, and OpenAI/HuggingFace model APIs to orchestrate multi-step autonomous AI workflows, document analysis agents, and custom vision systems."
  },
  {
    q: "Can you manage cross-functional software project teams?",
    a: "Yes! I have extensive experience at Unilever (UCL-Bangladesh) and Pureit managing agile sprint deliverables, requirement gathering, Jira task tracking, and developer-client alignment."
  },
  {
    q: "What is your typical project delivery workflow?",
    a: "1) Requirement Discovery & Scope → 2) Architecture & Agile Sprint Planning → 3) AI/ML & Full-Stack Development → 4) Test Automation & QA Audit → 5) Staging Verification & Production Release."
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
                <ChevronDown
                  size={20}
                  className="faq-icon"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
                />
              </button>
              {isOpen && <div className="faq-content">{faq.a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
