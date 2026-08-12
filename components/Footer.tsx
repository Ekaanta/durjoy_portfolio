"use client";

import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            © {new Date().getFullYear()} Ekanta Banik Durjoy • Project Manager & QA Lead (Dhaka, Bangladesh)
          </div>
          <div>
            <a href="#" style={{ color: "var(--muted)", textDecoration: "none", fontWeight: 600 }}>
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
