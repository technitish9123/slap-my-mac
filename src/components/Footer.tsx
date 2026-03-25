"use client";

export default function Footer() {
  return (
    <footer
      className="px-4 py-12 sm:py-16"
      style={{
        backgroundColor: "var(--t-bg)",
        borderTop: "1px solid var(--t-border)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-10">
          {/* Left: Logo + tagline */}
          <div>
            <div
              className="text-xl font-bold tracking-tight"
              style={{ color: "var(--t-text)" }}
            >
              <span className="mr-1.5" role="img" aria-label="wave">
                👋
              </span>
              Slap<span style={{ color: "var(--t-accent)" }}>My</span>Mac
            </div>
            <p
              className="mt-2 text-sm"
              style={{ color: "var(--t-text-muted)" }}
            >
              Built by{" "}
              <a
                href="https://x.com/Nekotish"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors duration-200"
                style={{ color: "var(--t-accent)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--t-accent-2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--t-accent)";
                }}
              >
                nitish
              </a>
            </p>
          </div>

          {/* Right: Links */}
          <nav className="flex items-center gap-6 text-sm">
            <a
              href="https://github.com/technitish9123/slapmymac"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "var(--t-text-muted)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--t-text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "var(--t-text-muted)";
              }}
            >
              GitHub
            </a>
            <a
              href="#faq"
              className="transition-colors duration-200"
              style={{ color: "var(--t-text-muted)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--t-text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "var(--t-text-muted)";
              }}
            >
              FAQ
            </a>
            <a
              href="mailto:support@slapmymac.com"
              className="transition-colors duration-200"
              style={{ color: "var(--t-text-muted)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--t-text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "var(--t-text-muted)";
              }}
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div
          className="pt-6"
          style={{ borderTop: "1px solid var(--t-border)" }}
        >
          <p
            className="text-xs text-center"
            style={{ color: "var(--t-text-muted)", opacity: 0.7 }}
          >
            &copy; 2026 SlapMyMac. Built with 👋 by{" "}
            <a
              href="https://x.com/Nekotish"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "var(--t-accent)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "var(--t-accent-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "var(--t-accent)";
              }}
            >
              nitish
            </a>
            . Don&apos;t actually break your laptop.
          </p>
        </div>
      </div>
    </footer>
  );
}
