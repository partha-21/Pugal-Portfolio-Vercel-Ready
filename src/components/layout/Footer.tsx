import { ArrowUpRight } from 'lucide-react';
import { navItems, profile, socialLinks } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <span className="font-display text-lg font-semibold text-gradient">{profile.name}</span>
          <p className="max-w-xs text-sm leading-relaxed text-ink-400">{profile.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:grid-cols-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="group inline-flex items-center gap-1 text-ink-300 transition-colors hover:text-cyan-300">
                  {item.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} aria-label={`${label} profile`} title={label} className="icon-btn h-10 w-10">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>&copy; {year} {profile.firstName} M. All rights reserved.</p>
          <p className="font-mono">Coimbatore, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
}
