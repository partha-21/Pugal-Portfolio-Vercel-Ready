import { profile } from '@/data/portfolio';

export default function Avatar() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric-500/30 via-violet-500/20 to-cyan-400/25 blur-3xl" />

      <div className="absolute inset-[6%] animate-orbit rounded-full border border-dashed border-cyan-400/25">
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-glow-cyan" />
      </div>
      <div className="absolute inset-[16%] animate-orbit-reverse rounded-full border border-violet-400/25">
        <span className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-violet-400 shadow-glow-violet" />
      </div>

      <div className="glass-strong absolute inset-[18%] overflow-hidden rounded-full shadow-glow">
        <img
          src="/pugal_pic.jpeg"
          alt={`${profile.firstName} M`}
          width={600}
          height={600}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="glass absolute -bottom-2 -left-2 animate-float rounded-2xl px-4 py-3 font-mono text-xs text-cyan-300 shadow-glow-cyan sm:-left-6">
        <span className="text-ink-400">const</span> automate = <span className="text-violet-300">true</span>;
      </div>
    </div>
  );
}
