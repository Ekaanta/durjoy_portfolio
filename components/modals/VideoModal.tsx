"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Play } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
  description?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl = "https://drive.google.com/file/d/1BfkvPwprIDzNotT-e-2nLXkHIYFXaDT8/preview",
  title = "International Client Meeting & Technical Walkthrough",
  description = "A live recording demonstration of cross-functional team coordination, client sprint review, requirement validation, and project milestone alignment with international stakeholders."
}: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const directLink = videoUrl.replace("/preview", "/view?usp=sharing");

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "850px",
          width: "100%",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close video modal">
          <X size={18} />
        </button>

        <div>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.72rem",
              color: "var(--purple-primary)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: 700,
              marginBottom: "0.25rem"
            }}
          >
            VIDEO RECORDING • CLIENT MEETING SESSION
          </div>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(1.15rem, 3vw, 1.4rem)",
              fontWeight: 800,
              margin: 0,
              color: "var(--ink)",
              lineHeight: 1.3
            }}
          >
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
            border: "1px solid var(--border)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.25)"
          }}
        >
          <iframe
            src={videoUrl}
            title={title}
            style={{ width: "100%", height: "100%", border: "none" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Mobile Quick Action Link */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            paddingTop: "0.25rem"
          }}
        >
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.84rem",
              color: "var(--ink-secondary)",
              lineHeight: 1.55,
              flex: 1,
              minWidth: "220px",
              margin: 0
            }}
          >
            {description}
          </p>

          <a
            href={directLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hire-gold"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              padding: "0.65rem 1.25rem",
              fontSize: "0.82rem",
              width: "auto",
              whiteSpace: "nowrap",
              flexShrink: 0
            }}
          >
            <Play size={14} style={{ fill: "#ffffff" }} />
            <span>Open HD Stream</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
