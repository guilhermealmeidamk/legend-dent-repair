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

  return (
    <div>
      <div className="relative aspect-4/3 select-none overflow-hidden rounded-lg border border-white/10 bg-gunmetal">
        <PanelPlaceholder label="AFTER" src={afterSrc} />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <PanelPlaceholder label="BEFORE" src={beforeSrc} />
        </div>

        <div
          className="absolute inset-y-0 w-0.5 bg-gold"
          style={{ left: `${position}%` }}
        />

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Before and after slider for ${caption}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-3 text-sm text-steel">{caption}</p>
    </div>
  );
}

function PanelPlaceholder({ label, src }: { label: string; src?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={label} className="h-full w-full object-cover" />;
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gunmetal to-graphite">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-steel">
        {label} — photo coming soon
      </span>
    </div>
  );
}
