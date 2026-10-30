import { Mail, MapPin, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { profile, socialLinks } from '@/data/portfolio';

interface ContactItem {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
}

const contactItems: ContactItem[] = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, icon: Phone },
  { label: 'Location', value: profile.location, icon: MapPin },
];



export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[480px] -translate-y-1/2 bg-gradient-to-r from-electric-600/10 via-violet-600/10 to-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something intelligent together."
            description="Reach out about software development, API integration, and automation projects."
          />

          <ul className="flex flex-col gap-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.04] text-cyan-300 transition-colors duration-300 group-hover:bg-cyan-400/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-mono text-xs uppercase tracking-wider text-ink-400">{item.label}</span>
                    <span className="text-base text-ink-100">{item.value}</span>
                  </span>
                </>
              );
              return (
                <Reveal key={item.label} delay={index * 100}>
                  <li>
                    {item.href ? (
                      <a href={item.href} className="glass group flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:translate-x-1 hover:border-cyan-400/35">
                        {content}
                      </a>
                    ) : (
                      <div className="glass group flex items-center gap-4 rounded-2xl p-4">{content}</div>
                    )}
                  </li>
                </Reveal>
              );
            })}
          </ul>

          <Reveal delay={300}>
            <div className="flex flex-col gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">Find me online</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={`${label} profile`}
                    className="glass inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm text-ink-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-violet-300 hover:shadow-glow-violet"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
