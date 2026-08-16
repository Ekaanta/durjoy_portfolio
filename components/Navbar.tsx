"use client";

import React, { useState, useEffect } from "react";
import {
  Home as HomeIcon,
  Briefcase,
  Code2,
  FolderGit2,
  CheckCircle2,
  Video,
  Star,
  HelpCircle,
  Github,
  Linkedin,
  Copy,
  Check,
  FileText,
  Menu,
  X
} from "lucide-react";

interface NavbarProps {
  onOpenCvModal: () => void;
}

const navItems = [
  { label: "Home", href: "#hero", icon: <HomeIcon size={15} /> },
  { label: "Experience", href: "#journey", icon: <Briefcase size={15} /> },
  { label: "Tech Stack", href: "#stack", icon: <Code2 size={15} /> },
  { label: "AI & PM Projects", href: "#projects", icon: <FolderGit2 size={15} /> },
  { label: "What I Deliver", href: "#what-you-get", icon: <CheckCircle2 size={15} /> },
  { label: "Client Management", href: "#client-management", icon: <Video size={15} /> },
  { label: "Results & Reviews", href: "#work-samples", icon: <Star size={15} /> },
  { label: "FAQ", href: "#faq", icon: <HelpCircle size={15} /> }
];

export default function Navbar({ onOpenCvModal }: NavbarProps) {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
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

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <aside className="sidebar-column">
      {/* Brand & Profile Top Header */}
      <div className="sidebar-top-section">
        <div className="brand-row">
          <a href="#" className="brand-logo" onClick={() => handleNavClick("hero")}>
            DURJOY<span>*</span>
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <div className="social-pills header-social-pills">
              <a
                href="https://github.com/Ekaanta"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="GitHub Profile"
              >
                <Github size={14} />
              </a>
              <a
                href="https://linkedin.com/in/durjoy-banik"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="LinkedIn Profile"
              >
                <Linkedin size={14} />
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
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Status Pill Badge */}
        <div className="sidebar-status-badge">
          <span className="status-indicator-dot"></span>
          <span>Available for Projects</span>
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

      {/* Main Navigation List */}
      <div className={`sidebar-menu-wrapper ${mobileMenuOpen ? "open" : ""}`}>
        <nav className="sidebar-nav-container">
          <ul className="sidebar-nav-list">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`sidebar-nav-link ${isActive ? "active" : ""}`}
                    onClick={() => handleNavClick(sectionId)}
                  >
                    <span className="nav-icon-wrap">{item.icon}</span>
                    <span className="nav-label-text">{item.label}</span>
                    {isActive && <span className="nav-active-pill"></span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sidebar Bottom Actions */}
        <div className="sidebar-bottom">
          <div
            className="email-copy-pill"
            onClick={handleCopyEmail}
            title="Click to copy email address"
          >
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {email}
            </span>
            <span style={{ display: "flex", alignItems: "center", marginLeft: "0.4rem", color: "var(--purple-primary)" }}>
              {copied ? <Check size={13} /> : <Copy size={13} />}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCvModal();
            }}
            className="btn-hire-gold"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.45rem",
              fontSize: "0.82rem",
              padding: "0.68rem 1.15rem"
            }}
          >
            <FileText size={14} />
            <span>View Resume / CV</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
