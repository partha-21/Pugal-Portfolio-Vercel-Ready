import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, profile } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen ? 'border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" onClick={closeMenu} className="group flex items-center gap-3" aria-label="Back to top">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-violet-600 font-display text-sm font-semibold text-white shadow-glow transition-transform duration-300 group-hover:rotate-6">
            PM
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-ink-100 sm:block">
            Pugazhenthi<span className="text-cyan-300">.</span>dev
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    active ? 'text-cyan-300' : 'text-ink-300 hover:text-ink-100'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-gradient-to-r from-electric-400 to-cyan-300 transition-transform duration-500 ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            Let's talk
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="icon-btn lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

    </header>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-20 bg-ink-950/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 pt-8">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className={`transition-all duration-500 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: menuOpen ? `${index * 60 + 100}ms` : '0ms' }}
            >
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] px-5 py-4 font-display text-xl text-ink-100 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                {item.label}
                <span className="font-mono text-xs text-ink-400">0{index + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute inset-x-6 bottom-8 flex flex-col gap-3">
          <a href="#contact" onClick={closeMenu} className="btn-primary w-full">
            Start a conversation
          </a>
          <a href={`mailto:${profile.email}`} className="btn-ghost w-full">
            {profile.email}
          </a>
        </div>
      </div>
    </>
  );
}
