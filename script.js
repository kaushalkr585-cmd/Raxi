const menuButton = document.querySelector(".menu-toggle");
const primaryMenu = document.querySelector(".primary-nav");
const tocButton = document.querySelector(".toc-toggle");
const toc = document.querySelector(".toc");

if (menuButton && primaryMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = primaryMenu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

if (tocButton && toc) {
  tocButton.addEventListener("click", () => {
    toc.classList.toggle("collapsed");
  });
}
