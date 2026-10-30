import { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';
import ProjectVisual from '@/components/projects/ProjectVisual';
import type { Project } from '@/data/portfolio';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6" role="presentation">
      <div className="absolute inset-0 animate-fade-in bg-ink-950/80 backdrop-blur-md" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="glass-strong relative flex max-h-[92svh] w-full max-w-2xl animate-modal-in flex-col overflow-hidden rounded-t-3xl sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] px-6 py-5 sm:px-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Project {project.number}</span>
            <h3 id="project-modal-title" className="text-2xl font-semibold text-ink-100 sm:text-3xl">
              {project.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="icon-btn h-10 w-10 shrink-0"
            aria-label="Close project details"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-col gap-7 overflow-y-auto px-6 py-6 sm:px-8">
          <ProjectVisual type={project.visual} />

          <p className="text-base leading-relaxed text-ink-300">{project.description}</p>

          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">Key highlights</h4>
            <ul className="flex flex-col gap-3">
              {project.highlights.map((highlight, index) => (
                <li
                  key={highlight}
                  className="animate-fade-up flex items-start gap-3 text-sm leading-relaxed text-ink-200"
                  style={{ animationDelay: `${index * 90 + 150}ms` }}
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
                    <Check className="h-3 w-3" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">Technologies</h4>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3.5 py-1.5 font-mono text-xs text-cyan-200">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
