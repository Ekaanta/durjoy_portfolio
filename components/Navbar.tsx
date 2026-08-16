"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Copy, Check, FileText, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenCvModal: () => void;
}

export default function Navbar({ onOpenCvModal }: NavbarProps) {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const email = "durjoybanik35138@gmail.com";

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <aside className="sidebar-column">
      {/* Brand & Mobile Header Row */}
      <div className="brand-row">
        <a href="#" className="brand-logo" onClick={handleNavClick}>
          DURJOY<span>*</span>
        </a>
        
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div className="social-pills header-social-pills">
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

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Expandable Sidebar Menu Content */}
      <div className={`sidebar-menu-wrapper ${mobileMenuOpen ? "open" : ""}`}>
        {/* Mobile-only social links in drawer header */}
        <div className="mobile-drawer-social">
          <a
            href="https://github.com/Ekaanta"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/durjoy-banik"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Navigation List */}
        <ul className="sidebar-nav-list">
          <li>
            <a href="#hero" className="sidebar-nav-link active" onClick={handleNavClick}>
              HOME
            </a>
          </li>
          <li>
            <a href="#journey" className="sidebar-nav-link" onClick={handleNavClick}>
              EXPERIENCE
            </a>
          </li>
          <li>
            <a href="#stack" className="sidebar-nav-link" onClick={handleNavClick}>
              TECH STACK
            </a>
          </li>
          <li>
            <a href="#projects" className="sidebar-nav-link" onClick={handleNavClick}>
              AI & PM PROJECTS
            </a>
          </li>
          <li>
            <a href="#what-you-get" className="sidebar-nav-link" onClick={handleNavClick}>
              DELIVERABLES
            </a>
          </li>
          <li>
            <a href="#services" className="sidebar-nav-link" onClick={handleNavClick}>
              SERVICES
            </a>
          </li>
          <li>
            <a href="#client-management" className="sidebar-nav-link" onClick={handleNavClick}>
              CLIENT MANAGEMENT
            </a>
          </li>
          <li>
            <a href="#contact" className="sidebar-nav-link" onClick={handleNavClick}>
              CONTACT
            </a>
          </li>
        </ul>

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

          <button
            type="button"
            onClick={() => {
              handleNavClick();
              onOpenCvModal();
            }}
            className="btn-hire-gold"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
          >
            <FileText size={16} />
            <span>View Resume / CV</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
