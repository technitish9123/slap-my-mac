"use client";

import { useState } from "react";

function formatSensitivity(value: number): string {
  return `${value.toFixed(3)}g`;
}

function formatCooldown(value: number): string {
  return `${value.toFixed(1)}s`;
}

function formatVolume(value: number): string {
  if (value >= 70 && value <= 80) return "Force-based";
  if (value === 0) return "Muted";
  if (value === 100) return "100%";
  return `${value}%`;
}

export default function Sliders() {
  const [sensitivity, setSensitivity] = useState(0.051);
  const [cooldown, setCooldown] = useState(1.0);
  const [volume, setVolume] = useState(75);

  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{
              color: "var(--t-accent)",
              backgroundColor: "var(--t-accent-soft)",
            }}
          >
            Customization
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: "var(--t-text)" }}
        >
          Dial In Your Slap
        </h2>

        {/* Description */}
        <p
          className="text-center text-lg max-w-2xl mx-auto mb-16"
          style={{ color: "var(--t-text-muted)" }}
        >
          Fine-tune the experience to your exact slapping style.
        </p>

        {/* Sliders */}
        <div className="space-y-10">
          {/* Sensitivity */}
          <SliderControl
            label="Sensitivity"
            value={sensitivity}
            displayValue={formatSensitivity(sensitivity)}
            min={0.001}
            max={0.1}
            step={0.001}
            hintLeft="Butterfly landing"
            hintRight="Earthquake"
            onChange={setSensitivity}
          />

          {/* Cooldown */}
          <SliderControl
            label="Cooldown"
            value={cooldown}
            displayValue={formatCooldown(cooldown)}
            min={0}
            max={5}
            step={0.1}
            hintLeft="No chill"
            hintRight="Contemplative"
            onChange={setCooldown}
          />

          {/* Volume Scale */}
          <SliderControl
            label="Volume Scale"
            value={volume}
            displayValue={formatVolume(volume)}
            min={0}
            max={100}
            step={1}
            hintLeft="Whisper"
            hintRight="Full blast"
            onChange={setVolume}
          />
        </div>
      </div>

      {/* Custom range input styling */}
      <style jsx global>{`
        input[type="range"].slap-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: var(--t-border);
          outline: none;
          cursor: pointer;
        }

        input[type="range"].slap-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--t-accent);
          cursor: pointer;
          box-shadow: 0 0 12px var(--t-accent-glow);
          transition: box-shadow 0.2s, transform 0.2s;
        }

        input[type="range"].slap-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 20px var(--t-accent-glow);
          transform: scale(1.15);
        }

        input[type="range"].slap-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--t-accent);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 12px var(--t-accent-glow);
        }

        input[type="range"].slap-slider::-moz-range-track {
          height: 6px;
          border-radius: 3px;
          background: var(--t-border);
        }
      `}</style>
    </section>
  );
}

function SliderControl({
  label,
  value,
  displayValue,
  min,
  max,
  step,
  hintLeft,
  hintRight,
  onChange,
}: {
  label: string;
  value: number;
  displayValue: string;
  min: number;
  max: number;
  step: number;
  hintLeft: string;
  hintRight: string;
  onChange: (v: number) => void;
}) {
  return (
    <div
      className="rounded-2xl border p-6 backdrop-blur-lg"
      style={{
        backgroundColor: "var(--t-glass)",
        borderColor: "var(--t-border)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-base font-semibold"
          style={{ color: "var(--t-text)" }}
        >
          {label}
        </span>
        <span
          className="text-sm font-mono px-3 py-1 rounded-lg"
          style={{
            color: "var(--t-accent)",
            backgroundColor: "var(--t-accent-soft)",
          }}
        >
          {displayValue}
        </span>
      </div>

      <input
        type="range"
        className="slap-slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{
          background: `linear-gradient(to right, var(--t-accent) 0%, var(--t-accent) ${
            ((value - min) / (max - min)) * 100
          }%, var(--t-border) ${
            ((value - min) / (max - min)) * 100
          }%, var(--t-border) 100%)`,
        }}
      />

      <div className="flex justify-between mt-3">
        <span className="text-xs" style={{ color: "var(--t-text-muted)" }}>
          {hintLeft}
        </span>
        <span className="text-xs" style={{ color: "var(--t-text-muted)" }}>
          {hintRight}
        </span>
      </div>
    </div>
  );
}
