"use client";

import React from "react";

interface FooterProps {
  onOpenCvModal: () => void;
}

export default function Footer({ onOpenCvModal }: FooterProps) {
  return (
    <footer id="contact">
      {/* Giant Footer Header */}
      <h2 className="giant-footer-text">
        D U R <span className="gold-text">J O Y</span>
      </h2>

      {/* CTA Card */}
      <div className="footer-cta-card fade-up">
        <div className="section-tag" style={{ justifyContent: "center" }}>
          CONTACT & COLLABORATION
        </div>
        <h3 className="footer-cta-title">
          Let's build<br />something solid
        </h3>
        <p className="footer-cta-sub">
          From First Consult To Launch. Available for full-time and contract roles.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href="mailto:durjoybanik35138@gmail.com" className="btn-hire-gold" style={{ display: "inline-block", width: "auto", padding: "0.85rem 2.25rem" }}>
            Email Me →
          </a>
          <button onClick={onOpenCvModal} className="btn-hire-gold" style={{ background: "var(--ink)", color: "#fff", width: "auto", padding: "0.85rem 2.25rem" }}>
            Hire Me / Resume
          </button>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1rem", borderTop: "1px solid var(--border)", fontSize: "0.82rem", color: "var(--ink-muted)" }}>
        <div>© {new Date().getFullYear()} Ekanta Banik Durjoy. All rights reserved.</div>
        <div>
          <a href="#hero" style={{ color: "var(--ink)", textDecoration: "none", fontWeight: 700 }}>
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
