document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile navigation
  if (burgerMenu && navMenu) {
    burgerMenu.addEventListener('click', () => {
      const isExpanded = burgerMenu.getAttribute('aria-expanded') === 'true';
      
      burgerMenu.setAttribute('aria-expanded', !isExpanded);
      burgerMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Prevent body scroll when menu is active
      if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }

  // Close menu when clicking navigation links (crucial for single page apps)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('active')) {
        burgerMenu.setAttribute('aria-expanded', 'false');
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
});
