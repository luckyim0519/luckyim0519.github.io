/* ============================================
   Lucky Im — Portfolio · main.js
   ============================================ */

// Hamburger menu
const hamburger = document.getElementById('nav-hamburger');
if (hamburger) {
  // Build mobile menu and inject after nav
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'nav-mobile-menu';
  mobileMenu.id = 'nav-mobile-menu';
  ['About|/about', 'Projects|/projects', 'Diary|/diary'].forEach(item => {
    const [label, href] = item.split('|');
    const a = document.createElement('a');
    a.href = href;
    a.textContent = label;
    mobileMenu.appendChild(a);
  });
  document.getElementById('nav').after(mobileMenu);

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', e => {
    e.stopPropagation(); // prevent document click from firing on same event
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });

  // Close on link tap
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // Close on outside tap
  document.addEventListener('click', e => {
    if (!mobileMenu.contains(e.target)) closeMenu();
  });
}

// Nav scroll border
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
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
