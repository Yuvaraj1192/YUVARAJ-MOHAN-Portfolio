const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#primary-menu');

if (menuToggle instanceof HTMLButtonElement && menu instanceof HTMLElement) {
  document.documentElement.classList.add('js');

  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('is-open', !isOpen);
  });

  menu.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
      closeMenu();
    }
  });
}

