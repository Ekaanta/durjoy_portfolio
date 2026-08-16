"use client";

import React, { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  driveShareUrl?: string;
  title?: string;
  description?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl = "https://drive.google.com/file/d/1BfkvPwprIDzNotT-e-2nLXkHIYFXaDT8/preview",
  driveShareUrl = "https://drive.google.com/file/d/1BfkvPwprIDzNotT-e-2nLXkHIYFXaDT8/view?usp=sharing",
  title = "International Client Meeting & Technical Walkthrough",
  description = "A live recording demonstration of cross-functional team coordination, client sprint review, requirement validation, and project milestone alignment with international stakeholders."
}: VideoModalProps) {
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
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "900px", padding: "2rem" }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close video modal">
          <X size={20} />
        </button>

        <div style={{ marginBottom: "1.25rem" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
              color: "var(--purple-primary)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600,
              marginBottom: "0.3rem"
            }}
          >
            VIDEO RECORDING • CLIENT MEETING SESSION
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.5rem", fontWeight: 800, margin: "0.2rem 0", color: "var(--ink)" }}>
            {title}
          </h2>
        </div>

        {/* Video Player Container */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            background: "#000",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            border: "1px solid var(--sandy-amber)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
          }}
        >
          <iframe
            src={videoUrl}
            title={title}
            style={{ width: "100%", height: "100%", border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.25rem", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.9rem", color: "var(--ink-secondary)", lineHeight: 1.6, flex: 1, minWidth: "260px", margin: 0 }}>
            {description}
          </p>
          {driveShareUrl && (
            <a
              href={driveShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-btn"
              style={{
                padding: "0.6rem 1.25rem",
                fontSize: "0.82rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                whiteSpace: "nowrap"
              }}
            >
              <span>Open in Google Drive</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
