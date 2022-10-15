(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-coffee]"),
    closeModalBtn: document.querySelector("[data-modal-close-coffee]"),
    modal: document.querySelector("[data-modal-coffee]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();

