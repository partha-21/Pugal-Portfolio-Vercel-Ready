import { useTypewriter } from '@/hooks/useTypewriter';
import { profile } from '@/data/portfolio';

export default function TypingRole() {
  const text = useTypewriter(profile.roles);

  return (
    <div className="flex h-10 items-center gap-3 font-mono text-base text-ink-200 sm:text-lg">
      <span className="text-ink-400">&gt;</span>
      <span className="text-gradient font-medium">{text}</span>
      <span className="h-5 w-[2px] animate-blink bg-cyan-300" aria-hidden="true" />
    </div>
  );
}
