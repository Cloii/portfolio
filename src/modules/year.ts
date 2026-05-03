/* ================================================
   year.ts
   Automatically sets the copyright year in the footer
   so you never have to update it manually.
   ================================================ */

export function initYear(): void {
  const el = document.getElementById('year');
  if (el) {
    el.textContent = new Date().getFullYear().toString();
  }
}
