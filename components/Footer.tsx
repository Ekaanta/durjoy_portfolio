"use client";

import React from "react";

export default function Footer() {
  return (
    <footer>
      <div>© {new Date().getFullYear()} Ekanta Banik Durjoy. All rights reserved.</div>
      <div>
        <a href="#" style={{ color: "var(--muted)", textDecoration: "none" }}>
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
