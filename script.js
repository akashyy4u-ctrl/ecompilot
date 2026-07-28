const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 20);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navToggle.classList.toggle('active', !isOpen);
  nav?.classList.toggle('open', !isOpen);
  document.body.classList.toggle('nav-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.classList.remove('active');
    nav.classList.remove('open');
    document.body.classList.remove('nav-open');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelectorAll('[data-year]').forEach((element) => { element.textContent = new Date().getFullYear(); });

const packageSelect = document.querySelector('[data-package-select]');
const requestedPackage = new URLSearchParams(window.location.search).get('package');
if (packageSelect && requestedPackage) packageSelect.value = requestedPackage;
