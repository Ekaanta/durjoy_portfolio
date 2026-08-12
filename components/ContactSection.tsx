"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="section-label">08 / GET IN TOUCH</div>
      <div style={{ maxWidth: "600px" }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>
          Let's discuss your next project
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: "1.5rem", lineHeight: 1.7 }}>
          Whether you need a dedicated Project Manager, QA Lead, or test automation expert to streamline your release cycles, feel free to reach out.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
          <div>
            <strong>Email:</strong>{" "}
            <a href="mailto:durjoybanik35138@gmail.com" style={{ color: "var(--rust)", textDecoration: "underline" }}>
              durjoybanik35138@gmail.com
            </a>
          </div>
          <div>
            <strong>Availability:</strong> Remote / Hybrid (Full-Time & Contract)
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="mailto:durjoybanik35138@gmail.com" className="btn-primary">
            Send Email
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-outline">
            LinkedIn Profile
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-outline">
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
