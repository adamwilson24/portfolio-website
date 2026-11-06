/* Shared behavior for every page:
   - mobile nav toggle
   - brand glitch easter egg (click the name 5 times)
   - scroll progress bar
   - reveal-on-scroll animations
   - cursor spotlight on cards
   - Konami code easter egg
*/
(function () {
  "use strict";

  /* ---------- Mobile nav ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- Brand glitch (5 clicks) ---------- */
  const GLITCH_NAMES = ["h4x0r", "???", "👾 ???", "A̷d̸a̷m̸", "[ REDACTED ]", "error404"];
  const brand = document.querySelector(".brand");
  if (brand) {
    let clicks = 0;
    let glitching = false;
    brand.addEventListener("click", () => {
      if (glitching) return;
      clicks += 1;
      if (clicks < 5) return;
      clicks = 0;
      glitching = true;
      brand.classList.add("glitch-text");
      let i = 0;
      const iv = setInterval(() => {
        brand.textContent = GLITCH_NAMES[i % GLITCH_NAMES.length];
        i++;
      }, 120);
      setTimeout(() => {
        clearInterval(iv);
        brand.textContent = "Adam Wilson";
        brand.classList.remove("glitch-text");
        glitching = false;
      }, 2800);
    });
  }

  /* ---------- Scroll progress ---------- */
  const bar = document.querySelector(".scroll-progress");
  if (bar) {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  revealEls.forEach((el) => {
    el.classList.add(el.dataset.reveal === "left" ? "reveal-left" : "reveal-up");
    if (el.dataset.delay) el.style.setProperty("--delay", el.dataset.delay + "s");
  });
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Cursor spotlight on cards ---------- */
  document.addEventListener("pointermove", (e) => {
    if (document.body.classList.contains("modal-open")) return;
    const card = e.target.closest && e.target.closest(".spotlight");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* ---------- Konami code: confetti ---------- */
  const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  const EMOJI = ["💻", "🎨", "🚀", "⚡", "💜", "✨", "🤖"];
  let pos = 0;
  window.addEventListener("keydown", (e) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = key === KONAMI[pos] ? pos + 1 : key === KONAMI[0] ? 1 : 0;
    if (pos === KONAMI.length) {
      pos = 0;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      for (let i = 0; i < 36; i++) {
        const s = document.createElement("span");
        s.className = "konami-burst";
        s.textContent = EMOJI[i % EMOJI.length];
        const a = Math.random() * Math.PI * 2;
        const d = 160 + Math.random() * 260;
        s.style.left = cx + "px";
        s.style.top = cy + "px";
        s.style.setProperty("--dx", Math.cos(a) * d + "px");
        s.style.setProperty("--dy", Math.sin(a) * d + "px");
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 1300);
      }
    }
  });
})();


/* ---------- What I Do: floating skills Venn (home) ---------- */
(function () {
  "use strict";
  const root = document.querySelector("[data-skills-venn]");
  if (!root) return;
  const field = root.querySelector(".sv-field");
  const blobs = [...root.querySelectorAll(".blob")];
  const chips = [...root.querySelectorAll(".sk-chip, .sv-core")];

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { root.classList.add("is-visible"); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(root);
  } else root.classList.add("is-visible");

  // Highlight: hovering a chip lights up the circles it belongs to;
  // hovering a circle (or a pillar card below) lights up every skill in it.
  function focus(sets, onlySet) {
    root.classList.add("focusing");
    blobs.forEach((b) => b.classList.toggle("on", sets.includes(b.dataset.set)));
    chips.forEach((c) => {
      const cs = c.dataset.sets.split(" ");
      const on = onlySet ? cs.includes(onlySet) : cs.length === sets.length && sets.every((s) => cs.includes(s));
      c.classList.toggle("on", on);
    });
  }
  function clear() {
    root.classList.remove("focusing");
    [...blobs, ...chips].forEach((el) => el.classList.remove("on"));
  }

  chips.forEach((c) => {
    c.addEventListener("mouseenter", () => focus(c.dataset.sets.split(" ")));
    c.addEventListener("mouseleave", clear);
  });
  blobs.forEach((b) => {
    b.addEventListener("mouseenter", () => focus([b.dataset.set], b.dataset.set));
    b.addEventListener("mouseleave", clear);
  });
  document.querySelectorAll(".pillar[data-set]").forEach((p) => {
    p.addEventListener("mouseenter", () => focus([p.dataset.set], p.dataset.set));
    p.addEventListener("mouseleave", clear);
  });

  // Gentle 3D tilt of the whole field toward the cursor.
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) {
    root.addEventListener("pointermove", (e) => {
      const r = root.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      field.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    });
    root.addEventListener("pointerleave", () => (field.style.transform = ""));
  }
})();


/* ---------- About page: click a photo to enlarge ---------- */
(function () {
  "use strict";
  const box = document.getElementById("lightbox");
  if (!box) return;
  const img = box.querySelector("img");
  const cap = box.querySelector("figcaption");
  let last = null;

  function open(print) {
    last = print;
    const src = print.querySelector("img");
    img.src = src.src;
    img.alt = src.alt;
    cap.textContent = print.querySelector("figcaption").textContent;
    box.hidden = false;
    document.body.classList.add("modal-open");
    box.querySelector(".lightbox-close").focus();
  }
  function close() {
    box.hidden = true;
    document.body.classList.remove("modal-open");
    if (last) last.focus();
  }

  document.querySelectorAll(".pile .print").forEach((p) => {
    p.addEventListener("click", () => open(p));
    p.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(p); }
    });
  });
  box.addEventListener("click", (e) => { if (e.target === box || e.target.closest(".lightbox-close")) close(); });
  window.addEventListener("keydown", (e) => { if (e.key === "Escape" && !box.hidden) close(); });
})();

/* ---------- About page: headshot tilts toward the cursor ---------- */
(function () {
  "use strict";
  const card = document.querySelector("[data-tilt]");
  if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const wrap = card.parentElement;
  wrap.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    card.classList.add("tilting");
    card.style.transform = `rotateY(${(x - 0.5) * 16}deg) rotateX(${(0.5 - y) * 16}deg)`;
    card.style.setProperty("--sx", x * 100 + "%");
    card.style.setProperty("--sy", y * 100 + "%");
  });
  wrap.addEventListener("pointerleave", () => {
    card.style.transform = "";
    card.classList.remove("tilting");
  });
})();

/* ---------- About page: sections glow and photos deal in on arrival ---------- */
(function () {
  "use strict";
  const life = document.querySelector("[data-life]");
  if (!life) return;
  const chapters = life.querySelectorAll(".chapter");
  if (!("IntersectionObserver" in window)) {
    chapters.forEach((c) => c.classList.add("in-view", "dealt"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in-view");
      // after the deal-in finishes, drop the stagger so hovers respond instantly
      setTimeout(() => e.target.classList.add("dealt"), 1300);
      io.unobserve(e.target);
    });
  }, { threshold: 0.25 });
  chapters.forEach((c) => io.observe(c));
})();

/* ---------- Home: Under Armour photo carousel ---------- */
(function () {
  "use strict";
  document.querySelectorAll("[data-carousel]").forEach((root) => {
    const track = root.querySelector(".uc-track");
    const slides = [...root.querySelectorAll(".uc-slide")];
    const dots = [...root.querySelectorAll(".uc-dot")];
    const caption = root.querySelector(".uc-caption");
    const count = root.querySelector(".uc-count");
    const viewport = root.querySelector(".uc-viewport");
    let i = 0;

    function go(n) {
      i = (n + slides.length) % slides.length;
      track.style.transform = `translateX(${-i * 100}%)`;
      slides.forEach((s, k) => {
        s.classList.toggle("active", k === i);
        s.setAttribute("aria-hidden", String(k !== i));
      });
      dots.forEach((d, k) => d.setAttribute("aria-current", String(k === i)));
      count.textContent = `${i + 1} / ${slides.length}`;
      caption.textContent = slides[i].dataset.caption;
      caption.style.animation = "none"; void caption.offsetWidth; caption.style.animation = "";
      // warm up the next photo
      const next = slides[(i + 1) % slides.length].querySelector("img");
      if (next.loading === "lazy") next.loading = "eager";
    }

    root.querySelector(".uc-prev").addEventListener("click", () => go(i - 1));
    root.querySelector(".uc-next").addEventListener("click", () => go(i + 1));
    dots.forEach((d, k) => d.addEventListener("click", () => go(k)));
    root.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); go(i - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); go(i + 1); }
    });

    // swipe / drag
    let startX = null, dx = 0;
    viewport.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".uc-btn")) return;
      startX = e.clientX; dx = 0;
      track.classList.add("dragging");
      viewport.setPointerCapture(e.pointerId);
    });
    viewport.addEventListener("pointermove", (e) => {
      if (startX === null) return;
      dx = e.clientX - startX;
      track.style.transform = `translateX(calc(${-i * 100}% + ${dx}px))`;
    });
    const end = () => {
      if (startX === null) return;
      track.classList.remove("dragging");
      const w = viewport.offsetWidth;
      if (Math.abs(dx) > w * 0.15) go(i + (dx < 0 ? 1 : -1));
      else go(i);
      startX = null;
    };
    viewport.addEventListener("dragstart", (e) => e.preventDefault());
    viewport.addEventListener("pointerup", end);
    viewport.addEventListener("pointercancel", end);

    go(0);
  });
})();
