// script.js

// Mobile menu toggle
function toggleMenu() {
  document
    .querySelector('#hamburger-nav .menu-links')
    .classList.toggle('active');
}

// Reveal‐on‐scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.2 }
);
reveals.forEach((el) => observer.observe(el));
