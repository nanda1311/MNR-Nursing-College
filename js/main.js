/* ═══════════════════════════════════════════
   MNR Nursing College — Shared JS (main.js)
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Init Lucide icons ── */
  if (window.lucide) lucide.createIcons();

  /* ── Sticky navbar scroll ── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  /* ── Hamburger menu ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  }

  /* ── Active nav link ── */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(path)) link.classList.add('active');
  });
  
  /* ── Set current year in footer ── */
    document.getElementById("year").textContent = new Date().getFullYear();


  /* ── Scroll-triggered animations ── */
  const animEls = document.querySelectorAll('[data-aos]');
  const aoObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('aos-in'); aoObs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  animEls.forEach(el => aoObs.observe(el));

  /* ── Count-up animation ── */
  const countEls = document.querySelectorAll('.stat-number[data-count]');
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const duration = 1800;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current).toLocaleString();
        if (current >= target) clearInterval(timer);
      }, 16);
      countObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  countEls.forEach(el => countObs.observe(el));

  /* ── Contact form submit ── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Message sent!';
      btn.style.background = 'var(--g600)';
      setTimeout(() => { contactForm.reset(); btn.textContent = 'Send message'; btn.style.background = ''; }, 3000);
    });
  }

  /* ── Admissions form submit ── */
  const applyForm = document.getElementById('applyForm');
  if (applyForm) {
    applyForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = applyForm.querySelector('button[type="submit"]');
      btn.textContent = 'Application submitted!';
      btn.style.background = 'var(--g600)';
      setTimeout(() => { applyForm.reset(); btn.textContent = 'Submit application'; btn.style.background = ''; }, 4000);
    });
  }

});
