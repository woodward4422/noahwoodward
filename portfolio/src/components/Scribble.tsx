import { HTMLAttributes } from "react";

export function OliveDrop(props: HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 56 80"
      aria-hidden
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 2 C10 24 4 40 8 54 c4 14 20 24 20 24 s16-10 20-24 C52 40 46 24 28 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WavyUnderline(props: HTMLAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 24" fill="none" {...props}>
      <path
        d="M2 14 C 18 4, 34 24, 50 14 S 82 4, 98 14 130 24, 146 14 178 4, 198 14"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

