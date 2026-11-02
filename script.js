/* ============================================================
   MTP Studio — Portfolio Website
   script.js — All Interactivity
============================================================ */

'use strict';

// ============================================================
// PROJECT DATA
// ============================================================
const PROJECTS = [
  {
    id: 0,
    name: 'EShop Premium',
    category: 'E-Commerce',
    tech: 'HTML / CSS / JavaScript',
    emoji: '🛍️',
    bg: 'linear-gradient(160deg, #10002a 0%, #2D1060 60%, #7C3AED 100%)',
    color: '#7C3AED',
    longDesc: 'EShop Premium adalah solusi e-commerce lengkap untuk bisnis retail modern. Dibangun dengan antarmuka yang intuitif dan desain visual yang memukau, website ini dirancang untuk meningkatkan konversi pengunjung menjadi pembeli setia.',
    features: [
      'Katalog produk dengan filter & search',
      'Keranjang belanja & checkout',
      'Galeri foto produk zoom-able',
      'Halaman promo & diskon',
      'Integrasi WhatsApp order',
      'Desain mobile-first responsif',
    ],
  },
  {
    id: 1,
    name: 'Sakura Resto',
    category: 'F&B',
    tech: 'HTML / CSS / JavaScript',
    emoji: '🍜',
    bg: 'linear-gradient(160deg, #1a0008 0%, #5B0020 60%, #E11D48 100%)',
    color: '#E11D48',
    longDesc: 'Sakura Resto hadir dengan landing page yang menggugah selera. Sistem reservasi online, menu interaktif dengan animasi halus, dan galeri foto makanan berkualitas tinggi membuat restoran ini tampil premium dan profesional.',
    features: [
      'Menu interaktif dengan kategori',
      'Sistem reservasi online',
      'Galeri foto makanan premium',
      'Peta lokasi & jam operasional',
      'Tombol pesan via WhatsApp',
      'Responsif di semua perangkat',
    ],
  },
  {
    id: 2,
    name: 'FitnessPro Club',
    category: 'UMKM / Gym',
    tech: 'HTML / CSS / JavaScript',
    emoji: '💪',
    bg: 'linear-gradient(160deg, #001208 0%, #064E3B 60%, #10B981 100%)',
    color: '#10B981',
    longDesc: 'FitnessPro Club memiliki website gym yang powerful dan energik. Jadwal kelas mingguan, paket membership yang jelas, galeri fasilitas, dan form pendaftaran online membuat gym ini tampak profesional dan menarik member baru.',
    features: [
      'Jadwal kelas mingguan interaktif',
      'Paket membership & harga',
      'Galeri fasilitas gym',
      'Form pendaftaran member online',
      'Countdown promo & diskon',
      'Video hero section',
    ],
  },
  {
    id: 3,
    name: 'AgencyX Creative',
    category: 'Korporat',
    tech: 'HTML / CSS / JavaScript',
    emoji: '🏢',
    bg: 'linear-gradient(160deg, #00061A 0%, #0C2A6E 60%, #3B82F6 100%)',
    color: '#3B82F6',
    longDesc: 'AgencyX Creative adalah company profile agensi periklanan yang menonjolkan portofolio dan layanan secara visual. Desain minimalis premium dengan animasi scroll yang elegan mencerminkan identitas agensi yang profesional.',
    features: [
      'Portfolio grid dengan lightbox',
      'Halaman layanan detail',
      'Profil tim & keahlian',
      'Counter statistik animasi',
      'Blog & case study',
      'Formulir kontak interaktif',
    ],
  },
  {
    id: 4,
    name: 'EduLearn Platform',
    category: 'Pendidikan',
    tech: 'HTML / CSS / JavaScript',
    emoji: '📚',
    bg: 'linear-gradient(160deg, #1A0E00 0%, #713F12 60%, #F59E0B 100%)',
    color: '#F59E0B',
    longDesc: 'EduLearn Platform menawarkan landing page platform edukasi online yang modern dan informatif. Katalog kursus lengkap, profil instruktur, testimoni murid, dan CTA yang kuat membuat platform ini tampak terpercaya dan profesional.',
    features: [
      'Katalog kursus dengan filter',
      'Profil instruktur berpengalaman',
      'Testimoni & rating murid',
      'Statistik platform (murid, kursus)',
      'FAQ accordion interaktif',
      'CTA pendaftaran yang kuat',
    ],
  },
  {
    id: 5,
    name: 'PropertyX Realty',
    category: 'Properti',
    tech: 'HTML / CSS / JavaScript',
    emoji: '🏡',
    bg: 'linear-gradient(160deg, #00121A 0%, #0A4A5A 60%, #14B8A6 100%)',
    color: '#14B8A6',
    longDesc: 'PropertyX Realty menampilkan listing properti premium dengan UI yang bersih dan elegan. Fitur pencarian canggih, galeri foto HD, dan informasi properti yang lengkap menjadikan website ini sebagai alat pemasaran properti yang efektif.',
    features: [
      'Listing properti dengan filter',
      'Galeri foto HD per properti',
      'Peta interaktif lokasi',
      'Form inquiry kontak agen',
      'Kalkulator cicilan KPR',
      'Virtual tour 360° ready',
    ],
  },
];

// ============================================================
// UTILITY
// ============================================================
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ============================================================
// 1. PARTICLE CANVAS BACKGROUND
// ============================================================
function initParticles() {
  const canvas = $('#particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = canvas.parentElement.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + 10;
      this.r  = Math.random() * 1.8 + 0.4;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.4 + 0.1);
      this.a  = Math.random() * 0.5 + 0.1;
      this.da = (Math.random() - 0.5) * 0.003;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.a += this.da;
      if (this.a <= 0.05 || this.a >= 0.7) this.da *= -1;
      if (this.y < -10) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56,189,248,${this.a})`;
      ctx.fill();
    }
  }

  function createParticles(n = 90) {
    particles = Array.from({ length: n }, () => new Particle());
  }

  function drawConnections() {
    const maxDist = 100;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < maxDist) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(56,189,248,${0.06 * (1 - d / maxDist)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', () => { resize(); });
  resize();
  createParticles();
  loop();
}

// ============================================================
// 2. TYPING ANIMATION
// ============================================================
function initTyping() {
  const el = $('#typingText');
  if (!el) return;
  const words = ['Berkembang ✦', 'Bersinar ✦', 'Tumbuh ✦', 'Sukses ✦'];
  let wi = 0, ci = 0, deleting = false;

  function type() {
    const word = words[wi];
    el.textContent = deleting ? word.substring(0, ci--) : word.substring(0, ci++);

    let delay = deleting ? 60 : 110;
    if (!deleting && ci === word.length + 1) { delay = 1800; deleting = true; }
    if (deleting && ci < 0)  { deleting = false; wi = (wi + 1) % words.length; ci = 0; delay = 400; }

    setTimeout(type, delay);
  }
  setTimeout(type, 1200);
}

// ============================================================
// 3. NAVBAR — scroll effect + active link
// ============================================================
function initNavbar() {
  const navbar    = $('#navbar');
  const hamburger = $('#hamburger');
  const navLinks  = $('#navLinks');
  const sections  = $$('section[id]');
  const links     = $$('.nav-link');

  // Scroll: glass effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveLink();
  }, { passive: true });

  // Hamburger
  hamburger && hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('mobile-open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close mobile menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      hamburger && hamburger.classList.remove('open');
    });
  });

  function updateActiveLink() {
    let current = '';
    const scrollY = window.scrollY + 120;
    sections.forEach(sec => {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });
    links.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }
}

// ============================================================
// 4. SCROLL REVEAL (Intersection Observer)
// ============================================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stagger children if parent is a grid wrapper
        $$('[data-animate]', entry.target).forEach((child, i) => {
          setTimeout(() => child.classList.add('visible'), i * 80);
        });
      }
    });
  }, { threshold: 0.12 });

  $$('[data-animate]').forEach(el => observer.observe(el));
}

// ============================================================
// 5. COUNTER ANIMATION (Stats)
// ============================================================
function initCounters() {
  const counters = $$('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const dur    = 1800;
      const start  = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / dur, 1);
        // Ease out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// ============================================================
// 6. PORTFOLIO FILTER
// ============================================================
function initPortfolioFilter() {
  const btns  = $$('.filter-btn');
  const cards = $$('.portfolio-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach((card, i) => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.transitionDelay = match ? `${i * 40}ms` : '0ms';

        if (match) {
          card.classList.remove('hidden', 'fade-out');
          requestAnimationFrame(() => card.classList.remove('fade-out'));
        } else {
          card.classList.add('fade-out');
          setTimeout(() => {
            if (btn.classList.contains('active')) {
              const stillMatch = btn.dataset.filter === 'all' || card.dataset.category === btn.dataset.filter;
              if (!stillMatch) card.classList.add('hidden');
            }
          }, 300);
        }
      });
    });
  });
}

// ============================================================
// 7. PROJECT MODAL
// ============================================================
function initModal() {
  const overlay  = $('#projectModal');
  const closeBtn = $('#modalClose');

  // Open modal from overlay buttons
  $$('.overlay-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(parseInt(btn.dataset.project, 10));
    });
  });

  // Also open on card click
  $$('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
      openModal(parseInt(card.dataset.project, 10));
    });
  });

  // Close
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // CTA inside modal closes modal
  $('#modalCTA') && $('#modalCTA').addEventListener('click', closeModal);
}

function openModal(idx) {
  const p = PROJECTS[idx];
  if (!p) return;

  // Preview area
  const previewWrap = $('#modalPreviewWrap');
  previewWrap.style.background = p.bg;
  previewWrap.innerHTML = `<span style="filter:drop-shadow(0 0 20px rgba(255,255,255,0.3))">${p.emoji}</span>`;

  // Tags
  const tagsWrap = $('#modalTagsWrap');
  tagsWrap.innerHTML = `
    <span class="tag cat-tag">${p.category}</span>
    <span class="tag tech-tag">${p.tech}</span>
  `;

  // Title & desc
  $('#modalTitle').textContent = p.name;
  $('#modalLongDesc').textContent = p.longDesc;

  // Features
  const featList = $('#modalFeaturesList');
  featList.innerHTML = p.features
    .map(f => `<div class="modal-feature-item">${f}</div>`)
    .join('');

  // Show
  $('#projectModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('#projectModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Make closeModal globally accessible for inline onclick
window.closeModal = closeModal;

// ============================================================
// 8. TESTIMONIAL SLIDER
// ============================================================
function initSlider() {
  const track  = $('#testimonialTrack');
  const dots   = $$('.sdot');
  const prev   = $('#sliderPrev');
  const next   = $('#sliderNext');
  let current  = 0;
  let autoPlay;
  const total  = dots.length;

  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  prev && prev.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  next && next.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetAuto(); }));

  // Touch/swipe support
  let startX = 0;
  track && track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track && track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? goTo(current + 1) : goTo(current - 1); resetAuto(); }
  });

  function resetAuto() {
    clearInterval(autoPlay);
    autoPlay = setInterval(() => goTo(current + 1), 5000);
  }

  resetAuto();
}

// ============================================================
// 9. SMOOTH SCROLL for anchor links
// ============================================================
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id  = a.getAttribute('href').slice(1);
      const el  = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// ============================================================
// 10. HERO VISUAL PARALLAX (subtle)
// ============================================================
function initParallax() {
  const visual = $('.hero-visual');
  if (!visual) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      visual.style.transform = `translateY(${scrolled * 0.06}px)`;
    }
  }, { passive: true });
}

// ============================================================
// INIT ALL
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initTyping();
  initNavbar();
  initScrollReveal();
  initCounters();
  initPortfolioFilter();
  initModal();
  initSlider();
  initSmoothScroll();
  initParallax();

  // Animate hero elements in on load
  $$('[data-animate-hero]').forEach((el, i) => {
    el.style.animationDelay = `${0.2 + i * 0.15}s`;
  });
});
