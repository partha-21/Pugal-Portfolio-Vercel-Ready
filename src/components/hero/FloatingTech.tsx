import type { LucideIcon } from 'lucide-react';

interface FloatingTechProps {
  label: string;
  icon: LucideIcon;
  className: string;
}

export default function FloatingTech({ label, icon: Icon, className }: FloatingTechProps) {
  return (
    <div className={`absolute z-20 hidden sm:block ${className}`}>
      <div className="group relative">
        <div className="glass flex cursor-default items-center gap-2 rounded-2xl px-3.5 py-2.5 text-sm text-ink-100 shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-glow-cyan">
          <Icon className="h-4 w-4 text-cyan-300" />
          <span className="whitespace-nowrap font-mono text-xs">{label}</span>
        </div>
      </div>
    </div>
  );
}
