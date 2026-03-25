"use client";

import { useEffect, useRef } from "react";

const perks = [
  "All 8 voice packs",
  "130+ sound clips",
  "Lifetime updates",
  "Zero subscriptions, zero ads",
];

export default function Pricing() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "scale-100");
            entry.target.classList.remove("opacity-0", "scale-95");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--t-bg)" }}
    >
      <div className="max-w-lg mx-auto">
        <div
          ref={cardRef}
          className="relative rounded-2xl overflow-hidden opacity-0 scale-95 transition-all duration-700 backdrop-blur-xl"
          style={{
            backgroundColor: "var(--t-glass)",
            border: "1px solid var(--t-border-strong)",
          }}
        >
          {/* Accent gradient line at top */}
          <div
            className="h-[3px] w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--t-accent), var(--t-accent-2), transparent)",
            }}
          />

          <div className="px-8 py-10 text-center">
            {/* Tag */}
            <span
              className="inline-block text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-6"
              style={{
                backgroundColor: "var(--t-accent-soft)",
                color: "var(--t-accent)",
                border: "1px solid var(--t-accent-glow)",
              }}
            >
              One-time purchase
            </span>

            {/* Price */}
            <div className="flex items-start justify-center gap-1 mb-3">
              <span
                className="text-2xl font-medium mt-3"
                style={{ color: "var(--t-text-muted)" }}
              >
                $
              </span>
              <span
                className="font-extrabold leading-none"
                style={{ color: "var(--t-text)", fontSize: "5rem" }}
              >
                0
              </span>
            </div>

            {/* Tagline */}
            <p
              className="text-sm mb-8"
              style={{ color: "var(--t-text-muted)" }}
            >
              Free. Because your MacBook already costs enough.
            </p>

            {/* Perks */}
            <ul className="space-y-3 mb-8 text-left max-w-xs mx-auto">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                    style={{
                      backgroundColor: "var(--t-accent-soft)",
                      color: "var(--t-accent)",
                    }}
                  >
                    &#10003;
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "var(--t-text)" }}
                  >
                    {perk}
                  </span>
                </li>
              ))}
            </ul>

            {/* Download button */}
            <a
              href="https://github.com/technitish9123/slapmymac/blob/main/SlapMyMac-1.0.0.dmg?raw=true"
              className="inline-flex items-center justify-center w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                backgroundColor: "var(--t-accent)",
                color: "var(--t-btn-text)",
                boxShadow: "0 0 20px var(--t-accent-glow)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "var(--t-accent-2)";
                el.style.boxShadow = "0 0 30px var(--t-glow-strong)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "var(--t-accent)";
                el.style.boxShadow = "0 0 20px var(--t-accent-glow)";
              }}
            >
              Download for Mac
            </a>

            {/* Disclaimer */}
            <p
              className="text-xs mt-5 leading-relaxed"
              style={{ color: "var(--t-text-muted)" }}
            >
              Requires an M1+ MacBook and a willingness to hit expensive
              things.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
