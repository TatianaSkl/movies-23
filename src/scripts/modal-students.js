(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    const body = document.querySelector("body");
    body.classList.toggle("modal-open");

    document.addEventListener("keydown", onDocumentKeyDown);
  }

  function onDocumentKeyDown(event) {
    if (event.key === "Escape" && !refs.modal.classList.contains("is-hidden")) {
      toggleModal();
      document.removeEventListener("keydown", onDocumentKeyDown);
    }
  }
})();