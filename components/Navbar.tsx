"use client";

import React, { useState } from "react";

interface NavbarProps {
  onOpenCvModal: () => void;
}

export default function Navbar({ onOpenCvModal }: NavbarProps) {
  const [copied, setCopied] = useState(false);
  const email = "durjoybanik35138@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="sidebar-column">
      <div className="sidebar-top">
        {/* Brand Header */}
        <div className="brand-row">
          <a href="#" className="brand-logo">
            DURJOY<span>*</span>
          </a>
          <div className="social-pills">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub"
            >
              ⌨
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn"
            >
              in
            </a>
          </div>
        </div>

        {/* Sidebar Stats Box */}
        <div className="sidebar-stats-card">
          <div>
            <div className="sb-stat-num">15+</div>
            <div className="sb-stat-label">Projects</div>
          </div>
          <div>
            <div className="sb-stat-num">4+</div>
            <div className="sb-stat-label">Yrs Exp.</div>
          </div>
        </div>

        {/* Navigation List */}
        <ul className="sidebar-nav-list">
          <li>
            <a href="#hero" className="sidebar-nav-link active">
              HOME
            </a>
          </li>
          <li>
            <a href="#journey" className="sidebar-nav-link">
              ABOUT ME
            </a>
          </li>
          <li>
            <a href="#projects" className="sidebar-nav-link">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#what-you-get" className="sidebar-nav-link">
              WHAT YOU GET
            </a>
          </li>
          <li>
            <a href="#services" className="sidebar-nav-link">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#work-samples" className="sidebar-nav-link">
              CLIENTS
            </a>
          </li>
          <li>
            <a href="#faq" className="sidebar-nav-link">
              FAQ
            </a>
          </li>
        </ul>
      </div>

      {/* Sidebar Bottom Actions */}
      <div className="sidebar-bottom">
        <div className="email-copy-pill" onClick={handleCopyEmail}>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {email}
          </span>
          <span style={{ fontWeight: 700, marginLeft: "0.4rem" }}>{copied ? "✓" : "📋"}</span>
        </div>

        <button onClick={onOpenCvModal} className="btn-hire-gold">
          Hire Me
        </button>
      </div>
    </aside>
  );
}
