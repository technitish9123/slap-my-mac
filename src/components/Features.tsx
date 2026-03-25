"use client";

import { useEffect, useRef, useState } from "react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function RevealBlock({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const features = [
  { emoji: "📍", title: "Lives in your menu bar", description: "Zero desktop clutter" },
  { emoji: "📊", title: "Force-scaled volume", description: "Harder slaps = louder screams" },
  { emoji: "⚡", title: "Adjustable sensitivity", description: "From feather touch to haymaker" },
  { emoji: "⏱", title: "Cooldown timer", description: "Prevents sound-spam on rapid slaps" },
  { emoji: "🚀", title: "Launch at login", description: "Always ready for abuse" },
  { emoji: "🔢", title: "Slap counter", description: "Track your aggression over time" },
  { emoji: "🪶", title: "Lightweight", description: "Uses minimal CPU and memory" },
  { emoji: "🔒", title: "Privacy first", description: "No data leaves your Mac, ever" },
];

function MenuBarMockup() {
  return (
    <RevealBlock delay={200}>
      <div className="mx-auto max-w-sm">
        {/* Menu bar top strip */}
        <div
          className="flex items-center gap-2 rounded-t-xl backdrop-blur-xl px-4 py-2.5"
          style={{ border: "1px solid var(--t-border)", backgroundColor: "var(--t-glass)" }}
        >
          <span className="inline-block h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="inline-block h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="inline-block h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-auto font-mono text-sm" style={{ color: "var(--t-text)" }}>
            👋 Slaps: 42
          </span>
        </div>

        {/* Dropdown */}
        <div
          className="rounded-b-xl backdrop-blur-xl px-1 py-1.5"
          style={{ border: "1px solid var(--t-border)", borderTop: "none", backgroundColor: "var(--t-glass)" }}
        >
          {/* Mood row */}
          <div
            className="flex items-center justify-between rounded-lg px-3 py-2 transition-colors"
            style={{ ["--hover-bg" as string]: "var(--t-surface)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--t-surface)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <span className="text-sm" style={{ color: "var(--t-text-muted)" }}>Mood</span>
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{ backgroundColor: "var(--t-accent-soft)", color: "var(--t-accent)" }}
            >
              Dramatic
            </span>
          </div>

          {/* Sensitivity row */}
          <div
            className="flex items-center justify-between rounded-lg px-3 py-2 transition-colors"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--t-surface)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <span className="text-sm" style={{ color: "var(--t-text-muted)" }}>Sensitivity</span>
            <span className="text-sm" style={{ color: "var(--t-text)" }}>Medium</span>
          </div>

          {/* Today's Slaps row */}
          <div
            className="flex items-center justify-between rounded-lg px-3 py-2 transition-colors"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--t-surface)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <span className="text-sm" style={{ color: "var(--t-text-muted)" }}>Today&apos;s Slaps</span>
            <span className="font-mono text-sm" style={{ color: "var(--t-text)" }}>42</span>
          </div>

          {/* Divider */}
          <div className="mx-3 my-1.5" style={{ borderTop: "1px solid var(--t-border)" }} />

          {/* Quit */}
          <div
            className="flex items-center rounded-lg px-3 py-2 transition-colors"
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--t-surface)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <span className="text-sm" style={{ color: "var(--t-text-muted)" }}>Quit</span>
          </div>
        </div>
      </div>
    </RevealBlock>
  );
}

export default function Features() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32" style={{ backgroundColor: "var(--t-bg)" }}>
      {/* -- "Your Laptop Has Feelings" -- */}
      <div className="mx-auto max-w-4xl">
        <RevealBlock>
          <div className="text-center">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase"
              style={{ border: "1px solid var(--t-accent-glow)", backgroundColor: "var(--t-accent-soft)", color: "var(--t-accent)" }}
            >
              Core Concept
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" style={{ color: "var(--t-text)" }}>
              Your Laptop Has Feelings
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: "var(--t-text-muted)" }}>
              Slap My Mac lives in your menu bar, silently judging every smack.
              It responds proportionally to force — a gentle tap gets a whimper,
              a full-palm strike gets a scream.
            </p>
          </div>
        </RevealBlock>

        <div className="mt-12">
          <MenuBarMockup />
        </div>
      </div>

      {/* -- "Also, It Does These Things" -- */}
      <div className="mx-auto mt-28 max-w-5xl md:mt-36">
        <RevealBlock>
          <div className="text-center">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase"
              style={{ border: "1px solid var(--t-accent-glow)", backgroundColor: "var(--t-accent-soft)", color: "var(--t-accent)" }}
            >
              The Fine Print
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" style={{ color: "var(--t-text)" }}>
              Also, It Does These Things
            </h2>
          </div>
        </RevealBlock>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <RevealBlock key={feature.title} delay={i * 80}>
              <div
                className="group rounded-xl backdrop-blur-lg p-5 transition-colors duration-300"
                style={{
                  border: "1px solid var(--t-border)",
                  backgroundColor: "var(--t-glass)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--t-accent-glow)";
                  e.currentTarget.style.backgroundColor = "var(--t-accent-soft)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--t-border)";
                  e.currentTarget.style.backgroundColor = "var(--t-glass)";
                }}
              >
                <span className="text-2xl">{feature.emoji}</span>
                <h3 className="mt-3 text-sm font-semibold" style={{ color: "var(--t-text)" }}>
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                  {feature.description}
                </p>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
