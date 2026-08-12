"use client";

import React, { useEffect } from "react";
import Image from "next/image";

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewsModal({ isOpen, onClose }: ReviewsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "750px" }}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div style={{ marginBottom: "1.75rem" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "var(--gold-dark)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            CLIENT FEEDBACK & RECOMMENDATIONS
          </div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.8rem", fontWeight: 700, margin: "0.25rem 0" }}>
            What People Say About My Work
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Review 1 */}
          <div style={{ background: "var(--paper-card)", padding: "1.75rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-strong)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1rem" }}>
              <div style={{ width: 54, height: 54, position: "relative", flexShrink: 0 }}>
                <Image src="/images/unilever.png" alt="Unilever" fill style={{ objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1rem" }}>Unilever Campaign Project Lead</div>
                <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>FMCG Digital Transformation & QA</div>
              </div>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", fontStyle: "italic", lineHeight: 1.7 }}>
              "Durjoy's attention to detail during our product rollout was exceptional. He caught several critical API integration bugs prior to go-live and kept cross-functional developer teams synchronized under strict deadlines."
            </p>
          </div>

          {/* Review 2 */}
          <div style={{ background: "var(--paper-card)", padding: "1.75rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-strong)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1rem" }}>
              <div style={{ width: 54, height: 54, position: "relative", flexShrink: 0 }}>
                <Image src="/images/betupia.png" alt="Betupia Group" fill style={{ objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1rem" }}>Betupia Group Product Director</div>
                <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Mobile App & SaaS Delivery</div>
              </div>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", fontStyle: "italic", lineHeight: 1.7 }}>
              "Working with Durjoy transformed our release pipeline. His automated Playwright scripts reduced test cycles drastically, and his transparent daily standup reports gave stakeholders full visibility."
            </p>
          </div>

          {/* Review 3 */}
          <div style={{ background: "var(--paper-card)", padding: "1.75rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-strong)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1rem" }}>
              <div style={{ width: 54, height: 54, position: "relative", flexShrink: 0 }}>
                <Image src="/images/pureit.png" alt="Pureit" fill style={{ objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1rem" }}>Pureit Tech Lead</div>
                <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Web Application Quality Assurance</div>
              </div>
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", fontStyle: "italic", lineHeight: 1.7 }}>
              "Highly professional, communicative, and thorough. Durjoy brings a rare blend of PM organization and deep QA technical skills that elevate the entire engineering team."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
