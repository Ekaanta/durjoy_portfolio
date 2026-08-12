"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-label">08 / GET IN TOUCH</div>
        
        <div className="contact-card fade-up">
          <h2 className="contact-heading">
            Have a project <em>in mind?</em>
          </h2>
          
          <p className="contact-sub">
            Let's turn the idea into something structured, reliable, and useful. Whether you need a dedicated Project Manager, QA Lead, or test automation expert to streamline your release cycles, feel free to reach out.
          </p>

          <div className="contact-actions">
            <a href="mailto:durjoybanik35138@gmail.com" className="btn-primary" style={{ padding: "1rem 2.25rem", fontSize: "0.95rem" }}>
              Let's Work Together →
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "1rem 1.75rem", fontSize: "0.95rem" }}>
              LinkedIn Profile
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "1rem 1.75rem", fontSize: "0.95rem" }}>
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
