import { useCallback, useState } from 'react';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectModal from '@/components/projects/ProjectModal';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects } from '@/data/portfolio';

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeProject = projects.find((project) => project.id === activeId) ?? null;
  const closeModal = useCallback(() => setActiveId(null), []);

  return (
    <section id="projects" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured projects"
          title="Selected work, built to solve real problems."
          description="Automation pipelines, algorithmic tools, and full-stack applications, each one designed around a clear outcome."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 120} className="h-full">
              <ProjectCard project={project} onOpen={() => setActiveId(project.id)} />
            </Reveal>
          ))}
        </div>
      </div>

      {activeProject && <ProjectModal project={activeProject} onClose={closeModal} />}
    </section>
  );
}
