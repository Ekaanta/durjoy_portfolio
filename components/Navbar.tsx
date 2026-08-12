"use client";

import React, { useState } from "react";
import { Github, Linkedin, Copy, Check, FileText } from "lucide-react";

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
              href="https://github.com/Ekaanta"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/durjoy-banik"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Sidebar Stats Box */}
        <div className="sidebar-stats-card">
          <div>
            <div className="sb-stat-num">AI/ML</div>
            <div className="sb-stat-label">Engineer</div>
          </div>
          <div>
            <div className="sb-stat-num">PM</div>
            <div className="sb-stat-label">Lead</div>
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
              EXPERIENCE
            </a>
          </li>
          <li>
            <a href="#stack" className="sidebar-nav-link">
              TECH STACK
            </a>
          </li>
          <li>
            <a href="#projects" className="sidebar-nav-link">
              AI & PM PROJECTS
            </a>
          </li>
          <li>
            <a href="#what-you-get" className="sidebar-nav-link">
              DELIVERABLES
            </a>
          </li>
          <li>
            <a href="#services" className="sidebar-nav-link">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#contact" className="sidebar-nav-link">
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      {/* Sidebar Bottom Actions */}
      <div className="sidebar-bottom">
        <div className="email-copy-pill" onClick={handleCopyEmail} title="Click to copy email">
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {email}
          </span>
          <span style={{ display: "flex", alignItems: "center", marginLeft: "0.4rem", color: "var(--purple-primary)" }}>
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </span>
        </div>

        <button onClick={onOpenCvModal} className="btn-hire-gold" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
          <FileText size={16} />
          <span>View Resume / CV</span>
        </button>
      </div>
    </aside>
  );
}
