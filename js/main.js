/* ============================================
   Lucky Im — Portfolio · main.js
   ============================================ */

// Nav scroll border
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// Active nav link based on current page
const path = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (
    (path.endsWith('/') || path.endsWith('index.html')) && href === '/' ||
    path.includes('/about') && href.includes('about') ||
    path.includes('/projects') && href.includes('projects') ||
    path.includes('/diary') && href.includes('diary')
  ) {
    link.classList.add('active');
  }
});

// Reveal on scroll
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Photo grid staggered reveal
const photoObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.photo-item').forEach(item => item.classList.add('visible'));
      photoObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.photo-grid').forEach(el => photoObserver.observe(el));
