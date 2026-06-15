'use strict';

/* ── Hamburger menu ── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  navMenu.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* ── Navbar scroll shadow ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}, { passive: true });

/* ── Accordion ── */
document.querySelectorAll('.acc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const body     = document.getElementById(btn.getAttribute('aria-controls'));

    // Close all
    document.querySelectorAll('.acc-btn').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      document.getElementById(b.getAttribute('aria-controls')).classList.remove('open');
    });

    // Toggle current
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      body.classList.add('open');
    }
  });
});


/* ── Scroll fade-in ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(
  '.helps-card, .review-card, .acc-item, .price-wrap, .fade-up, .contact-grid'
).forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

/* ── Reviews carousel ── */
const revSlider = document.querySelector('.reviews-slider');
if (revSlider) {
  const getCardWidth = () => {
    const card = revSlider.querySelector('.review-card');
    return card ? card.offsetWidth + 32 : 300;
  };
  document.querySelector('.rev-prev')?.addEventListener('click', () => {
    revSlider.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
  });
  document.querySelector('.rev-next')?.addEventListener('click', () => {
    revSlider.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
  });
}

/* ── Review expand/collapse ── */
document.querySelectorAll('.review-more-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = document.getElementById(btn.getAttribute('aria-controls'));
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    body.classList.toggle('collapsed', expanded);
    body.classList.toggle('expanded', !expanded);
    btn.setAttribute('aria-expanded', String(!expanded));
    btn.querySelector('span').textContent = expanded ? 'Číst více' : 'Méně';
  });
});

/* ── Cookie banner ── */
const cookieBanner = document.getElementById('cookie-banner');
const cookieOk     = document.getElementById('cookie-ok');
const cookieReject = document.getElementById('cookie-reject');

if (!localStorage.getItem('ck')) {
  cookieBanner.removeAttribute('hidden');
}

cookieOk.addEventListener('click', () => {
  localStorage.setItem('ck', 'accepted');
  cookieBanner.setAttribute('hidden', '');
});

cookieReject.addEventListener('click', () => {
  localStorage.setItem('ck', 'rejected');
  cookieBanner.setAttribute('hidden', '');
});
