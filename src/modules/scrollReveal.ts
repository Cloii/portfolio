/* ================================================
   scrollReveal.ts
   Uses IntersectionObserver to animate elements
   with the .reveal class into view.
   ================================================ */

import type { RevealObserverOptions } from '../types';

function buildObserver(options: RevealObserverOptions): IntersectionObserver {
  return new IntersectionObserver(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // trigger once
        }
      });
    },
    {
      threshold:   options.threshold  ?? 0.12,
      rootMargin:  options.rootMargin ?? '0px',
    }
  );
}


export function initScrollReveal(options: RevealObserverOptions = {}): void {
  const elements = document.querySelectorAll<HTMLElement>('.reveal');

  if (elements.length === 0) return;

  const observer = buildObserver(options);
  elements.forEach(el => observer.observe(el));
}
