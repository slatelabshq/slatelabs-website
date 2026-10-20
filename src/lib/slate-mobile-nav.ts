/** Undo scroll lock from slate.js mobile sheet (must run after SPA nav from the menu). */
export function closeMobileNavSheet() {
  const root = document.documentElement;
  root.style.overflow = "";

  const sheet = document.querySelector<HTMLElement>("[data-nav-sheet]");
  if (sheet) {
    sheet.dataset.open = "false";
    sheet.removeAttribute("role");
    sheet.removeAttribute("aria-modal");
  }

  document.querySelectorAll<HTMLElement>("[data-nav-toggle]").forEach((btn) => {
    btn.setAttribute("aria-expanded", "false");
  });
}
