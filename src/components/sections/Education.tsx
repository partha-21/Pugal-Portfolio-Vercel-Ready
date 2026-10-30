import { GraduationCap } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Education" title="Where I'm learning to build." />

        <ol className="relative mt-16 flex max-w-3xl flex-col gap-8 border-l border-white/10 pl-8 sm:pl-10">
          {education.map((item, index) => (
            <Reveal key={item.title} delay={index * 150}>
              <li className="relative">
                <span className="absolute -left-[41px] top-6 flex h-4 w-4 items-center justify-center sm:-left-[49px]">
                  <span className="absolute h-4 w-4 animate-pulse-ring rounded-full bg-cyan-400/40" />
                  <span className="relative h-3 w-3 rounded-full bg-gradient-to-br from-electric-400 to-cyan-300 shadow-glow-cyan" />
                </span>

                <div className="glass group rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-1 font-mono text-xs text-cyan-300">
                      {item.period}
                    </span>
                    <GraduationCap className="h-5 w-5 text-ink-400 transition-colors duration-300 group-hover:text-cyan-300" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-ink-100 sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-base text-ink-300">{item.org}</p>
                  {item.detail && (
                    <p className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric-500/15 to-violet-500/15 px-4 py-2 font-mono text-sm text-ink-100">
                      {item.detail}
                    </p>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
