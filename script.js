/* ============================================================
   MTP Studio - Portfolio Website
   script.js - All Interactivity
============================================================ */

"use strict";

// ============================================================
// PROJECT DATA
// ============================================================
const PROJECTS = [
  {
    id: 0,
    name: "Nusa-Hire",
    category: "Korporat",
    link: "https://nusahire-theta.vercel.app/",
    tech: "AI Recruitment",
    iconSvg:
      '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>',
    bg: "linear-gradient(160deg, #10002a 0%, #2D1060 60%, #7C3AED 100%)",
    color: "#7C3AED",
    longDesc:
      "Nusa-Hire adalah platform rekrutmen berbasis AI yang mencocokkan kandidat dengan lowongan secara otomatis. Proses seleksi jadi lebih cepat, transparan, dan bebas bias untuk perusahaan maupun pelamar.",
    features: [
      "Pencocokan kandidat dengan AI",
      "Lowongan kerja terstruktur",
      "Dashboard pelamar & perusahaan",
      "Profil kandidat terverifikasi",
      "Pencarian & filter cerdas",
      "Desain responsif di semua layar",
    ],
  },
  {
    id: 1,
    name: "KMB Library",
    category: "Pendidikan",
    link: "https://kmblibrary.vercel.app/",
    tech: "Web App",
    iconSvg:
      '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    bg: "linear-gradient(160deg, #1A0E00 0%, #713F12 60%, #F59E0B 100%)",
    color: "#F59E0B",
    longDesc:
      "KMB Library adalah platform literasi digital gratis buatan siswa SMK Cinta Kasih Tzu Chi. Menyediakan koleksi buku lengkap, sistem streak belajar, dan leaderboard pembaca untuk memajukan pendidikan Indonesia.",
    features: [
      "Koleksi buku gratis tanpa batas",
      "Katalog & pencarian cepat",
      "Sistem streak belajar harian",
      "Leaderboard pembaca teratas",
      "Halaman donasi & dukungan",
      "Akses bebas untuk semua siswa",
    ],
  },
  {
    id: 2,
    name: "Wibsqii",
    category: "AI",
    link: "https://wibsqi.vercel.app/",
    tech: "Agentic AI",
    iconSvg:
      '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
    bg: "linear-gradient(160deg, #00061A 0%, #0C2A6E 60%, #3B82F6 100%)",
    color: "#3B82F6",
    longDesc:
      "Wibsqii adalah platform agentic AI yang menjalankan agen otonom untuk membantu pengguna menyelesaikan tugas, riset, dan alur kerja kompleks hanya lewat satu antarmuka percakapan.",
    features: [
      "Agen AI otonom multi-tugas",
      "Antarmuka chat kontekstual",
      "Automasi alur kerja berulang",
      "Riwayat sesi & memori agen",
      "Integrasi tool eksternal",
      "Scalable di infrastruktur cloud",
    ],
  },
  {
    id: 3,
    name: "Siluman",
    category: "Sistem",
    link: "https://iforgorrrrrrgrr.github.io/Siluman/",
    tech: "Interactive Web",
    iconSvg:
      '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
    bg: "linear-gradient(160deg, #020604 0%, #052e16 55%, #4ADE80 100%)",
    color: "#4ADE80",
    longDesc:
      'Siluman adalah "Tes Keselarasan Manusia" — pengalaman web interaktif bergaya terminal diagnostik yang menggabungkan kuis, teka-teki audio-visual, sandi, dan misteri cerita dalam satu narasi sci-fi.',
    features: [
      "Kuis interaktif berjenjang",
      "Konsol diagnostik dengan perintah",
      "Modul kalibrasi visual (brightness/contrast)",
      "Analisis sinyal audio & frekuensi",
      "Teka-teki telemetri eksternal",
      "Laporan klasifikasi ending",
    ],
  },
  {
    id: 4,
    name: "Berjaya Gemilang Teknik",
    category: "E-Commerce",
    link: "https://berjayagemilangteknik.com/",
    tech: "WooCommerce",
    iconSvg:
      '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    bg: "linear-gradient(160deg, #1a0a00 0%, #7c2d12 60%, #F97316 100%)",
    color: "#F97316",
    longDesc:
      "Berjaya Gemilang Teknik adalah website resmi penyedia sparepart truk dan alat berat merk Howo Sinotruk, Shacman, Weichai, dan XCMG. Dilengkapi katalog produk, keranjang belanja, blog artikel, dan formulir kontak untuk melayani pelanggan di seluruh Indonesia.",
    features: [
      "Katalog sparepart truk & alat berat",
      "Keranjang belanja & checkout",
      "Blog artikel otomotif",
      "Form kontak & info WhatsApp",
      "Detail produk lengkap",
      "Desain responsif di semua layar",
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
  const canvas = $("#particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W,
    H,
    particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = canvas.parentElement.offsetHeight;
  }

  class Particle {
    constructor() {
      this.reset(true);
    }
    reset(init = false) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 10;
      this.r = Math.random() * 1.8 + 0.4;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.4 + 0.1);
      this.a = Math.random() * 0.5 + 0.1;
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
        const d = Math.sqrt(dx * dx + dy * dy);
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
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    drawConnections();
    requestAnimationFrame(loop);
  }

  window.addEventListener("resize", () => {
    resize();
  });
  resize();
  createParticles();
  loop();
}

// ============================================================
// 2. TYPING ANIMATION
// ============================================================
function initTyping() {
  const el = $("#typingText");
  if (!el) return;
  const words = ["Berkembang", "Maju Cepat", "Tumbuh Pesat", "Lebih Sukses"];
  let wi = 0,
    ci = 0,
    deleting = false;

  function type() {
    const word = words[wi];
    el.textContent = deleting
      ? word.substring(0, ci--)
      : word.substring(0, ci++);

    let delay = deleting ? 60 : 110;
    if (!deleting && ci === word.length + 1) {
      delay = 1800;
      deleting = true;
    }
    if (deleting && ci < 0) {
      deleting = false;
      wi = (wi + 1) % words.length;
      ci = 0;
      delay = 400;
    }

    setTimeout(type, delay);
  }
  setTimeout(type, 1200);
}

// ============================================================
// 3. NAVBAR - Interactive Magnetic Pill, Scroll Effects & Spy
// ============================================================
function initNavbar() {
  const navbar = $("#navbar");
  const hamburger = $("#hamburger");
  const navLinks = $("#navLinks");
  const indicator = $("#navIndicator");
  const progressBar = $("#navProgressBar");
  const sections = $$("section[id]");
  const links = $$(".nav-link");
  let isHoveringNav = false;
  let currentSection = "";

  // Move indicator to target link
  function moveToLink(link, instant = false) {
    if (!link || !indicator || window.innerWidth <= 768) {
      if (indicator) indicator.style.opacity = "0";
      return;
    }
    const containerRect = navLinks.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    const left = linkRect.left - containerRect.left;
    const width = linkRect.width;

    if (instant) {
      indicator.style.transition = "none";
      requestAnimationFrame(() => {
        indicator.style.transform = `translate(${left}px, -50%)`;
        indicator.style.width = `${width}px`;
        indicator.style.opacity = "1";
        requestAnimationFrame(() => {
          indicator.style.transition = "";
        });
      });
      return;
    }

    indicator.style.transform = `translate(${left}px, -50%)`;
    indicator.style.width = `${width}px`;
    indicator.style.opacity = "1";
  }

  // Hover animations on links
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      isHoveringNav = true;
      moveToLink(link);
    });
  });

  navLinks &&
    navLinks.addEventListener("mouseleave", () => {
      isHoveringNav = false;
      const activeLink = $(".nav-link.active");
      if (activeLink) {
        moveToLink(activeLink);
      } else {
        indicator && (indicator.style.opacity = "0");
      }
    });

  // Scroll effect: glass background + scroll progress bar + section spy
  function onScroll() {
    const scrollY = window.scrollY;

    // Navbar glass style on scroll
    navbar.classList.toggle("scrolled", scrollY > 30);

    // Update progress bar
    if (progressBar) {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
    }

    // Active Section Spy
    updateActiveLink();
  }

  function updateActiveLink() {
    let current = "";
    const scrollY = window.scrollY + 140;

    sections.forEach((sec) => {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });

    if (!current && sections.length > 0) {
      current = sections[0].id;
    }

    if (current !== currentSection) {
      currentSection = current;
      links.forEach((link) => {
        const isActive = link.dataset.section === current;
        link.classList.toggle("active", isActive);
        if (isActive && !isHoveringNav) {
          moveToLink(link);
        }
      });
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => {
    const activeLink = $(".nav-link.active");
    if (activeLink) moveToLink(activeLink, true);
  });

  // Hamburger Toggle
  hamburger &&
    hamburger.addEventListener("click", () => {
      const open = navLinks.classList.toggle("mobile-open");
      hamburger.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", open);
    });

  // Close mobile menu on link click
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("mobile-open");
      hamburger && hamburger.classList.remove("open");
      hamburger && hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // Initial call
  onScroll();
  setTimeout(() => {
    const activeLink = $(".nav-link.active") || links[0];
    if (activeLink) moveToLink(activeLink, true);
  }, 200);
}

// ============================================================
// 4. SCROLL REVEAL (Intersection Observer)
// ============================================================
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Stagger children if parent is a grid wrapper
          $$("[data-animate]", entry.target).forEach((child, i) => {
            setTimeout(() => child.classList.add("visible"), i * 80);
          });
        }
      });
    },
    { threshold: 0.12 },
  );

  $$("[data-animate]").forEach((el) => observer.observe(el));
}

// ============================================================
// 5. COUNTER ANIMATION (Stats)
// ============================================================
function initCounters() {
  const counters = $$(".stat-number");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const dur = 1800;
        const start = performance.now();

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
    },
    { threshold: 0.5 },
  );

  counters.forEach((el) => observer.observe(el));
}

// ============================================================
// 6. PORTFOLIO FILTER
// ============================================================
function initPortfolioFilter() {
  const btns = $$(".filter-btn");
  const cards = $$(".portfolio-card");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      cards.forEach((card, i) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.style.transitionDelay = match ? `${i * 40}ms` : "0ms";

        if (match) {
          card.classList.remove("hidden", "fade-out");
          requestAnimationFrame(() => card.classList.remove("fade-out"));
        } else {
          card.classList.add("fade-out");
          setTimeout(() => {
            if (btn.classList.contains("active")) {
              const stillMatch =
                btn.dataset.filter === "all" ||
                card.dataset.category === btn.dataset.filter;
              if (!stillMatch) card.classList.add("hidden");
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
  const overlay = $("#projectModal");
  const closeBtn = $("#modalClose");

  // Open modal from overlay buttons
  $$(".overlay-view-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(parseInt(btn.dataset.project, 10));
    });
  });

  // Also open on card click
  $$(".portfolio-card").forEach((card) => {
    card.addEventListener("click", () => {
      openModal(parseInt(card.dataset.project, 10));
    });
  });

  // Close
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // CTA inside modal closes modal
  $("#modalCTA") && $("#modalCTA").addEventListener("click", closeModal);
}

function openModal(idx) {
  const p = PROJECTS[idx];
  if (!p) return;

  // Preview area
  const previewWrap = $("#modalPreviewWrap");
  previewWrap.style.background = p.bg;
  previewWrap.innerHTML = `<div class="modal-preview-icon">${p.iconSvg}</div>`;

  // Tags
  const tagsWrap = $("#modalTagsWrap");
  tagsWrap.innerHTML = `
    <span class="tag cat-tag">${p.category}</span>
    <span class="tag tech-tag">${p.tech}</span>
  `;

  // Title & desc
  $("#modalTitle").textContent = p.name;
  $("#modalLongDesc").textContent = p.longDesc;

  // Features
  const featList = $("#modalFeaturesList");
  featList.innerHTML = p.features
    .map((f) => `<div class="modal-feature-item">${f}</div>`)
    .join("");

  // Visit link (opens the live website in a new tab)
  const cta = $("#modalCTA");
  let actions = $("#modalActions");
  if (!actions) {
    actions = document.createElement("div");
    actions.id = "modalActions";
    actions.style.cssText =
      "display:flex;flex-wrap:wrap;gap:12px;align-items:center;";
    cta.insertAdjacentElement("beforebegin", actions);
    actions.appendChild(cta);
  }
  let visit = $("#modalVisitLink");
  if (!visit) {
    visit = document.createElement("a");
    visit.id = "modalVisitLink";
    visit.className = "btn-secondary";
    actions.appendChild(visit);
  }
  if (p.link) {
    visit.style.display = "";
    visit.href = p.link;
    visit.target = "_blank";
    visit.rel = "noopener noreferrer";
    visit.textContent = "Kunjungi Website ↗";
  } else {
    visit.style.display = "none";
  }

  // Show
  $("#projectModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("#projectModal").classList.remove("open");
  document.body.style.overflow = "";
}

// Make closeModal globally accessible for inline onclick
window.closeModal = closeModal;

// ============================================================
// 8. TESTIMONIAL SLIDER
// ============================================================
function initSlider() {
  const track = $("#testimonialTrack");
  const dots = $$(".sdot");
  const prev = $("#sliderPrev");
  const next = $("#sliderNext");
  let current = 0;
  let autoPlay;
  const total = dots.length;

  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  prev &&
    prev.addEventListener("click", () => {
      goTo(current - 1);
      resetAuto();
    });
  next &&
    next.addEventListener("click", () => {
      goTo(current + 1);
      resetAuto();
    });
  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      goTo(i);
      resetAuto();
    }),
  );

  // Touch/swipe support
  let startX = 0;
  track &&
    track.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX;
      },
      { passive: true },
    );
  track &&
    track.addEventListener("touchend", (e) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        diff > 0 ? goTo(current + 1) : goTo(current - 1);
        resetAuto();
      }
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
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

// ============================================================
// 10. HERO VISUAL PARALLAX (subtle)
// ============================================================
function initParallax() {
  const visual = $(".hero-visual");
  if (!visual) return;
  window.addEventListener(
    "scroll",
    () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        visual.style.transform = `translateY(${scrolled * 0.06}px)`;
      }
    },
    { passive: true },
  );
}

// ============================================================
// 11. PRICING CAROUSEL (Smooth interactive scroll & buttons)
// ============================================================
function initPricingCarousel() {
  const track = $("#pricingTrack");
  const bar = $("#pricingProgressBar");
  const prevBtn = $("#pricingPrevBtn");
  const nextBtn = $("#pricingNextBtn");
  if (!track) return;

  function updateScrollState() {
    const max = track.scrollWidth - track.clientWidth;
    const current = track.scrollLeft;
    const p = max > 0 ? Math.min(1, Math.max(0, current / max)) : 0;

    if (bar) {
      bar.style.width = `${Math.max(12, p * 100)}%`;
    }

    if (prevBtn) {
      const isStart = current <= 5;
      prevBtn.disabled = isStart;
      prevBtn.classList.toggle("disabled", isStart);
    }
    if (nextBtn) {
      const isEnd = max <= 0 || current >= max - 5;
      nextBtn.disabled = isEnd;
      nextBtn.classList.toggle("disabled", isEnd);
    }
  }

  function getStep() {
    const firstCard = track.querySelector(".service-card");
    if (!firstCard) return 320;
    const gap = 20;
    return firstCard.offsetWidth + gap;
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -getStep(), behavior: "smooth" });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: getStep(), behavior: "smooth" });
    });
  }

  // Smooth mouse drag to scroll for desktop users
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let hasDragged = false;

  track.addEventListener("mousedown", (e) => {
    isDown = true;
    hasDragged = false;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.scrollBehavior = "auto";
    track.style.cursor = "grabbing";
    track.style.userSelect = "none";
  });

  const stopDragging = () => {
    if (!isDown) return;
    isDown = false;
    track.style.scrollBehavior = "smooth";
    track.style.cursor = "";
    track.style.userSelect = "";
    setTimeout(() => {
      hasDragged = false;
    }, 50);
  };

  track.addEventListener("mouseleave", stopDragging);
  track.addEventListener("mouseup", stopDragging);

  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    const x = e.pageX - track.offsetLeft;
    const walk = x - startX;
    if (Math.abs(walk) > 6) {
      hasDragged = true;
    }
    track.scrollLeft = scrollLeft - walk;
  });

  // Prevent accidental link clicks when dragging
  track.addEventListener(
    "click",
    (e) => {
      if (hasDragged) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    true
  );

  track.addEventListener("scroll", updateScrollState, { passive: true });
  window.addEventListener("resize", updateScrollState, { passive: true });

  // Initial check
  updateScrollState();
}

// ============================================================
// INIT ALL
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
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
  initPricingCarousel();

  // Animate hero elements in on load
  $$("[data-animate-hero]").forEach((el, i) => {
    el.style.animationDelay = `${0.2 + i * 0.15}s`;
  });
});
