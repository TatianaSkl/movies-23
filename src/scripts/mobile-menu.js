(() => {
  const menuButton = document.querySelector('.mobile-menu__button');
  const mobileMenu = document.querySelector('.mobile-menu__nav-list');
  const backdrop = document.querySelector('.backdrop');
  
  menuButton.addEventListener("click", () => {
    const expanded =
      menuButton.getAttribute("aria-expanded") === "true" || false;

    menuButton.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", !expanded);
    document.body.classList.add("modal-open");
    mobileMenu.classList.toggle("is-open");
    backdrop.classList.toggle("is-hidden");
  });

  document.addEventListener('click', e => {
    if (backdrop.contains(e.target)) {
      menuButton.classList.toggle("is-open");
      document.body.classList.remove("modal-open");
      mobileMenu.classList.toggle("is-open");
      backdrop.classList.toggle("is-hidden");
    }
  });
  
})();