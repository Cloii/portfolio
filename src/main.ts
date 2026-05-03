/* ================================================
   main.ts — Entry point
   ================================================
   Imports all modules and initializes them once
   the DOM is ready.
   ================================================ */

import './styles/style.css';

import { initNavbar }       from './modules/navbar';
import { initScrollReveal } from './modules/scrollReveal';
import { initYear }         from './modules/year';

function init(): void {
  initNavbar();
  initScrollReveal({ threshold: 0.12 });
  initYear();
}

// Wait for DOM before running
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
