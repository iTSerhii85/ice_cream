(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      closMenuOpenModal: document.querySelector('[data-menu-close-open-modal]'),

      closeMenuBtn1: document.querySelector('[data-menu-close-open-modal1]'),
      closeMenuBtn2: document.querySelector('[data-menu-close-open-modal2]'),
      closeMenuBtn3: document.querySelector('[data-menu-close-open-modal3]'),
      closeMenuBtn4: document.querySelector('[data-menu-close-open-modal4]'),
      menu: document.querySelector('[data-menu]'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closMenuOpenModal.addEventListener('click', toggleModal);
  
  refs.closeMenuBtn1.addEventListener('click', toggleModal);
  refs.closeMenuBtn2.addEventListener('click', toggleModal);
  refs.closeMenuBtn3.addEventListener('click', toggleModal);
  refs.closeMenuBtn4.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle('is-open');
    }
    
  })();