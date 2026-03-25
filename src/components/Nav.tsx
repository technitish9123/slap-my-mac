"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-lg"
          : ""
      }`}
      style={{
        backgroundColor: scrolled
          ? "var(--t-nav-bg)"
          : "var(--t-nav-bg-clear)",
        borderBottom: `1px solid ${scrolled ? "var(--t-border)" : "transparent"}`,
        backdropFilter: "blur(24px) saturate(1.4)",
        WebkitBackdropFilter: "blur(24px) saturate(1.4)",
        boxShadow: scrolled ? `0 4px 20px var(--t-shadow)` : "none",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-bold text-lg tracking-tight select-none"
          style={{ color: "var(--t-text)" }}
        >
          <span className="text-xl">👋</span>
          <span>
            Slap<span style={{ color: "var(--t-accent)" }}>My</span>Mac
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm transition-colors duration-200 hover:opacity-80"
            style={{ color: "var(--t-text-muted)" }}
          >
            Features
          </a>
          <a
            href="#faq"
            className="text-sm transition-colors duration-200 hover:opacity-80"
            style={{ color: "var(--t-text-muted)" }}
          >
            FAQ
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="relative flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--t-surface)",
              border: "1px solid var(--t-border)",
            }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {/* Sun icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute transition-all duration-300"
              style={{
                color: "var(--t-accent)",
                opacity: theme === "dark" ? 1 : 0,
                transform: theme === "dark" ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0)",
              }}
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            {/* Moon icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute transition-all duration-300"
              style={{
                color: "var(--t-accent)",
                opacity: theme === "light" ? 1 : 0,
                transform: theme === "light" ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0)",
              }}
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <a
            href="https://github.com/technitish9123/slapmymac/blob/main/SlapMyMac-1.0.0.dmg?raw=true"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 hover:brightness-110"
            style={{
              backgroundColor: "var(--t-accent)",
              color: "var(--t-btn-text)",
              boxShadow: `0 0 20px var(--t-accent-glow)`,
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </a>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center justify-center w-9 h-9 rounded-lg"
            style={{
              backgroundColor: "var(--t-surface)",
              border: "1px solid var(--t-border)",
            }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "var(--t-accent)" }}
            >
              {theme === "dark" ? (
                <>
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </>
              ) : (
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              )}
            </svg>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <span
              className="block h-0.5 w-5 rounded transition-all duration-200"
              style={{
                backgroundColor: "var(--t-text)",
                transform: mobileOpen ? "rotate(45deg) translateY(4px)" : "none",
              }}
            />
            <span
              className="block h-0.5 w-5 rounded transition-all duration-200"
              style={{
                backgroundColor: "var(--t-text)",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 w-5 rounded transition-all duration-200"
              style={{
                backgroundColor: "var(--t-text)",
                transform: mobileOpen ? "rotate(-45deg) translateY(-4px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 flex flex-col gap-4">
          <a
            href="#features"
            onClick={() => setMobileOpen(false)}
            className="text-sm transition-colors"
            style={{ color: "var(--t-text-muted)" }}
          >
            Features
          </a>
          <a
            href="#faq"
            onClick={() => setMobileOpen(false)}
            className="text-sm transition-colors"
            style={{ color: "var(--t-text-muted)" }}
          >
            FAQ
          </a>
          <a
            href="https://github.com/technitish9123/slapmymac/blob/main/SlapMyMac-1.0.0.dmg?raw=true"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold"
            style={{ backgroundColor: "var(--t-accent)", color: "var(--t-btn-text)" }}
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
