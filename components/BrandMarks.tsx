import type { SVGProps } from "react";

type MarkProps = SVGProps<SVGSVGElement>;

const base = "overflow-visible";

export function PsMark(props: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${props.className ?? ""}`} aria-hidden>
      <defs>
        <linearGradient id="ps-mark-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#46b1ff" />
          <stop offset="1" stopColor="#0e639c" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5.5" fill="url(#ps-mark-g)" />
      <text
        x="6"
        y="16.4"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="800"
        fontSize="11"
        letterSpacing="-0.5"
        fill="#ffffff"
      >
        Ps
      </text>
    </svg>
  );
}

export function AeMark(props: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${props.className ?? ""}`} aria-hidden>
      <defs>
        <linearGradient id="ae-mark-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#cbc2ff" />
          <stop offset="1" stopColor="#3d35c3" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5.5" fill="url(#ae-mark-g)" />
      <text
        x="6"
        y="16.4"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="800"
        fontSize="11"
        letterSpacing="-0.5"
        fill="#ffffff"
      >
        Ae
      </text>
    </svg>
  );
}

export function MotionMark(props: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${props.className ?? ""}`} aria-hidden>
      <rect width="24" height="24" rx="5.5" fill="#1c1c1c" />
      <text
        x="6.4"
        y="16.6"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="800"
        fontSize="11.5"
        fill="#ffffff"
      >
        M
      </text>
    </svg>
  );
}