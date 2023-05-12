(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    modalBackdrop: document.querySelector('[data-modal-backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modalBackdrop.addEventListener('click', onBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    const body = document.querySelector('body');
    body.classList.toggle('modal-open');

    document.addEventListener('keydown', onDocumentKeyDown);
  }

  function onDocumentKeyDown(event) {
    if (event.key === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
      toggleModal();
      document.removeEventListener('keydown', onDocumentKeyDown);
    }
  }

  function onBackdropClick(event) {
    if (event.target === refs.modalBackdrop) {
      toggleModal();
    }
  }
})();
