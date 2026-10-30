import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
    if (!finePointer.matches) return;

    document.documentElement.classList.add('has-custom-cursor');
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest('a, button, input, textarea, select, [role="button"], [data-cursor="hover"]');
      ring.classList.toggle('is-hovering', Boolean(interactive));
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor" aria-hidden="true">
        <div className="custom-cursor-ring" />
      </div>
      <div ref={dotRef} className="custom-cursor" aria-hidden="true">
        <div className="custom-cursor-dot" />
      </div>
    </>
  );
}
