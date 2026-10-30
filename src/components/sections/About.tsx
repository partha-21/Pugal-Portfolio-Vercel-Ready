import { Compass, GraduationCap, Network, Workflow } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { aboutParagraphs } from '@/data/portfolio';

const focusAreas = [
  { label: 'UI/UX Design', icon: Network },
  { label: 'Software Development', icon: Workflow },
  { label: 'Mobile UI Design', icon: Compass },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-start gap-16 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="About me"
            title="Connecting applications and automating what matters."
          />
          <div className="flex flex-col gap-5">
            {aboutParagraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 120}>
                <p className="text-base leading-relaxed text-ink-300 sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="glass-strong group relative overflow-hidden rounded-3xl p-8">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-500/30 to-violet-500/30 text-cyan-300">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-ink-100">B.E. Computer Science</p>
                  <p className="text-sm text-ink-400">Class of 2027 &middot; Coimbatore</p>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">Focus areas</p>
              <ul className="flex flex-col gap-3">
                {focusAreas.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-ink-900/60 px-5 py-4 text-ink-100 transition-all duration-300 hover:translate-x-1 hover:border-cyan-400/40"
                  >
                    <Icon className="h-5 w-5 text-cyan-300" />
                    <span className="font-medium">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
