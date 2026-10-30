import { useEffect, useState } from 'react';
import { profile } from '@/data/portfolio';

export default function IntroCurtain() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <div aria-hidden="true" className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-950 animate-curtain-up">
      <div className="flex flex-col items-center gap-4">
        <span className="font-display text-3xl font-semibold tracking-[0.3em] text-gradient sm:text-4xl">{profile.name}</span>
        <span className="h-px w-40 origin-center animate-fade-in bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
      </div>
    </div>
  );
}
