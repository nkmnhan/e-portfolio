interface IconProps {
  className?: string;
}

export function PullSharkIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Shark body */}
      <path
        d="M12 34c0-8 6-18 20-18s20 10 20 18c0 6-6 12-20 12S12 40 12 34z"
        fill="currentColor"
        opacity={0.15}
      />
      <path
        d="M12 34c0-8 6-18 20-18s20 10 20 18"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        fill="none"
      />
      {/* Dorsal fin */}
      <path
        d="M28 16L32 4l4 12"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity={0.25}
      />
      {/* Tail */}
      <path
        d="M12 34L4 26M12 34L4 42"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      {/* Eye */}
      <circle cx={40} cy={30} r={2.5} fill="currentColor" />
      {/* Mouth */}
      <path
        d="M44 36c4 0 8-1 12-3"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
      {/* Gill lines */}
      <path
        d="M36 30v8M38 30v8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        opacity={0.4}
      />
      {/* x2 badge */}
      <circle cx={52} cy={52} r={10} fill="currentColor" opacity={0.2} />
      <text
        x={52}
        y={56}
        textAnchor="middle"
        fill="currentColor"
        fontSize={11}
        fontWeight="bold"
        fontFamily="monospace"
      >
        x2
      </text>
    </svg>
  );
}

export function PairExtraordinaireIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Left person */}
      <circle cx={20} cy={16} r={7} stroke="currentColor" strokeWidth={2.5} fill="currentColor" fillOpacity={0.15} />
      <path
        d="M8 40c0-8 5.4-14 12-14s12 6 12 14"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        fill="none"
      />
      {/* Right person */}
      <circle cx={44} cy={16} r={7} stroke="currentColor" strokeWidth={2.5} fill="currentColor" fillOpacity={0.15} />
      <path
        d="M32 40c0-8 5.4-14 12-14s12 6 12 14"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        fill="none"
      />
      {/* Connection line / code branch */}
      <path
        d="M20 40v8c0 4 4 6 12 6s12-2 12-6v-8"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="4 3"
        opacity={0.5}
      />
      {/* Merge node */}
      <circle cx={32} cy={50} r={3.5} fill="currentColor" opacity={0.3} />
      <circle cx={32} cy={50} r={2} fill="currentColor" />
    </svg>
  );
}
