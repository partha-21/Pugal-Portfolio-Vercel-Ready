import Reveal from '@/components/ui/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left';

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="section-eyebrow">
        <span className="h-px w-8 bg-gradient-to-r from-electric-400 to-cyan-300" />
        {eyebrow}
      </span>
      <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {description && <p className="text-base leading-relaxed text-ink-300 sm:text-lg">{description}</p>}
    </Reveal>
  );
}
