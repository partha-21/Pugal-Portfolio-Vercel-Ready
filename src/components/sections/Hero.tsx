import type { CSSProperties } from 'react';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import Avatar from '@/components/hero/Avatar';
import FloatingTech from '@/components/hero/FloatingTech';
import TypingRole from '@/components/hero/TypingRole';
import { floatingTech, profile } from '@/data/portfolio';

const delay = (seconds: number): CSSProperties => ({ animationDelay: `${seconds}s` });

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0 opacity-70" />
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] animate-gradient-drift rounded-full bg-electric-600/20 blur-[120px]" />
        <div className="absolute right-[-120px] top-1/3 h-[420px] w-[420px] animate-gradient-drift rounded-full bg-violet-600/20 blur-[120px]" style={{ animationDelay: '-4s' }} />
        <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] animate-gradient-drift rounded-full bg-cyan-500/15 blur-[110px]" style={{ animationDelay: '-8s' }} />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="flex flex-col gap-7">
          <span className="glass animate-fade-up inline-flex w-fit items-center gap-2.5 rounded-full px-4 py-2 text-xs text-ink-200" style={delay(0.1)}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            B.E. Computer Science &middot; Class of 2027
          </span>

          <div className="flex flex-col gap-4">
            <h1 className="animate-fade-up text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl" style={delay(0.2)}>
              <span className="text-gradient">{profile.name}</span>
            </h1>
            <p className="animate-fade-up text-balance text-2xl font-medium leading-snug text-ink-100 sm:text-3xl" style={delay(0.3)}>
              {profile.tagline}
            </p>
          </div>

          <div className="animate-fade-up flex flex-col gap-2" style={delay(0.4)}>
            <p className="max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">{profile.intro}</p>
            <TypingRole />
          </div>

          <div className="animate-fade-up flex flex-wrap items-center gap-4" style={delay(0.5)}>
            <a href={profile.resumeHref} download className="btn-primary group">
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Download Resume
            </a>
            <a href="#projects" className="btn-ghost group">
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="animate-fade-up flex items-center gap-3" style={delay(0.6)}>
            <a href={profile.linkedin} className="icon-btn" aria-label="LinkedIn profile" title="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={profile.github} className="icon-btn" aria-label="GitHub profile" title="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <span className="ml-2 font-mono text-xs text-ink-400">{profile.location}</span>
          </div>
        </div>

        <div className="animate-fade-up" style={delay(0.3)}>
          <div className="relative">
            <Avatar />
            {floatingTech.map((tech) => (
              <FloatingTech key={tech.label} label={tech.label} icon={tech.icon} className={tech.className} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
