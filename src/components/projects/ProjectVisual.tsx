import { Bot, Mic, MessageCircle, ShoppingBag } from 'lucide-react';
import type { Project } from '@/data/portfolio';

const timetableCells = [
  'cyan', 'electric', 'empty', 'violet', 'empty',
  'empty', 'cyan', 'violet', 'empty', 'electric',
  'electric', 'empty', 'cyan', 'empty', 'violet',
  'violet', 'electric', 'empty', 'cyan', 'empty',
] as const;

const cellStyles = {
  cyan: 'bg-cyan-400/70 shadow-glow-cyan',
  electric: 'bg-electric-500/70',
  violet: 'bg-violet-500/70',
  empty: 'bg-white/[0.04]',
} as const;

function WorkflowVisual() {
  const nodes = [
    { label: 'WhatsApp', icon: MessageCircle },
    { label: 'Speech-to-text', icon: Mic },
    { label: 'AI reply', icon: Bot },
  ];
  return (
    <div className="flex h-full items-center justify-center gap-2 px-4">
      {nodes.map(({ label, icon: Icon }, index) => (
        <div key={label} className="flex items-center gap-2">
          <div className="glass flex flex-col items-center gap-1.5 rounded-xl px-3 py-2.5 text-center">
            <Icon className="h-4 w-4 text-cyan-300" />
            <span className="whitespace-nowrap font-mono text-[10px] text-ink-200">{label}</span>
          </div>
          {index < nodes.length - 1 && (
            <span className="h-px w-6 bg-[linear-gradient(90deg,#3B82F6,#67E8F9,#3B82F6)] bg-[length:200%_100%] animate-shimmer sm:w-10" />
          )}
        </div>
      ))}
    </div>
  );
}

function TimetableVisual() {
  return (
    <div className="flex h-full items-center justify-center px-6">
      <div className="grid w-full max-w-[220px] grid-cols-5 gap-1.5">
        {timetableCells.map((cell, index) => (
          <span
            key={index}
            className={`aspect-square rounded-md ${cellStyles[cell]} ${cell !== 'empty' ? 'animate-pulse' : ''}`}
            style={{ animationDelay: `${(index % 5) * 180}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function ShopVisual() {
  return (
    <div className="flex h-full items-center justify-center px-6">
      <div className="glass w-full max-w-[240px] overflow-hidden rounded-xl">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-rose-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-300/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          <ShoppingBag className="ml-auto h-3.5 w-3.5 text-cyan-300" />
        </div>
        <div className="grid grid-cols-3 gap-2 p-3">
          {['from-electric-500/60 to-cyan-400/40', 'from-violet-500/60 to-electric-400/40', 'from-cyan-400/50 to-violet-500/40'].map((gradient, index) => (
            <div key={index} className="flex flex-col gap-1.5">
              <span className={`aspect-square rounded-lg bg-gradient-to-br ${gradient}`} />
              <span className="h-1.5 w-full rounded-full bg-white/15" />
              <span className="h-1.5 w-2/3 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const visuals: Record<Project['visual'], () => JSX.Element> = {
  workflow: WorkflowVisual,
  timetable: TimetableVisual,
  shop: ShopVisual,
};

export default function ProjectVisual({ type }: { type: Project['visual'] }) {
  const Visual = visuals[type];
  return (
    <div className="relative h-44 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-950/70">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="relative h-full">
        <Visual />
      </div>
    </div>
  );
}
