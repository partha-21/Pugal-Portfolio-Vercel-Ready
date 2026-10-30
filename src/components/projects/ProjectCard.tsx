import { useRef } from 'react';
import type { MouseEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ProjectVisual from '@/components/projects/ProjectVisual';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

const accentText: Record<Project['accent'], string> = {
  electric: 'text-electric-300',
  violet: 'text-violet-300',
  cyan: 'text-cyan-300',
};

const accentGlow: Record<Project['accent'], string> = {
  electric: 'rgba(59, 130, 246, 0.22)',
  violet: 'rgba(139, 92, 246, 0.22)',
  cyan: 'rgba(34, 211, 238, 0.2)',
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = project.icon;

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.transform = `perspective(1200px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-4px)`;
    card.style.setProperty('--spot-x', `${x * 100}%`);
    card.style.setProperty('--spot-y', `${y * 100}%`);
  };

  const handleLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = '';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-[transform,border-color,box-shadow] duration-500 ease-out hover:border-white/20 hover:shadow-2xl hover:shadow-black/50 sm:p-7"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 0%), ${accentGlow[project.accent]}, transparent 60%)`,
        }}
      />

      <div className="relative flex flex-1 flex-col gap-6">
        <div className="flex items-center justify-between">
          <span className={`font-mono text-sm ${accentText[project.accent]}`}>{project.number}</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-ink-200 transition-all duration-500 group-hover:rotate-6 group-hover:border-cyan-400/40 group-hover:text-cyan-300">
            <Icon className="h-5 w-5" />
          </span>
        </div>

        <ProjectVisual type={project.visual} />

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold leading-snug text-ink-100 sm:text-2xl">{project.title}</h3>
          <p className="text-sm text-ink-400">{project.tagline}</p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-ink-200">
              {tech}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onOpen}
          className="mt-auto flex w-full items-center justify-between rounded-2xl border border-white/10 bg-ink-900/60 px-5 py-3.5 text-sm font-medium text-ink-100 transition-all duration-300 hover:border-cyan-400/50 hover:bg-ink-900 hover:text-cyan-300"
        >
          View project details
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}
