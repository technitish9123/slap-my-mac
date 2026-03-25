"use client";

import { useState, useRef } from "react";
import { playRandomFromPack, stopAudio, type PackName } from "@/hooks/useAudio";

const moods: {
  emoji: string;
  name: string;
  clips: number;
  pack: PackName;
  warning?: string;
}[] = [
  { emoji: "\u{1F631}", name: "Dramatic", clips: 10, pack: "pain" },
  { emoji: "\u{1F624}", name: "Angry", clips: 10, pack: "pain" },
  { emoji: "\u{1F622}", name: "Sad", clips: 9, pack: "halo" },
  { emoji: "\u{1F60F}", name: "Sarcastic", clips: 10, pack: "pain" },
  { emoji: "\u{1F628}", name: "Scared", clips: 9, pack: "halo" },
  { emoji: "\u{1F914}", name: "Confused", clips: 9, pack: "halo" },
  { emoji: "\u{1F9D8}", name: "Zen", clips: 9, pack: "halo" },
  { emoji: "\u{1F618}", name: "Spicy", clips: 60, pack: "sexy", warning: "\u{1F3A7} headphones recommended" },
];

export default function MoodGrid() {
  const [clicked, setClicked] = useState<number | null>(null);
  const [playing, setPlaying] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = (index: number) => {
    setClicked(index);
    setTimeout(() => setClicked(null), 200);

    // If same card is playing, stop it
    if (playing === index) {
      stopAudio();
      setPlaying(null);
      return;
    }

    // Play a random clip from this mood's pack
    const mood = moods[index];
    const audio = playRandomFromPack(mood.pack, 0.7);
    if (audio) {
      audioRef.current = audio;
      setPlaying(index);
      audio.addEventListener("ended", () => {
        setPlaying(null);
        audioRef.current = null;
      });
    }
  };

  return (
    <>
    <style>{`
      @keyframes soundbar {
        0% { height: 4px; }
        100% { height: 16px; }
      }
    `}</style>
    <section className="w-full py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{
              color: "var(--t-accent)",
              backgroundColor: "var(--t-accent-soft)",
            }}
          >
            Sound Packs
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: "var(--t-text)" }}
        >
          Eight Moods of Protest
        </h2>

        {/* Description */}
        <p
          className="text-center text-lg max-w-2xl mx-auto mb-16"
          style={{ color: "var(--t-text-muted)" }}
        >
          130+ sound clips across 8 voice packs. From dramatic screams to
          passive-aggressive sighs. Your MacBook has range.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {moods.map((mood, i) => (
            <button
              key={mood.name}
              onClick={() => handleClick(i)}
              className="group relative rounded-2xl border text-left transition-all duration-200 cursor-pointer backdrop-blur-lg"
              style={{
                backgroundColor: "var(--t-glass)",
                borderColor:
                  clicked === i ? "var(--t-accent)" : "var(--t-border)",
                transform:
                  clicked === i ? "scale(0.95)" : "translateY(0px)",
                boxShadow:
                  clicked === i
                    ? "0 0 24px var(--t-accent-glow)"
                    : "none",
                padding: "1.5rem",
              }}
              onMouseEnter={(e) => {
                if (clicked !== i) {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "var(--t-accent-glow)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px var(--t-accent-soft)";
                }
              }}
              onMouseLeave={(e) => {
                if (clicked !== i) {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.borderColor =
                    "var(--t-border)";
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl">{mood.emoji}</span>
                {playing === i ? (
                  <span
                    className="flex items-center gap-[3px] h-5"
                    aria-label="Playing"
                  >
                    {[1, 2, 3].map((bar) => (
                      <span
                        key={bar}
                        className="w-[3px] rounded-full"
                        style={{
                          backgroundColor: "var(--t-accent)",
                          animation: `soundbar 0.6s ease-in-out ${bar * 0.15}s infinite alternate`,
                        }}
                      />
                    ))}
                  </span>
                ) : (
                  <span className="text-xs opacity-0 group-hover:opacity-60 transition-opacity" style={{ color: "var(--t-text-muted)" }}>
                    ▶ preview
                  </span>
                )}
              </div>
              <div
                className="text-base font-semibold mb-1"
                style={{ color: "var(--t-text)" }}
              >
                {mood.name}
              </div>
              <div
                className="text-sm"
                style={{ color: "var(--t-text-muted)" }}
              >
                {mood.clips} clips
              </div>
              {mood.warning && (
                <div
                  className="mt-3 text-xs px-2 py-1 rounded-md inline-block"
                  style={{
                    color: "var(--t-accent)",
                    backgroundColor: "var(--t-accent-soft)",
                  }}
                >
                  {mood.warning}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
