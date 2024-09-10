const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.getElementById('explore-btn');
  
    exploreButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default anchor behavior
  
      const targetSection = document.querySelector(exploreButton.getAttribute('href'));
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  