"use client";

import React from "react";

interface FooterProps {
  onOpenCvModal: () => void;
}

export default function Footer({ onOpenCvModal }: FooterProps) {
  return (
    <footer id="footer">
      {/* Giant Footer Header */}
      <h2 className="giant-footer-text">
        D U R <span className="gold-text">J O Y</span>
      </h2>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1.5rem", borderTop: "1px solid var(--border)", fontSize: "0.85rem", color: "var(--ink-muted)", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          © {new Date().getFullYear()} Ekanta Banik (Durjoy) • AI/ML Engineer & Project Coordinator (Dhaka, Bangladesh)
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button onClick={onOpenCvModal} style={{ background: "none", border: "none", color: "var(--purple-primary)", fontWeight: 700, cursor: "pointer" }}>
            View Full CV
          </button>
          <a href="#hero" style={{ color: "var(--ink)", textDecoration: "none", fontWeight: 700 }}>
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
