"use client";

import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="section-wrapper">
      <div className="section-tag">GET IN TOUCH</div>
      
      <div className="footer-cta-card fade-up">
        <h2 className="footer-cta-title">
          Have an AI or Software<br /><em>Project in mind?</em>
        </h2>
        
        <p className="footer-cta-sub" style={{ maxWidth: "580px", margin: "0 auto 1.5rem", lineHeight: 1.55 }}>
          Whether you need an AI Engineer to build LLM agents and automation pipelines, or a Technical Project Coordinator to drive agile software execution, let's connect!
        </p>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", marginBottom: "1.75rem" }}>
          <div style={{ fontSize: "0.92rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <Mail size={15} style={{ color: "var(--purple-primary)" }} />
            <span>Email: </span>
            <a href="mailto:durjoybanik35138@gmail.com" style={{ color: "var(--purple-primary)", textDecoration: "underline" }}>
              durjoybanik35138@gmail.com
            </a>
          </div>
          <div style={{ fontSize: "0.92rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <Phone size={15} style={{ color: "var(--purple-primary)" }} />
            <span>Phone / WhatsApp: </span>
            <a href="tel:+8801712541692" style={{ color: "var(--purple-primary)", textDecoration: "underline" }}>
              +8801712541692
            </a>
          </div>
          <div style={{ fontSize: "0.84rem", color: "var(--ink-muted)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
            <MapPin size={14} style={{ color: "var(--purple-primary)" }} />
            <span>Location: Gulshan-1 / Dhaka, Bangladesh (Remote Global)</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
          <a href="mailto:durjoybanik35138@gmail.com" className="btn-hire-gold" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", width: "auto", padding: "0.75rem 1.75rem" }}>
            <Mail size={15} />
            <span>Send Email</span>
          </a>
          <a
            href="https://linkedin.com/in/durjoy-banik"
            target="_blank"
            rel="noopener noreferrer"
            className="read-more-btn"
            style={{ padding: "0.75rem 1.4rem", fontSize: "0.84rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
          >
            <Linkedin size={15} />
            <span>LinkedIn Profile</span>
            <ExternalLink size={12} />
          </a>
          <a
            href="https://github.com/Ekaanta"
            target="_blank"
            rel="noopener noreferrer"
            className="read-more-btn"
            style={{ padding: "0.75rem 1.4rem", fontSize: "0.84rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
          >
            <Github size={15} />
            <span>GitHub Portfolio</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
