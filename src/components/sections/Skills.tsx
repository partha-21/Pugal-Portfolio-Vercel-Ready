import { useInView } from '@/hooks/useInView';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillGroups, type SkillGroup } from '@/data/portfolio';

const accentStyles: Record<SkillGroup['accent'], { icon: string; chip: string; bar: string }> = {
  electric: {
    icon: 'text-electric-300 bg-electric-500/15',
    chip: 'hover:border-electric-400/60 hover:text-electric-300',
    bar: 'from-electric-500 to-cyan-300',
  },
  violet: {
    icon: 'text-violet-300 bg-violet-500/15',
    chip: 'hover:border-violet-400/60 hover:text-violet-300',
    bar: 'from-violet-500 to-electric-400',
  },
  cyan: {
    icon: 'text-cyan-300 bg-cyan-500/15',
    chip: 'hover:border-cyan-400/60 hover:text-cyan-300',
    bar: 'from-cyan-400 to-electric-400',
  },
};

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const styles = accentStyles[group.accent];
  const Icon = group.icon;

  return (
    <div
      ref={ref}
      className="glass group relative flex flex-col gap-6 overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.06]"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex items-center justify-between">
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${styles.icon}`}>
          <Icon className="h-6 w-6" />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-ink-100">{group.title}</h3>
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className={`h-full origin-left rounded-full bg-gradient-to-r ${styles.bar} transition-transform duration-1000 ease-out`}
            style={{ transform: inView ? 'scaleX(1)' : 'scaleX(0)', transitionDelay: `${index * 60 + 200}ms` }}
          />
        </div>
      </div>

      <ul className="flex flex-wrap gap-2">
        {group.items.map((item, itemIndex) => (
          <li
            key={item}
            className={`rounded-full border border-white/10 bg-ink-900/70 px-3.5 py-1.5 text-sm text-ink-200 transition-all duration-500 ${styles.chip} ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 60 + itemIndex * 70 + 250}ms` }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Technical skills"
          title="The toolkit behind my builds."
          description="Languages, core computer science, integration tools, and the platforms I use to ship and automate."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <SkillCard group={group} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
