"use client";

import { useState } from "react";

export default function BeforeAfterSlider({
  caption,
  beforeSrc,
  afterSrc,
}: {
  caption: string;
  beforeSrc?: string;
  afterSrc?: string;
}) {
  const [position, setPosition] = useState(50);
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <div>
      <div className="relative aspect-4/3 select-none overflow-hidden rounded-lg border border-white/10 bg-gunmetal">
        <Panel label="AFTER" src={afterSrc} align="right" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Panel label="BEFORE" src={beforeSrc} align="left" />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-gold"
          style={{ left: `${position}%` }}
        />

        <div
          className={`pointer-events-none absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-graphite/90 text-gold shadow-lg shadow-black/40 ${
            hasInteracted ? "" : "animate-nudge"
          }`}
          style={{ left: `${position}%` }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 7 3 12l5 5" />
            <path d="M16 7l5 5-5 5" />
          </svg>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          onPointerDown={() => setHasInteracted(true)}
          aria-label={`Before and after slider for ${caption}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize touch-none opacity-0"
        />
      </div>
      <p className="mt-3 text-sm text-steel">{caption}</p>
    </div>
  );
}

function Panel({
  label,
  src,
  align,
}: {
  label: string;
  src?: string;
  align: "left" | "right";
}) {
  return (
    <div className="relative h-full w-full">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          draggable={false}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gunmetal to-graphite">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-steel">
            {label} — photo coming soon
          </span>
        </div>
      )}
      <span
        className={`absolute top-2 rounded bg-graphite/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-silver ${
          align === "left" ? "left-2" : "right-2"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
