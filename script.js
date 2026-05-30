// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  const isOpen = navLinks.classList.contains('open');
  spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
  spans[1].style.opacity = isOpen ? '0' : '1';
  spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
  });
});

// ===== SCROLL FADE-IN =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .plan-card, .portfolio-card, .diff-item, .testimonial-card, .contact-item, .section-header')
  .forEach(el => { el.classList.add('fade-in'); observer.observe(el); });

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const service = this.querySelector('select').value;
  const message = this.querySelector('textarea').value;

  const text = `Olá! Vim pelo site.\n\nNome: ${name}\nE-mail: ${email}\nServiço: ${service || 'Não informado'}\nMensagem: ${message}`;
  const url = `https://wa.me/5500000000000?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  this.reset();
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.style.color = scrollY >= top && scrollY < top + height ? 'var(--text)' : '';
    }
  });
});
