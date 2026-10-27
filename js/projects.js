/* Projects page: card grid + detail modal.
   To add a project, add an object to PROJECTS — the page builds itself. */
(function () {
  "use strict";

  const IMG = "assets/images/";

  const PROJECTS = [
    {
      title: "Shop the Squad",
      tagline: "Turning Athlete Social Posts Into a Shoppable Page",
      bannerSrc: IMG + "shop-the-squad-banner.svg",
      bannerAlt: "Shop the Squad landing page concept with athlete posts paired with products",
      tags: ["UI Design", "E-Commerce", "Under Armour", "Case Study"],
      shortDesc: "A new UA.com page that pairs each athlete post with the products in it, turning a six-step path into one place.",
      longDesc: [
        "During my internship this past summer at Under Armour, a group of other interns and I were given a case study: figure out how Under Armour could better capture the young athlete. We built a social campaign celebrating women athletes, and I was in charge of the piece that made it shoppable — a new UA.com page called Shop the Squad.",
        "Before, a shopper who saw an outfit in an athlete's post had to leave the app, search UA.com, and guess at the product — a six-step path most people abandon. I created a high-fidelity landing page and product modal where each post is paired with the products in it, so shoppers can save posts, filter by sport, and add to bag in one place.",
        "This project reflects how I approach interface design: find the points of friction, then build something that removes them and reaches more people.",
      ],
      details: [
        ["Role", "UI Designer"],
        ["Deliverable", "Landing Page + Product Modal"],
        ["Year", "Summer 2026"],
        ["Result", "🏆 Case Study Winner"],
      ],
      images: [
        { src: IMG + "shop-the-squad-flow.svg", alt: "Diagram comparing the old six-step shopping path with the single Shop the Squad page", label: "Before vs. After", wide: true },
      ],
    },
    {
      title: "Legal Memory Agent",
      tagline: "Engineering a Memory System Behind an AI Agent",
      bannerSrc: IMG + "memory-agent-banner.svg",
      bannerAlt: "AI agent reading a spreadsheet and a history log of changes",
      tags: ["AI Agent", "Architecture", "Under Armour", "Automation"],
      shortDesc: "A Copilot agent for Legal, backed by a change-tracking system so it can answer what a value is now — and what it used to be.",
      longDesc: [
        "This project was also from my internship at Under Armour this past summer. The Legal team answered questions about the company's corporate entities by opening two spreadsheets, finding the right row, and cross-referencing by hand — and questions about what a value used to be had no fast or reliable answer.",
        "I built a Copilot agent that answers those questions in seconds, then engineered a change-tracking system behind it. Every time someone saves a spreadsheet, a Power Automate flow runs a script that compares the sheet to its last snapshot and writes only what changed to an append-only history log. The agent reads both the live files and that log, so it can answer current and historical questions while Legal keeps working in Excel exactly as before.",
        "The most significant part of this project is that I designed a reusable pattern: any department that tracks changing data in a spreadsheet can adopt the same architecture.",
      ],
      details: [
        ["Role", "Developer & Architect"],
        ["Stack", "Copilot, Power Automate, Excel"],
        ["Year", "Summer 2026"],
        ["Impact", "Reusable Pattern"],
      ],
      images: [
        { src: IMG + "memory-agent-architecture.svg", alt: "Architecture diagram: spreadsheet save triggers Power Automate, a diff script writes changes to a history log, and the Copilot agent reads live files plus the log", label: "System Architecture", wide: true },
      ],
    },
    {
      title: "Project Pixio",
      tagline: "NFT Collection & Brand",
      bannerSrc: IMG + "pixio-banner.png",
      bannerAlt: "Project Pixio NFT collection artwork",
      tags: ["NFT", "Web3", "Branding", "Design"],
      shortDesc: "A fully realized NFT project built from the ground up — art, smart contracts, community, and brand.",
      longDesc: [
        "Pixio was an end-to-end NFT project I conceived, designed, and launched independently. The project involved creating generative artwork, writing and deploying smart contracts, building a minting website, and growing a community around the brand.",
        "From logo design to tokenomics, every decision was mine. Pixio taught me what it takes to ship something real into the world — not just code, but marketing, community management, and product thinking.",
      ],
      details: [
        ["Role", "Solo Creator"],
        ["Stack", "Solidity, React, Ethers.js"],
        ["Year", "2023"],
        ["Status", "Launched"],
      ],
      images: [
        { src: IMG + "pixio-web.png", alt: "Project Pixio minting website screenshot", label: "Website Preview" },
        { src: IMG + "pixio-logo.png", alt: "Project Pixio brand logo", label: "Brand Logo" },
      ],
      link: "https://adamwilson24.github.io/projectpixio.github.io/",
    },
    {
      title: "Mathware",
      tagline: "Math Learning Platform",
      bannerSrc: IMG + "mathware-cover.png",
      bannerAlt: "Mathware math learning platform cover image",
      tags: ["React", "Education", "Web App"],
      shortDesc: "An interactive math learning tool built for students who learn better by doing.",
      longDesc: [
        "Mathware is a web-based platform designed to make math practice more engaging. Instead of static problem sets, students work through adaptive exercises with instant visual feedback.",
        "I built the frontend in React, focusing heavily on UX — clean layouts, encouraging feedback states, and a progression system that keeps students motivated. The project sharpened my skills in state management and component architecture.",
      ],
      details: [
        ["Role", "Full-Stack Developer"],
        ["Stack", "React, JavaScript, CSS"],
        ["Year", "2024"],
        ["Status", "In Progress"],
      ],
      images: [{ src: IMG + "mathware-problem.png", alt: "Mathware example math problem interface", label: "Example Problem" }],
      video: "zL6p8WKSIgY",
      link: "https://adamwilson24.github.io/congressional-app-challenge-2022/index.html",
    },
    {
      title: "Guidance Guru",
      tagline: "AI Academic Advisor",
      bannerSrc: IMG + "guidance-guru.png",
      bannerAlt: "Guidance Guru AI academic advisor interface",
      tags: ["AI", "React", "UX Design"],
      shortDesc: "An AI-powered academic advising tool that helps students navigate course selection and degree planning.",
      longDesc: [
        "Guidance Guru was born out of frustration with clunky academic advising systems. The idea: what if you could just ask a smart assistant what classes to take next?",
        "I designed and built the interface in React, integrating an AI backend that understands degree requirements and student history. The focus was on making the experience feel conversational and human — not like filling out a form.",
      ],
      details: [
        ["Role", "Designer & Developer"],
        ["Stack", "React, OpenAI API, Node.js"],
        ["Year", "2024"],
        ["Status", "Prototype"],
      ],
      images: [{ src: IMG + "guidance-guru.png", alt: "Guidance Guru chat interface screenshot", label: "Interface Preview" }],
      video: "x-U-YkumZ_Y",
      link: "https://nimblevalley.github.io/congressional-app-challenge-2023/index.html",
    },
    {
      title: "Depop Store",
      tagline: "Resale & E-Commerce Brand",
      bannerSrc: IMG + "depop.png",
      bannerAlt: "Depop resale store product photography",
      tags: ["E-Commerce", "Branding", "Photography"],
      shortDesc: "A curated online resale store — sourcing, photographing, pricing, and selling clothing.",
      longDesc: [
        "Running a Depop store taught me things no class could. I handled everything: sourcing inventory, product photography, writing listings, pricing strategy, customer service, and shipping logistics.",
        "At its peak the store had hundreds of sales. The experience gave me a deep appreciation for branding, visual presentation, and what it takes to build trust with customers online.",
      ],
      details: [
        ["Role", "Founder & Operator"],
        ["Platform", "Depop"],
        ["Year", "2022–Present"],
        ["Status", "Active"],
      ],
      images: [{ src: IMG + "depop-store.png", alt: "Depop store front with clothing listings", label: "Store Front" }],
    },
  ];

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Cards ---------- */
  const grid = document.getElementById("project-grid");
  grid.innerHTML = PROJECTS.map(
    (p, i) => `
    <div data-reveal data-delay="${(i % 3) * 0.12}">
      <button class="project-card spotlight" type="button" data-index="${i}" aria-label="Open ${esc(p.title)} details">
        <div class="project-banner">
          <div class="zoom" style="background-image:url('${p.bannerSrc}')" role="img" aria-label="${esc(p.bannerAlt)}"></div>
          <div class="project-overlay"><span>View Project →</span></div>
          <div class="project-tags">${p.tags.slice(0, 2).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        </div>
        <div class="project-body">
          <h3>${esc(p.title)}</h3>
          <p class="tagline">${esc(p.tagline)}</p>
          <p class="short">${esc(p.shortDesc)}</p>
        </div>
      </button>
    </div>`
  ).join("");

  /* ---------- Modal ---------- */
  const modal = document.getElementById("project-modal");
  let lastFocus = null;

  const titleBlock = (p) => `
    <div class="modal-tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
    <h2 id="modal-title">${esc(p.title)}</h2>
    <p>${esc(p.tagline)}</p>`;

  // YouTube needs a real web origin to embed. Opened straight from a file (file://)
  // the player refuses, so in that case the thumbnail opens the video on YouTube instead.
  const CAN_EMBED = location.protocol === "http:" || location.protocol === "https:";

  const videoHero = (p) => `
    <div class="modal-video">
      <button class="video-poster" type="button" data-video="${p.video}" aria-label="Play ${esc(p.title)} video"
        style="background-image:url('https://i.ytimg.com/vi/${p.video}/hqdefault.jpg'), url('${p.bannerSrc}')">
        <span class="play-btn" aria-hidden="true"><svg viewBox="0 0 24 24" width="30" height="30"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></span>
        <span class="video-note">${CAN_EMBED ? "Watch the demo" : "Watch the demo on YouTube ↗"}</span>
      </button>
      <button class="modal-close" type="button" aria-label="Close project details">×</button>
    </div>
    <div class="modal-titlebar">${titleBlock(p)}</div>`;

  function playVideo(btn) {
    const id = btn.dataset.video;
    if (!CAN_EMBED) {
      window.open(`https://www.youtube.com/watch?v=${id}`, "_blank", "noopener");
      return;
    }
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
    iframe.title = "Project demo video";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    btn.replaceWith(iframe);
  }

  function openModal(p) {
    lastFocus = document.activeElement;
    modal.innerHTML = `
      <div class="modal-panel" role="document">
        ${p.video ? videoHero(p) : `
        <div class="modal-hero" style="background-image:url('${p.bannerSrc}')" role="img" aria-label="${esc(p.bannerAlt)}">
          <div class="modal-hero-inner">${titleBlock(p)}</div>
          <button class="modal-close" type="button" aria-label="Close project details">×</button>
        </div>`}
        <div class="modal-body">
          <dl class="detail-pills">
            ${p.details.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}
          </dl>
          ${
            p.link
              ? `<a class="btn btn-grad" href="${p.link}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${esc(p.title)} live site — opens in new tab">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Visit Live Site
                </a>`
              : ""
          }
          <div class="modal-desc">${p.longDesc.map((para) => `<p>${esc(para)}</p>`).join("")}</div>
          ${
            p.images.length
              ? `<h3>Preview</h3>
                 <div class="preview-grid ${p.images.length === 1 ? "single" : ""}">
                   ${p.images
                     .map((img) => `<figure class="${img.wide ? "wide" : ""}"><img src="${img.src}" alt="${esc(img.alt)}" loading="lazy"><figcaption>${esc(img.label)}</figcaption></figure>`)
                     .join("")}
                 </div>`
              : ""
          }
        </div>
      </div>`;
    modal.setAttribute("aria-label", `${p.title} project details`);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close").addEventListener("click", closeModal);
    const poster = modal.querySelector(".video-poster");
    if (poster) poster.addEventListener("click", () => playVideo(poster));
    modal.querySelector(".modal-close").focus();
  }

  function closeModal() {
    modal.hidden = true;
    modal.innerHTML = "";
    document.body.classList.remove("modal-open");
    if (lastFocus) lastFocus.focus();
  }

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (card) openModal(PROJECTS[Number(card.dataset.index)]);
  });
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  window.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });
})();
