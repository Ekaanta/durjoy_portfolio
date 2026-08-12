"use client";

import React, { useState } from "react";

interface NavbarProps {
  onOpenCvModal: () => void;
}

export default function Navbar({ onOpenCvModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav>
      <div className="nav-brand">
        <a href="#" className="nav-logo" onClick={closeMenu}>
          Ekanta Banik Durjoy
        </a>
        <span className="nav-role-badge">PM & QA LEAD</span>
      </div>

      <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#skills" onClick={closeMenu}>
            Capabilities
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#process" onClick={closeMenu}>
            Process
          </a>
        </li>
        <li>
          <a href="#automation" onClick={closeMenu}>
            Automation
          </a>
        </li>
        <li>
          <a href="#work-samples" onClick={closeMenu}>
            Artifacts
          </a>
        </li>
        <li>
          <a href="#meetings" onClick={closeMenu}>
            Demos
          </a>
        </li>
        <li>
          <a href="#tools" onClick={closeMenu}>
            Tools
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              closeMenu();
              onOpenCvModal();
            }}
            className="nav-cta"
          >
            Resume / CV
          </button>
        </li>
      </ul>

      <button
        className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
