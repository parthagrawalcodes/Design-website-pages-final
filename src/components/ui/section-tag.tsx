import type { LucideIcon } from "lucide-react";

interface SectionTagProps {
  icon: LucideIcon;
  label: string;
}

export function SectionTag({ icon: Icon, label }: SectionTagProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5 border border-gold/20 bg-champagne text-gold">
      <Icon className="w-3 h-3" />
      {label}
    </div>
  );
}
