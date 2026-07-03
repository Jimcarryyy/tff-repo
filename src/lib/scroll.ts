const HEADER_OFFSET = 80;
const SCROLL_DURATION = 700;

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export function smoothScrollTo(y: number, duration = SCROLL_DURATION): void {
  const startY = window.scrollY;
  const distance = y - startY;
  let start: number | undefined;

  function step(timestamp: number) {
    if (start === undefined) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = easeInOutQuad(progress);
    window.scrollTo(0, startY + distance * ease);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

export function scrollToSection(sectionId: string, offset = HEADER_OFFSET): void {
  const element = document.getElementById(sectionId);
  if (!element) return;
  const endY = element.getBoundingClientRect().top + window.scrollY - offset;
  smoothScrollTo(endY);
}

export function scrollToTop(): void {
  smoothScrollTo(0);
}
