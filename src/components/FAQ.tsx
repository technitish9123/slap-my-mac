"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Will this void my warranty?",
    a: "The app won't. Your slapping technique might. We take no responsibility for dents, cracks, or emotional damage to your MacBook.",
  },
  {
    q: "Does it work on Intel Macs?",
    a: "No. Slap My Mac requires an Apple Silicon Mac (M1 or later) because it uses the built-in accelerometer, which Intel Macs don't have.",
  },
  {
    q: "Can I add my own sounds?",
    a: "Not yet! Custom sound packs are coming in v1.1. For now, enjoy our curated collection of 130+ clips.",
  },
  {
    q: "Does it drain my battery?",
    a: "Barely. The app uses the accelerometer passively and only activates audio processing when a slap is detected. You won't notice any impact on battery life.",
  },
  {
    q: "What about false triggers?",
    a: "The sensitivity slider lets you dial in the perfect threshold. Set it high enough to ignore typing and normal movement, but low enough to catch even a gentle smack.",
  },
  {
    q: "Does it work on Windows?",
    a: "No. It's called Slap My Mac. The Mac part is kind of important. Also, most Windows laptops lack the accelerometer hardware needed.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. Slap My Mac runs 100% locally. No data is collected, no analytics, no telemetry. Your slap count is between you and your Mac.",
  },
  {
    q: "My Mac isn't responding to slaps?",
    a: "Make sure you've granted the app Accessibility permissions in System Settings. Also check that sensitivity isn't set too high. When in doubt, slap harder.",
  },
];

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 backdrop-blur-lg`}
      style={{
        backgroundColor: "var(--t-glass)",
        border: isOpen
          ? "1px solid var(--t-border-strong)"
          : "1px solid var(--t-border)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
      >
        <span
          className="font-medium text-base sm:text-lg leading-snug transition-colors duration-200"
          style={{ color: "var(--t-text)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--t-accent)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--t-text)";
          }}
        >
          {q}
        </span>
        <span
          className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-lg text-xl font-light transition-all duration-300 select-none`}
          style={{
            color: "var(--t-accent)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "200px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p
          className="px-6 pb-5 text-sm sm:text-base leading-relaxed"
          style={{ color: "var(--t-text-muted)" }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 px-4"
      style={{ backgroundColor: "var(--t-bg-alt)" }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          style={{ color: "var(--t-text)" }}
        >
          FAQ
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
