"use client";

import React from "react";

const toolsList = [
  { name: "Jira", color: "#0052CC" },
  { name: "Confluence", color: "#0052CC" },
  { name: "Slack", color: "#4A154B" },
  { name: "Trello", color: "#0079BF" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Postman", color: "#FF6B35" },
  { name: "Playwright", color: "#2EAD33" },
  { name: "GitHub", color: "#0D1117" },
  { name: "MS Teams", color: "#6264A7" },
  { name: "VS Code", color: "#007ACC" },
  { name: "Selenium", color: "#43B02A" },
  { name: "C# / .NET", color: "#512BD4" }
];

export default function ToolsSection() {
  return (
    <section id="tools">
      <div className="section-label">07 / TOOLS & TECHNOLOGIES</div>
      <div className="tools-grid">
        {toolsList.map((t, idx) => (
          <div key={idx} className="tool-pill">
            <div className="tool-dot" style={{ background: t.color }}></div>
            {t.name}
          </div>
        ))}
      </div>
    </section>
  );
}
