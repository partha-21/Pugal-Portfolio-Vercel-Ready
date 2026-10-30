import { Award, Sparkles, Users, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';
import { achievements, certifications, leadership, type Achievement } from '@/data/portfolio';

function AchievementCard({ achievement }: { achievement: Achievement }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const count = useCountUp(achievement.stat?.value ?? 0, inView && Boolean(achievement.stat));
  const Icon = achievement.icon;

  return (
    <div
      ref={ref}
      className="glass group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/40"
    >
      <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-violet-500/15 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 transition-transform duration-500 group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </span>

      <div className="relative flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-ink-100 sm:text-2xl">{achievement.title}</h3>
        <p className="text-sm leading-relaxed text-ink-300 sm:text-base">{achievement.description}</p>
      </div>

      {achievement.stat && (
        <div className="relative mt-auto flex items-end gap-4 border-t border-white/[0.06] pt-6">
          <span className="text-gradient font-display text-6xl font-bold tabular-nums leading-none sm:text-7xl">
            {count}
            {achievement.stat.suffix}
          </span>
          <span className="pb-2 font-mono text-xs uppercase tracking-wider text-ink-400">{achievement.stat.label}</span>
        </div>
      )}
    </div>
  );
}

function CredentialItem({ title, meta, icon: Icon }: { title: string; meta: string; icon: LucideIcon }) {
  return (
    <div className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:translate-x-1 hover:border-cyan-400/35">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-0.5">
        <p className="font-medium text-ink-100">{title}</p>
        <p className="text-sm text-ink-400">{meta}</p>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Achievements" title="Milestones on the journey." />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={index * 120} className="h-full">
              <AchievementCard achievement={achievement} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-cyan-300" />
                <h3 className="font-display text-2xl font-semibold text-ink-100">Certifications</h3>
              </div>
              <div className="flex flex-col gap-4">
                {certifications.map((cert) => (
                  <CredentialItem key={cert.title} title={cert.title} meta={`${cert.issuer} \u00b7 ${cert.date}`} icon={Sparkles} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-violet-300" />
                <h3 className="font-display text-2xl font-semibold text-ink-100">Leadership &amp; Activities</h3>
              </div>
              <div className="flex flex-col gap-4">
                {leadership.map((item) => (
                  <CredentialItem key={item.title} title={item.title} meta={item.org} icon={item.icon} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
