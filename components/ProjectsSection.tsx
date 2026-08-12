"use client";

import React from "react";
import Image from "next/image";

interface ProjectsSectionProps {
  onOpenProjectsModal: () => void;
}

export default function ProjectsSection({ onOpenProjectsModal }: ProjectsSectionProps) {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">02 / SELECTED PROJECTS</div>
        <h2 className="section-heading">
          Featured Work & <em>Deliverables</em>
        </h2>

        {/* Project 01: Bornolipi (Text LEFT / Image RIGHT) */}
        <div className="proj-card fade-up">
          <div className="proj-inner-grid">
            <div className="proj-info">
              <div className="proj-num">01 / FEATURED CASE STUDY</div>
              <h3 className="proj-name">Bornolipi – Multi-Platform Educational Ecosystem</h3>
              <p className="proj-desc">
                A comprehensive educational learning platform designed to teach Bengali language literacy across mobile and web interfaces. Managed end-to-end QA planning, test automation, and cross-platform release synchronization.
              </p>
              <div className="proj-deliverables">
                <div className="proj-del-title">Key Contributions & QA Leadership:</div>
                <div className="proj-del-item">
                  • Built Playwright & Selenium automated test suites covering 95%+ of user workflows.
                </div>
                <div className="proj-del-item">
                  • Orchestrated bi-weekly Agile sprint cycles and backlog grooming sessions in Jira.
                </div>
                <div className="proj-del-item">
                  • Ensured zero-defect releases across iOS, Android, and Web clients.
                </div>
              </div>
              <div className="tags">
                <span className="tag">Agile Management</span>
                <span className="tag">Playwright</span>
                <span className="tag">C# / .NET</span>
                <span className="tag">Selenium</span>
                <span className="tag">Postman</span>
                <span className="tag">Jira</span>
              </div>
              <div>
                <button onClick={onOpenProjectsModal} className="btn-primary">
                  View Case Study & Gallery (11 Slides) →
                </button>
              </div>
            </div>
            <div className="proj-img-wrap">
              <Image
                src="/images/bornolipi-cover.png"
                alt="Bornolipi Cover"
                width={640}
                height={400}
                className="large-proj-img"
              />
            </div>
          </div>
        </div>

        {/* Project 02: Hidaya App (Image LEFT / Text RIGHT) */}
        <div className="proj-card fade-up">
          <div className="proj-inner-grid">
            <div className="proj-img-wrap" style={{ order: 1 }}>
              <Image
                src="/images/hidaya-app.png"
                alt="Hidaya App"
                width={640}
                height={400}
                className="large-proj-img"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="proj-info" style={{ order: 2 }}>
              <div className="proj-num">02 / MOBILE & COMMUNITY PLATFORM</div>
              <h3 className="proj-name">Hidaya App – Islamic Lifestyle & Community Platform</h3>
              <p className="proj-desc">
                A feature-rich mobile app offering accurate prayer schedules, location-based Qibla compass alignment, Quranic audio, and community tools. Led QA automation, localization validation across multiple languages, and app store release management.
              </p>
              <div className="proj-deliverables">
                <div className="proj-del-title">Key Contributions & QA Leadership:</div>
                <div className="proj-del-item">
                  • Executed multi-device mobile QA testing across iOS & Android platforms.
                </div>
                <div className="proj-del-item">
                  • Validated geolocation API accuracy and offline caching mechanisms.
                </div>
              </div>
              <div className="tags" style={{ marginTop: "1rem" }}>
                <span className="tag">Mobile QA</span>
                <span className="tag">App Testing</span>
                <span className="tag">Localization</span>
                <span className="tag">API Assertions</span>
                <span className="tag">Postman</span>
              </div>
              <div>
                <button onClick={onOpenProjectsModal} className="btn-outline">
                  View Project Details →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project 03: Barbers Time (Text LEFT / Image RIGHT) */}
        <div className="proj-card fade-up">
          <div className="proj-inner-grid">
            <div className="proj-info">
              <div className="proj-num">03 / SAAS & BOOKING PLATFORM</div>
              <h3 className="proj-name">Barbers Time – Shop & Appointment SaaS</h3>
              <p className="proj-desc">
                An online appointment scheduling and shop management SaaS platform for salons and barbershops. Designed test plans for real-time calendar synchronization, multi-tenant payment gateways, and automated client notifications.
              </p>
              <div className="proj-deliverables">
                <div className="proj-del-title">Key Contributions & QA Leadership:</div>
                <div className="proj-del-item">
                  • Tested complex appointment booking logic and payment gateway integration.
                </div>
                <div className="proj-del-item">
                  • Coordinated sprint deliverables between frontend, backend, and shop owners.
                </div>
              </div>
              <div className="tags" style={{ marginTop: "1rem" }}>
                <span className="tag">SaaS Management</span>
                <span className="tag">Web Application</span>
                <span className="tag">Payment QA</span>
                <span className="tag">PostgreSQL</span>
              </div>
              <div>
                <button onClick={onOpenProjectsModal} className="btn-outline">
                  View Project Details →
                </button>
              </div>
            </div>
            <div className="proj-img-wrap">
              <Image
                src="/images/barbers-time-login.png"
                alt="Barbers Time Login"
                width={640}
                height={400}
                className="large-proj-img"
              />
            </div>
          </div>
        </div>

        {/* Project 04: QA Automation Framework (Image LEFT / Text RIGHT) */}
        <div className="proj-card fade-up">
          <div className="proj-inner-grid">
            <div className="proj-img-wrap" style={{ order: 1 }}>
              <Image
                src="/images/qa-tracker.png"
                alt="QA Tracker"
                width={640}
                height={400}
                className="large-proj-img"
              />
            </div>
            <div className="proj-info" style={{ order: 2 }}>
              <div className="proj-num">04 / INTERNAL INFRASTRUCTURE</div>
              <h3 className="proj-name">Automated QA Framework & Defect Matrix</h3>
              <p className="proj-desc">
                Developed custom automated testing frameworks and interactive defect tracking dashboards that reduced regression execution time by 65% and streamlined client bug reporting.
              </p>
              <div className="proj-deliverables">
                <div className="proj-del-title">Key Contributions & QA Leadership:</div>
                <div className="proj-del-item">
                  • Integrated automated Playwright test execution into GitHub Actions CI/CD.
                </div>
                <div className="proj-del-item">
                  • Designed interactive Allure & HTML test run reporting dashboards.
                </div>
              </div>
              <div className="tags" style={{ marginTop: "1rem" }}>
                <span className="tag">Test Automation</span>
                <span className="tag">Playwright</span>
                <span className="tag">C# .NET</span>
                <span className="tag">CI/CD Pipeline</span>
              </div>
              <div>
                <button onClick={onOpenProjectsModal} className="btn-outline">
                  View Project Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
