import { cn } from "@/lib/utils";

interface GoldDividerProps {
  className?: string;
}

export function GoldDivider({ className }: GoldDividerProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
      <div className="flex gap-1 items-center">
        <div className="w-1 h-1 rounded-full bg-gold/60" />
        <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
        <div className="w-1 h-1 rounded-full bg-gold/60" />
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  );
}
