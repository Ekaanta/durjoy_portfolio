"use client";

import React from "react";
import { ArrowUp, FileText } from "lucide-react";

interface FooterProps {
  onOpenCvModal: () => void;
}

export default function Footer({ onOpenCvModal }: FooterProps) {
  return (
    <footer id="footer">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1.5rem", borderTop: "1px solid var(--border)", fontSize: "0.85rem", color: "var(--ink-muted)", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          © {new Date().getFullYear()} Ekanta Banik (Durjoy) • Software Project Coordinator & AI Specialist (Dhaka, Bangladesh)
        </div>
        <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
          <button
            onClick={onOpenCvModal}
            style={{ background: "none", border: "none", color: "var(--purple-primary)", fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
          >
            <FileText size={15} />
            <span>View Full CV</span>
          </button>
          <a href="#hero" style={{ color: "var(--ink)", textDecoration: "none", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
