(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-how]"),
    closeModalBtn: document.querySelector("[data-modal-close-how]"),
    modal: document.querySelector("[data-modal-how]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();

