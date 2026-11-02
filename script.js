/* ============================================================
   MTP Studio - Portfolio Website
   script.js - All Interactivity
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
    iconSvg: '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    bg: 'linear-gradient(160deg, #10002a 0%, #2D1060 60%, #7C3AED 100%)',
    color: '#7C3AED',
    longDesc: 'EShop Premium adalah solusi e-commerce lengkap untuk bisnis retail modern. Dibangun dengan antarmuka yang intuitif dan desain visual yang memukau, website ini dirancang untuk meningkatkan konversi pengunjung menjadi pembeli setia.',
    features: [
      'Katalog produk dengan filter & search',
      'Keranjang belanja & checkout',
      'Galeri foto produk interaktif',
      'Halaman promo & penawaran spesial',
      'Integrasi WhatsApp order',
      'Desain mobile-first responsif',
    ],
  },
  {
    id: 1,
    name: 'Sakura Resto',
    category: 'F&B',
    tech: 'HTML / CSS / JavaScript',
    iconSvg: '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
    bg: 'linear-gradient(160deg, #1a0008 0%, #5B0020 60%, #E11D48 100%)',
    color: '#E11D48',
    longDesc: 'Sakura Resto hadir dengan landing page yang menggugah selera. Sistem reservasi online, menu interaktif dengan animasi halus, dan galeri foto makanan berkualitas tinggi membuat restoran ini tampil premium dan profesional.',
    features: [
      'Menu interaktif dengan kategori',
      'Sistem reservasi online praktis',
      'Galeri foto kuliner berkualitas tinggi',
      'Peta lokasi & jam operasional terintegrasi',
      'Tombol pesan langsung via WhatsApp',
      'Tampilan optimal di semua layar',
    ],
  },
  {
    id: 2,
    name: 'FitnessPro Club',
    category: 'UMKM / Gym',
    tech: 'HTML / CSS / JavaScript',
    iconSvg: '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12"/></svg>',
    bg: 'linear-gradient(160deg, #001208 0%, #064E3B 60%, #10B981 100%)',
    color: '#10B981',
    longDesc: 'FitnessPro Club memiliki website gym yang dinamis dan berenergi. Jadwal kelas mingguan, paket membership yang jelas, galeri fasilitas lengkap, dan formulir pendaftaran online menjadikan gym ini tampak terpercaya dan menarik member baru.',
    features: [
      'Jadwal kelas mingguan interaktif',
      'Paket membership & transparansi harga',
      'Galeri fasilitas gym modern',
      'Form pendaftaran member online',
      'Section promo & benefit member',
      'Performa loading super cepat',
    ],
  },
  {
    id: 3,
    name: 'AgencyX Creative',
    category: 'Korporat',
    tech: 'HTML / CSS / JavaScript',
    iconSvg: '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    bg: 'linear-gradient(160deg, #00061A 0%, #0C2A6E 60%, #3B82F6 100%)',
    color: '#3B82F6',
    longDesc: 'AgencyX Creative adalah company profile agensi kreatif yang menonjolkan portofolio dan solusi bisnis secara visual. Desain minimalis premium dengan animasi halus mencerminkan reputasi agensi yang berkelas tinggi.',
    features: [
      'Portofolio showcase interaktif',
      'Detail layanan & paket kerja',
      'Profil tim & kompetensi utama',
      'Statistik pencapaian agensi',
      'Studi kasus proyek klien',
      'Formulir brief kerja cepat',
    ],
  },
  {
    id: 4,
    name: 'EduLearn Platform',
    category: 'Pendidikan',
    tech: 'HTML / CSS / JavaScript',
    iconSvg: '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    bg: 'linear-gradient(160deg, #1A0E00 0%, #713F12 60%, #F59E0B 100%)',
    color: '#F59E0B',
    longDesc: 'EduLearn Platform menawarkan landing page edukasi online yang modern, ramah pengguna, dan informatif. Katalog kursus terstruktur, profil mentor berpengalaman, dan alur pendaftaran yang jelas memperkuat kredibilitas institusi.',
    features: [
      'Katalog kursus dengan filter teratur',
      'Profil mentor & instruktur ahli',
      'Ulasan & rating alumni terverifikasi',
      'Data capaian pembelajaran',
      'FAQ informasi perkuliahan',
      'Tombol pendaftaran yang jelas',
    ],
  },
  {
    id: 5,
    name: 'PropertyX Realty',
    category: 'Properti',
    tech: 'HTML / CSS / JavaScript',
    iconSvg: '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    bg: 'linear-gradient(160deg, #00121A 0%, #0A4A5A 60%, #14B8A6 100%)',
    color: '#14B8A6',
    longDesc: 'PropertyX Realty menampilkan listing properti premium dengan tata letak bersih dan mewah. Fitur pencarian presisi, galeri gambar resolusi tinggi, serta spesifikasi detail menjadikan platform ini media pemasaran properti yang sangat efektif.',
    features: [
      'Listing properti dengan filter lokasi & tipe',
      'Galeri foto definisi tinggi',
      'Peta lokasi & fasilitas terdekat',
      'Formulir kontak langsung ke agen',
      'Informasi simulasi cicilan',
      'Tampilan eksklusif dan profesional',
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
  const words = ['Berkembang', 'Maju Cepat', 'Tumbuh Pesat', 'Lebih Sukses'];
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
// 3. NAVBAR - Interactive Magnetic Pill, Scroll Effects & Spy
// ============================================================
function initNavbar() {
  const navbar        = $('#navbar');
  const hamburger     = $('#hamburger');
  const navLinks      = $('#navLinks');
  const indicator     = $('#navIndicator');
  const progressBar   = $('#navProgressBar');
  const sections      = $$('section[id]');
  const links         = $$('.nav-link');
  let isHoveringNav   = false;
  let currentSection  = '';

  // Move indicator to target link
  function moveToLink(link, instant = false) {
    if (!link || !indicator || window.innerWidth <= 768) {
      if (indicator) indicator.style.opacity = '0';
      return;
    }
    const containerRect = navLinks.getBoundingClientRect();
    const linkRect      = link.getBoundingClientRect();

    const left  = linkRect.left - containerRect.left;
    const width = linkRect.width;

    if (instant) {
      indicator.style.transition = 'none';
      requestAnimationFrame(() => {
        indicator.style.transform = `translate(${left}px, -50%)`;
        indicator.style.width = `${width}px` ;
        indicator.style.opacity = '1';
        requestAnimationFrame(() => {
          indicator.style.transition = '';
        });
      });
      return;
    }

    indicator.style.transform = `translate(${left}px, -50%)`;
    indicator.style.width = `${width}px`;
    indicator.style.opacity = '1';
  }

  // Hover animations on links
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      isHoveringNav = true;
      moveToLink(link);
    });
  });

  navLinks && navLinks.addEventListener('mouseleave', () => {
    isHoveringNav = false;
    const activeLink = $('.nav-link.active');
    if (activeLink) {
      moveToLink(activeLink);
    } else {
      indicator && (indicator.style.opacity = '0');
    }
  });

  // Scroll effect: glass background + scroll progress bar + section spy
  function onScroll() {
    const scrollY = window.scrollY;

    // Navbar glass style on scroll
    navbar.classList.toggle('scrolled', scrollY > 30);

    // Update progress bar
    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
    }

    // Active Section Spy
    updateActiveLink();
  }

  function updateActiveLink() {
    let current = '';
    const scrollY = window.scrollY + 140;

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });

    if (!current && sections.length > 0) {
      current = sections[0].id;
    }

    if (current !== currentSection) {
      currentSection = current;
      links.forEach(link => {
        const isActive = link.dataset.section === current;
        link.classList.toggle('active', isActive);
        if (isActive && !isHoveringNav) {
          moveToLink(link);
        }
      });
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    const activeLink = $('.nav-link.active');
    if (activeLink) moveToLink(activeLink, true);
  });

  // Hamburger Toggle
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
      hamburger && hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Initial call
  onScroll();
  setTimeout(() => {
    const activeLink = $('.nav-link.active') || links[0];
    if (activeLink) moveToLink(activeLink, true);
  }, 200);
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
  previewWrap.innerHTML = `<div class="modal-preview-icon">${p.iconSvg}</div>`;

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
