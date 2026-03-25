"use client";

// Audio file manifest
export const AUDIO_PACKS = {
  pain: {
    label: "Pain",
    count: 10,
    path: "/audio/pain",
    files: Array.from({ length: 10 }, (_, i) => `${String(i).padStart(2, "0")}.mp3`),
  },
  halo: {
    label: "Halo",
    count: 9,
    path: "/audio/halo",
    files: Array.from({ length: 9 }, (_, i) => `${String(i).padStart(2, "0")}.mp3`),
  },
  sexy: {
    label: "Sexy",
    count: 60,
    path: "/audio/sexy",
    files: Array.from({ length: 60 }, (_, i) => `${String(i).padStart(2, "0")}.mp3`),
  },
} as const;

export type PackName = keyof typeof AUDIO_PACKS;

let currentAudio: HTMLAudioElement | null = null;

/** Play a random clip from a given pack. Stops any currently playing clip first. */
export function playRandomFromPack(pack: PackName, volume = 0.7): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;

  // Stop any currently playing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  const p = AUDIO_PACKS[pack];
  const file = p.files[Math.floor(Math.random() * p.files.length)];
  const audio = new Audio(`${p.path}/${file}`);
  audio.volume = volume;
  audio.play().catch(() => {
    // Browser may block autoplay before user interaction — silently ignore
  });
  currentAudio = audio;
  return audio;
}

/** Play a specific clip from a pack */
export function playClip(pack: PackName, index: number, volume = 0.7): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  const p = AUDIO_PACKS[pack];
  if (index < 0 || index >= p.files.length) return null;
  const audio = new Audio(`${p.path}/${p.files[index]}`);
  audio.volume = volume;
  audio.play().catch(() => {});
  currentAudio = audio;
  return audio;
}

/** Stop whatever is currently playing */
export function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}
