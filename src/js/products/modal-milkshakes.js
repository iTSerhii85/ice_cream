(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-milk]"),
    closeModalBtn: document.querySelector("[data-modal-close-milk]"),
    modal: document.querySelector("[data-modal-milk]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();

