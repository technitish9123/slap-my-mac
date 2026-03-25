"use client";

import { useEffect, useRef } from "react";

const milestones = [
  {
    version: "v1.0.0",
    current: true,
    description: "8 voice packs, 130+ clips, menu bar app, slap counter",
  },
  {
    version: "v1.1",
    current: false,
    description: "Custom sound pack import, community sound sharing",
  },
  {
    version: "v1.2",
    current: false,
    description: "Slap statistics dashboard, weekly slap reports",
  },
  {
    version: "v2.0",
    current: false,
    description:
      "Multi-device sync, leaderboard, MCP server integration",
  },
];

export default function Roadmap() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = el.querySelectorAll("[data-reveal]");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--t-bg-alt)" }}
    >
      <div className="max-w-2xl mx-auto">
        <h2
          data-reveal
          className="text-4xl md:text-5xl font-bold text-center mb-16 opacity-0 translate-y-8 transition-all duration-700"
          style={{ color: "var(--t-text)" }}
        >
          Roadmap
        </h2>

        <div className="relative pl-8">
          {/* Timeline line */}
          <div
            className="absolute left-[11px] top-2 bottom-2 w-[2px]"
            style={{ backgroundColor: "var(--t-border)" }}
          />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div
                key={m.version}
                data-reveal
                className="relative opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Dot */}
                <div
                  className="absolute -left-8 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: m.current ? "var(--t-accent)" : "var(--t-border-strong)",
                    backgroundColor: m.current ? "var(--t-accent)" : "var(--t-bg-alt)",
                    boxShadow: m.current
                      ? "0 0 12px var(--t-glow-strong), 0 0 24px var(--t-accent-glow)"
                      : "none",
                  }}
                >
                  {m.current && (
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#fff" }}
                    />
                  )}
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-lg font-semibold"
                      style={{ color: m.current ? "var(--t-accent)" : "var(--t-text)" }}
                    >
                      {m.version}
                    </span>
                    {m.current && (
                      <span
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: "var(--t-accent-soft)",
                          color: "var(--t-accent)",
                          border: "1px solid var(--t-accent-glow)",
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--t-text-muted)" }}
                  >
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
