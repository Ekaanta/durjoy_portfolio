"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <div className="section-tag">GET IN TOUCH</div>
        
        <div className="footer-cta-card fade-up">
          <h2 className="footer-cta-title">
            Have an AI or Software<br /><em>Project in mind?</em>
          </h2>
          
          <p className="footer-cta-sub" style={{ maxWidth: "600px", margin: "0 auto 2rem" }}>
            Whether you need an AI/ML Engineer to build LLM agents and automation pipelines, or a Technical Project Coordinator to drive software execution, feel free to connect!
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
            <div style={{ fontSize: "0.95rem", fontWeight: 600 }}>
              Email: <a href="mailto:durjoybanik35138@gmail.com" style={{ color: "var(--purple-primary)", textDecoration: "underline" }}>durjoybanik35138@gmail.com</a>
            </div>
            <div style={{ fontSize: "0.95rem", fontWeight: 600 }}>
              Phone / WhatsApp: <a href="tel:+8801712541692" style={{ color: "var(--purple-primary)", textDecoration: "underline" }}>+8801712541692</a>
            </div>
            <div style={{ fontSize: "0.88rem", color: "var(--ink-muted)" }}>
              Location: Gulshan-1 / Dhaka, Bangladesh
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="mailto:durjoybanik35138@gmail.com" className="btn-hire-gold" style={{ display: "inline-block", width: "auto", padding: "0.85rem 2rem" }}>
              Send Email →
            </a>
            <a
              href="https://linkedin.com/in/durjoy-banik"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-btn"
              style={{ padding: "0.85rem 1.75rem", fontSize: "0.88rem" }}
            >
              LinkedIn Profile ↗
            </a>
            <a
              href="https://github.com/Ekaanta"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-btn"
              style={{ padding: "0.85rem 1.75rem", fontSize: "0.88rem" }}
            >
              GitHub Portfolio ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
