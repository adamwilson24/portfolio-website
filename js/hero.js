/* Home page hero: orbiting particle canvas + typewriter text.
   Ported 1:1 from the React HeroCanvas.jsx and Hero.jsx components. */
(function () {
  "use strict";

  /* ---------- Particle canvas ---------- */
  const COLORS = ["#7c3aed", "#a855f7", "#ec4899", "#06b6d4", "#3b82f6", "#8b5cf6", "#f472b6", "#22d3ee"];
  const canvas = document.querySelector(".hero-canvas");

  if (canvas) {
    const ctx = canvas.getContext("2d");
    let t = 0;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const N = 180;
    const particles = Array.from({ length: N }, (_, i) => ({
      index: i,
      angle: (i / N) * Math.PI * 2,
      radius: 60 + Math.random() * 180,
      speed: 0.003 + Math.random() * 0.008,
      spiralSpeed: 0.0002 + Math.random() * 0.0005,
      z: Math.random() * 2 - 1,
      zSpeed: (Math.random() - 0.5) * 0.005,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 1 + Math.random() * 2.5,
      opacity: 0.4 + Math.random() * 0.6,
      trail: [],
      trailLen: 12 + Math.floor(Math.random() * 20),
    }));

    const rings = [
      { r: 180, speed: 0.003, color: "#7c3aed", angle: 0, tilt: 0, tiltSpeed: 0.002 },
      { r: 220, speed: -0.002, color: "#06b6d4", angle: 1, tilt: 1, tiltSpeed: -0.0015 },
      { r: 140, speed: 0.005, color: "#ec4899", angle: 2, tilt: 0.5, tiltSpeed: 0.003 },
    ];

    // New: the particle core drifts gently toward the cursor.
    let targetX = 0, targetY = 0, offX = 0, offY = 0;
    const hero = canvas.parentElement;
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      targetX = (e.clientX - r.left - r.width / 2) * 0.08;
      targetY = (e.clientY - r.top - r.height / 2) * 0.08;
    });
    hero.addEventListener("pointerleave", () => { targetX = 0; targetY = 0; });

    function loop() {
      requestAnimationFrame(loop);
      t++;
      ctx.fillStyle = "rgba(10,10,26,0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      offX += (targetX - offX) * 0.04;
      offY += (targetY - offY) * 0.04;
      const cx = canvas.width / 2 + offX;
      const cy = canvas.height / 2 + offY;

      rings.forEach((ring) => {
        ring.angle += ring.speed;
        ring.tilt += ring.tiltSpeed;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ring.tilt);
        ctx.beginPath();
        ctx.ellipse(0, 0, ring.r, ring.r * 0.35, ring.angle, 0, Math.PI * 2);
        ctx.strokeStyle = ring.color + "40";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      });

      particles.forEach((p) => {
        p.angle += p.speed;
        p.radius += Math.sin(t * p.spiralSpeed + p.index) * 0.5;
        p.z += p.zSpeed;
        if (p.z > 1 || p.z < -1) p.zSpeed *= -1;
        if (p.radius > 280 || p.radius < 20) p.speed *= -1;

        const perspective = 0.5 + p.z * 0.5;
        const x = cx + Math.cos(p.angle) * p.radius * perspective;
        const y = cy + Math.sin(p.angle * 0.7 + t * 0.0003) * p.radius * 0.6 * perspective;
        p.trail.unshift({ x, y, size: p.size * perspective });
        if (p.trail.length > p.trailLen) p.trail.pop();

        for (let i = 0; i < p.trail.length - 1; i++) {
          const alpha = (1 - i / p.trail.length) * p.opacity;
          const sz = p.trail[i].size * (1 - i / p.trail.length);
          ctx.beginPath();
          ctx.arc(p.trail[i].x, p.trail[i].y, Math.max(0.1, sz), 0, Math.PI * 2);
          ctx.fillStyle = p.color + Math.floor(alpha * 255).toString(16).padStart(2, "0");
          ctx.fill();
        }
      });
    }
    loop();
  }

  /* ---------- Typewriter ---------- */
  const PHRASES = [
    "I build web apps.",
    "I design experiences.",
    "I build AI agents.",
    "I solve real problems.",
    "I ship real things.",
  ];
  const TYPE_SPEED = 60;
  const DELETE_SPEED = 35;
  const PAUSE = 1800;

  const out = document.querySelector(".typewriter-text");
  if (out) {
    let phrase = 0;
    let text = "";
    let typing = true;

    function tick() {
      const current = PHRASES[phrase];
      if (typing) {
        if (text.length < current.length) {
          text = current.slice(0, text.length + 1);
          out.textContent = text;
          setTimeout(tick, TYPE_SPEED);
        } else {
          typing = false;
          setTimeout(tick, PAUSE);
        }
      } else if (text.length > 0) {
        text = text.slice(0, -1);
        out.textContent = text;
        setTimeout(tick, DELETE_SPEED);
      } else {
        phrase = (phrase + 1) % PHRASES.length;
        typing = true;
        setTimeout(tick, TYPE_SPEED);
      }
    }
    tick();
  }
})();
