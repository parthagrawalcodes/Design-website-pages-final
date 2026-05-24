import { cn } from "@/lib/utils";

interface CurvedAccentProps {
  className?: string;
}

export function CurvedAccent({ className }: CurvedAccentProps) {
  return (
    <svg
      className={cn("absolute pointer-events-none opacity-[0.06]", className)}
      viewBox="0 0 200 200"
      fill="none"
    >
      <path
        d="M 20 100 Q 60 20 100 100 Q 140 180 180 100"
        stroke="#C89B3C"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 40 60 Q 100 10 160 60 Q 200 100 160 140 Q 100 190 40 140 Q 0 100 40 60 Z"
        stroke="#C89B3C"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
