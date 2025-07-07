// Control menú móvil
const menuToggle = document.getElementById('menu-toggle');
const navMobile = document.getElementById('nav-mobile');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-mobile-link');

export function initMenu() {
  function abrirMenu() {
    navMobile.classList.add('active');
    overlay.classList.add('active');
    navMobile.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-label', 'Cerrar menú');
    menuToggle.setAttribute('aria-expanded', 'true');
  }

  function cerrarMenu() {
    navMobile.classList.remove('active');
    overlay.classList.remove('active');
    navMobile.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  menuToggle.addEventListener('click', () => {
    if (navMobile.classList.contains('active')) {
      cerrarMenu();
    } else {
      abrirMenu();
    }
  });

  overlay.addEventListener('click', cerrarMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', cerrarMenu);
  });

  // Cerrar menú con Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navMobile.classList.contains('active')) {
      cerrarMenu();
      menuToggle.focus();
    }
  });
}
