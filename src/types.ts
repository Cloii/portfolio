/* ================================================
   types.ts — Shared TypeScript interfaces
   ================================================ */

export interface NavbarElements {
  navbar: HTMLElement;
  hamburger: HTMLButtonElement;
  navLinks: HTMLUListElement;
}

export interface RevealObserverOptions {
  threshold?: number;
  rootMargin?: string;
}
