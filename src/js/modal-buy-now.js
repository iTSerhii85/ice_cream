(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-buy-now-open]"),
     openModalBtn1: document.querySelector("[data-modal-buy-now-open1]"),
    closeModalBtn: document.querySelector("[data-modal-buy-now-close]"),
    modal: document.querySelector("[data-modal-buy-now]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
   refs.openModalBtn1.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();