document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }

  // Active Link Highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    // robust check for active state
    if (link.getAttribute('href') === currentPath || 
       (currentPath === '/' && link.getAttribute('href').endsWith('index.html')) ||
       (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '../index.html' && link.getAttribute('href') !== 'index.html')) {
       
       link.classList.add('text-peppa');
       link.classList.remove('text-text-muted');
    }
  });
});
