// Toggle mobile menu
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Reveal animations on scroll
const animatedItems = document.querySelectorAll('.animate');
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
animatedItems.forEach(item => observer.observe(item));