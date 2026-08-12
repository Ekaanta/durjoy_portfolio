"use client";

import React from "react";
import Image from "next/image";

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewsModal({ isOpen, onClose }: ReviewsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "700px" }}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "var(--gold-dark)", textTransform: "uppercase" }}>
            CLIENT FEEDBACK & RECOMMENDATIONS
          </div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.6rem", fontWeight: 700 }}>
            What People Say About My Work
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Review 1 */}
          <div style={{ background: "var(--paper2)", padding: "1.5rem", borderRadius: "4px", border: "1px solid var(--border)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Image src="/images/unilever.png" alt="Unilever" width={60} height={60} style={{ objectFit: "contain" }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>Unilever Campaign Project Lead</div>
                <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>FMCG Digital Transformation & QA</div>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", fontStyle: "italic", lineHeight: 1.6 }}>
              "Durjoy's attention to detail during our product rollout was exceptional. He caught several critical API integration bugs prior to go-live and kept cross-functional developer teams synchronized under strict deadlines."
            </p>
          </div>

          {/* Review 2 */}
          <div style={{ background: "var(--paper2)", padding: "1.5rem", borderRadius: "4px", border: "1px solid var(--border)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Image src="/images/betupia.png" alt="Betupia Group" width={60} height={60} style={{ objectFit: "contain" }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>Betupia Group Product Director</div>
                <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>Mobile App & SaaS Delivery</div>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", fontStyle: "italic", lineHeight: 1.6 }}>
              "Working with Durjoy transformed our release pipeline. His automated Playwright scripts reduced test cycles drastically, and his transparent daily standup reports gave stakeholders full visibility."
            </p>
          </div>

          {/* Review 3 */}
          <div style={{ background: "var(--paper2)", padding: "1.5rem", borderRadius: "4px", border: "1px solid var(--border)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <Image src="/images/pureit.png" alt="Pureit" width={60} height={60} style={{ objectFit: "contain" }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>Pureit Tech Lead</div>
                <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>Web Application Quality Assurance</div>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", fontStyle: "italic", lineHeight: 1.6 }}>
              "Highly professional, communicative, and thorough. Durjoy brings a rare blend of PM organization and deep QA technical skills that elevate the entire engineering team."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
