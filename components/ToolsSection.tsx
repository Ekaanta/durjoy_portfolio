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
      <div className="container">
        <div className="section-label">07 / TECH STACK & TOOLS</div>
        <h2 className="section-heading">
          Tools <em>I Use</em>
        </h2>

        <div className="tools-grid">
          {toolsList.map((t, idx) => (
            <div key={idx} className="tool-pill fade-up">
              <div className="tool-dot" style={{ background: t.color }}></div>
              {t.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
