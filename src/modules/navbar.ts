/* ================================================
   navbar.ts
   Handles:
     - Background on scroll
     - Hamburger menu toggle
     - Active link highlight per section
   ================================================ */

import type { NavbarElements } from '../types';

function getNavbarElements(): NavbarElements {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (!navbar || !hamburger || !navLinks) {
    throw new Error('Navbar elements not found in the DOM.');
  }

  return {
    navbar:    navbar    as HTMLElement,
    hamburger: hamburger as HTMLButtonElement,
    navLinks:  navLinks  as HTMLUListElement,
  };
}


/* --------------------------------------------------
   Scroll background
   -------------------------------------------------- */
function initScrollBackground(navbar: HTMLElement): void {
  const onScroll = (): void => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}


/* --------------------------------------------------
   Hamburger toggle
   -------------------------------------------------- */
function initHamburger(hamburger: HTMLButtonElement, navLinks: HTMLUListElement): void {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close when a link is tapped
  navLinks.querySelectorAll<HTMLAnchorElement>('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}


/* --------------------------------------------------
   Active link highlight
   -------------------------------------------------- */
function initActiveLinks(): void {
  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  const links    = document.querySelectorAll<HTMLAnchorElement>('.navbar__links a');

  const onScroll = (): void => {
    let currentId = '';

    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        currentId = section.id;
      }
    });

    links.forEach(link => {
      const isActive = link.getAttribute('href') === `#${currentId}`;
      link.style.color = isActive ? 'var(--primary-color)' : '';
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}


/* --------------------------------------------------
   Public init
   -------------------------------------------------- */
export function initNavbar(): void {
  const { navbar, hamburger, navLinks } = getNavbarElements();

  initScrollBackground(navbar);
  initHamburger(hamburger, navLinks);
  initActiveLinks();
}
