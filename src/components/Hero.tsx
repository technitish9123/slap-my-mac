"use client";

import { useState, useEffect, useCallback } from "react";
import { playRandomFromPack } from "@/hooks/useAudio";

export default function Hero() {
  const [isSlapped, setIsSlapped] = useState(false);
  const [slapCount, setSlapCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Fake global slap counter that ticks up
  const BASE_COUNT = 1_847_293;

  useEffect(() => {
    setMounted(true);
    const start = Date.now();
    const tick = () => {
      const elapsed = (Date.now() - start) / 1000;
      setSlapCount(BASE_COUNT + Math.floor(elapsed * 0.7));
    };
    tick();
    const id = setInterval(tick, 1400);
    return () => clearInterval(id);
  }, []);

  const handleSlap = useCallback(() => {
    setIsSlapped(true);
    setSlapCount((c) => c + 1);
    // Play a random pain sound on slap
    playRandomFromPack("pain", 0.8);
    setTimeout(() => setIsSlapped(false), 600);
  }, []);

  const formattedCount = mounted
    ? slapCount.toLocaleString("en-US")
    : "1,847,293";

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          10% { transform: translateX(-8px) rotate(-3deg); }
          20% { transform: translateX(8px) rotate(3deg); }
          30% { transform: translateX(-6px) rotate(-2deg); }
          40% { transform: translateX(6px) rotate(2deg); }
          50% { transform: translateX(-4px) rotate(-1deg); }
          60% { transform: translateX(4px) rotate(1deg); }
          70% { transform: translateX(-2px) rotate(0deg); }
          80% { transform: translateX(2px) rotate(0deg); }
          90% { transform: translateX(-1px) rotate(0deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.85; }
        }
        @keyframes counter-tick {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .hero-float { animation: float 5s ease-in-out infinite; }
        .hero-shake { animation: shake 0.6s ease-in-out; }
        .hero-fade-1 { animation: fadeUp 0.7s ease-out 0.1s both; }
        .hero-fade-2 { animation: fadeUp 0.7s ease-out 0.25s both; }
        .hero-fade-3 { animation: fadeUp 0.7s ease-out 0.4s both; }
        .hero-fade-4 { animation: fadeUp 0.7s ease-out 0.55s both; }
        .hero-fade-5 { animation: fadeUp 0.7s ease-out 0.7s both; }
        .counter-tick { animation: counter-tick 0.3s ease-out; }
      `}</style>

      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
        style={{ backgroundColor: "var(--t-bg)" }}
      >
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--t-glow) 0%, transparent 40%, transparent 70%)",
            animation: "pulse-glow 4s ease-in-out infinite",
          }}
        />

        {/* Subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Laptop SVG + Hand */}
        <div className="hero-fade-1 mb-8 relative">
          <button
            onClick={handleSlap}
            className={`relative cursor-pointer select-none outline-none bg-transparent border-none ${
              isSlapped ? "hero-shake" : "hero-float"
            }`}
            aria-label="Slap the MacBook"
          >
            <svg
              width="160"
              height="110"
              viewBox="0 0 160 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Screen */}
              <rect
                x="24"
                y="4"
                width="112"
                height="72"
                rx="6"
                style={{ fill: "var(--t-svg-screen)", stroke: "var(--t-svg-bezel)" }}
                strokeWidth="2"
              />
              {/* Screen inner */}
              <rect
                x="30"
                y="10"
                width="100"
                height="60"
                rx="3"
                style={{ fill: "var(--t-svg-inner)" }}
              />
              {/* Screen line decorations */}
              <rect x="42" y="30" width="40" height="3" rx="1.5" style={{ fill: "var(--t-svg-bezel)" }} />
              <rect x="42" y="38" width="56" height="3" rx="1.5" style={{ fill: "var(--t-svg-line)" }} />
              <rect x="42" y="46" width="32" height="3" rx="1.5" style={{ fill: "var(--t-svg-line)" }} />
              {/* Apple-ish logo dot */}
              <circle cx="80" cy="22" r="3" style={{ fill: "var(--t-accent)" }} opacity="0.7" />
              {/* Base */}
              <path
                d="M10 80 L24 76 L136 76 L150 80 L154 88 C154 92 152 94 148 94 L12 94 C8 94 6 92 6 88 Z"
                style={{ fill: "var(--t-svg-screen)", stroke: "var(--t-svg-bezel)" }}
                strokeWidth="2"
              />
              {/* Trackpad */}
              <rect
                x="62"
                y="82"
                width="36"
                height="6"
                rx="3"
                style={{ fill: "var(--t-svg-line)" }}
              />
              {/* Hinge line */}
              <line
                x1="20"
                y1="77"
                x2="140"
                y2="77"
                style={{ stroke: "var(--t-svg-bezel)" }}
                strokeWidth="1"
              />
            </svg>
            {/* Hand emoji */}
            <span
              className="absolute -top-2 -right-4 text-4xl transition-transform duration-200"
              style={{
                transform: isSlapped ? "rotate(-30deg) scale(1.3)" : "rotate(12deg)",
                filter: isSlapped ? "drop-shadow(0 0 12px var(--t-glow-strong))" : "none",
              }}
            >
              👋
            </span>
            {/* Slap flash */}
            {isSlapped && (
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl pointer-events-none"
                style={{ animation: "fadeUp 0.4s ease-out forwards" }}
              >
                💥
              </span>
            )}
          </button>
          <p className="text-center text-xs mt-3 opacity-60" style={{ color: "var(--t-text-muted)" }}>
            click to slap
          </p>
        </div>

        {/* Title */}
        <h1 className="hero-fade-2 text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-2xl">
          <span style={{ color: "var(--t-text)" }}>Slap your MacBook.</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--t-accent) 0%, var(--t-accent-2) 50%, var(--t-accent) 100%)",
            }}
          >
            It screams back.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-fade-3 mt-5 text-lg sm:text-xl text-center font-medium" style={{ color: "var(--t-text-muted)" }}>
          That&apos;s it. That&apos;s the app.
        </p>

        {/* Download CTA */}
        <div className="hero-fade-4 mt-10 flex flex-col items-center gap-4">
          <a
            href="https://github.com/technitish9123/slapmymac/blob/main/SlapMyMac-1.0.0.dmg?raw=true"
            className="group relative inline-flex items-center gap-3 rounded-xl px-8 py-4 text-base font-semibold transition-all duration-200 hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              color: "var(--t-btn-text)",
              backgroundColor: "var(--t-accent)",
              boxShadow: "0 0 30px var(--t-glow-strong), 0 4px 20px var(--t-shadow)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-y-0.5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download for macOS
            <span className="ml-1 rounded-md bg-black/15 px-2 py-0.5 text-xs font-medium">
              .dmg
            </span>
          </a>

          {/* System requirements */}
          <p className="text-xs opacity-70 text-center" style={{ color: "var(--t-text-muted)" }}>
            macOS 14.6+ (Sonoma) &middot; Apple Silicon required &middot; v1.0.0
          </p>

          {/* Install tip */}
          <div
            className="mt-4 max-w-md mx-auto rounded-lg px-4 py-3"
            style={{
              backgroundColor: "var(--t-accent-soft)",
              border: "1px solid var(--t-accent-glow)",
            }}
          >
            <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--t-text-muted)" }}>
              <span className="font-semibold" style={{ color: "var(--t-accent)" }}>⚠️ &quot;Damaged&quot; error?</span>{" "}
              macOS quarantines unsigned apps. Open Terminal and run:
            </p>
            <code
              className="block text-xs rounded-md px-3 py-2 font-mono select-all"
              style={{
                backgroundColor: "var(--t-glass)",
                color: "var(--t-accent)",
                border: "1px solid var(--t-border)",
              }}
            >
              xattr -cr /Applications/SlapMyMac.app
            </code>
            <p className="text-xs mt-2 opacity-70" style={{ color: "var(--t-text-muted)" }}>
              Then open the app normally. This only needs to be done once.
            </p>
          </div>
        </div>

        {/* Slap counter */}
        <div className="hero-fade-5 mt-16 flex flex-col items-center gap-2">
          <div
            className="flex items-center gap-3 rounded-full px-6 py-3 border"
            style={{
              backgroundColor: "var(--t-glass)",
              borderColor: "var(--t-border)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: "var(--t-accent)" }}
              />
              <span
                className="relative inline-flex h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "var(--t-accent)" }}
              />
            </span>
            <span className="text-sm" style={{ color: "var(--t-text-muted)" }}>
              <span
                className="font-bold tabular-nums"
                key={slapCount}
                style={{
                  color: "var(--t-accent)",
                  ...(isSlapped ? { animation: "counter-tick 0.3s ease-out" } : {}),
                }}
              >
                {formattedCount}
              </span>
              {" "}slaps worldwide
            </span>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to top, var(--t-bg) 0%, transparent 100%)",
          }}
        />
      </section>
    </>
  );
}
