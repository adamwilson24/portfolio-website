/* Projects page: card grid + detail modal.
   To add a project, add an object to PROJECTS — the page builds itself. */
(function () {
  "use strict";

  const IMG = "assets/images/";
  const UA = IMG + "ua/";

  const PROJECTS = [
    {
      title: "Shop the Squad",
      tagline: "Turning Athlete Social Posts Into a Shoppable Page",
      bannerSrc: IMG + "shop-the-squad-banner.svg",
      bannerAlt: "Shop the Squad graphic: an athlete post feed on a phone with products to add to bag",
      tags: ["UI Design", "E-Commerce", "Under Armour", "Case Study"],
      shortDesc: "A new UA.com page that pairs each athlete post with the products in it, turning a six-step path into one place.",
      longDesc: [
        "During my internship this past summer at Under Armour, a group of other interns and I were given a case study: figure out how Under Armour could better capture the young athlete. Our answer was Her Game. Her Armour. — a campaign that turns female collegiate team sport athletes from wearers into creators, with posts on social media, a shoppable page on UA.com, and an in-store spotlight, repeated every season.",
        "I was in charge of the piece that made it shoppable: a new UA.com page called Shop the Squad. Before, a shopper who saw an outfit in an athlete's post had to leave the app, search UA.com, and guess at the product — a six-step path most people abandon. I designed a high-fidelity landing page and product modal where each post is paired with the products in it, so shoppers can save posts, filter by sport, and add to bag in one place.",
        "This project reflects how I approach interface design: find the points of friction, then build something that removes them and reaches more people.",
      ],
      details: [
        ["Role", "UI Designer"],
        ["Deliverable", "Landing Page + Product Modal"],
        ["Year", "Summer 2026"],
        ["Result", "🏆 Case Study Winner"],
      ],
      sections: [
        {
          title: "The problem",
          images: [
            { src: UA + "sts-slide-problem.jpg", w: 1600, h: 832, alt: "Slide: the six steps a shopper takes to buy an outfit seen in an athlete's post", label: "Six steps to buy what you just saw", wide: true },
          ],
        },
        {
          title: "From sketch to screen",
          images: [
            { src: UA + "sts-sketch.jpg", w: 746, h: 419, alt: "Hand-drawn notebook sketch of the Shop the Squad page layout", label: "Sketch" },
            { src: UA + "sts-landing.jpg", w: 879, h: 461, alt: "High-fidelity Shop the Squad landing page with athlete posts and products", label: "Landing page" },
            { src: UA + "sts-product-modal.jpg", w: 585, h: 366, alt: "Product modal with photos, colour and size options, and Add to Bag", label: "Product modal" },
            { src: UA + "sts-post.jpg", w: 1280, h: 680, alt: "An athlete post with the products in it listed beside it", label: "A post and its products" },
          ],
        },
        {
          title: "Key interactions",
          cols: 4,
          images: [
            { src: UA + "sts-save-post.jpg", w: 580, h: 283, alt: "Close-up of the save post button", label: "01 · Save a post" },
            { src: UA + "sts-saved-posts.jpg", w: 579, h: 283, alt: "Close-up of the My Saved Posts link", label: "02 · View saved" },
            { src: UA + "sts-filter.jpg", w: 583, h: 283, alt: "Close-up of the filter by sport menu", label: "03 · Filter by sport" },
            { src: UA + "sts-add-to-bag.jpg", w: 579, h: 283, alt: "Close-up of size options and the Add to Bag button", label: "04 · Add to bag" },
          ],
        },
        {
          title: "The campaign",
          images: [
            { src: UA + "sts-campaign.jpg", w: 1600, h: 900, alt: "Case study title slide: Her Game. Her Armour.", label: "Her Game. Her Armour." },
            { src: UA + "sts-timeline.jpg", w: 1600, h: 900, alt: "Campaign timeline: define, launch on social, curate and shop, select an athlete, activate in retail — a repeatable seasonal cycle", label: "A repeatable seasonal cycle" },
          ],
        },
        {
          title: "The team",
          team: true,
          images: [
            { src: UA + "sts-team.jpg", w: 768, h: 1024, alt: "Adam with his five case study teammates in front of the Under Armour logo", label: "Case Study Group 3 — Rookie Week winners" },
          ],
          note: "Audrey Devine, Elisabeth Eaddy, Mia Hilton, Olivia Levitt, Luca Sturm, and me. We pitched Her Game. Her Armour. during Rookie Week and won the case study.",
        },
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
        ["Stack", "Copilot Studio, Power Automate, Office Scripts"],
        ["Year", "Summer 2026"],
        ["Impact", "Reusable Pattern"],
      ],
      sections: [
        {
          title: "Before",
          images: [
            { src: UA + "lma-slide-before.jpg", w: 1600, h: 832, alt: "Slide: seven manual steps Legal took to answer every entity question", label: "Seven manual steps, every single time", wide: true },
          ],
        },
        {
          title: "Giving the agent a memory",
          images: [
            { src: UA + "lma-slide-memory.jpg", w: 1600, h: 832, alt: "Architecture: Excel save triggers Power Automate, which runs a script that appends to historical sheets; the Copilot agent reads live files and history", label: "Two identical pipelines, one per spreadsheet", wide: true },
          ],
        },
        {
          title: "How the history gets captured",
          images: [
            { src: UA + "lma-flow.png", w: 950, h: 715, alt: "Power Automate flow: when a file is modified, run script, then add a row for each change", label: "Power Automate flow — the on-save trigger", light: true },
            { src: UA + "lma-script.png", w: 674, h: 196, alt: "Office Script code that filters snapshot and current rows and builds a signature to detect changes", label: "Office Script — the diff logic", light: true },
          ],
        },
        {
          title: "",
          images: [
            { src: UA + "lma-history.png", w: 1503, h: 451, alt: "Historical spreadsheet with timestamp, entity, field name, old value and new value columns", label: "The output — an append-only history (synthetic data)", wide: true, light: true },
          ],
        },
        {
          title: "An answer in seconds",
          images: [
            { src: UA + "lma-answer.png", w: 1536, h: 366, alt: "The agent answering a historical question with a timeline of changes and cited sources", label: "The agent answering a historical question, with sources", wide: true },
            { src: UA + "lma-slide-answer.jpg", w: 1600, h: 832, alt: "Slide: the agent in action and the teams that could reuse the same pattern", label: "A pattern any team can reuse", wide: true },
          ],
        },
      ],
    },
    {
      title: "Project Pixio",
      tagline: "3D NFT Collection & Brand",
      bannerSrc: IMG + "pixio-banner.png",
      bannerAlt: "Project Pixio NFT collection artwork",
      tags: ["3D Design", "Web3", "Branding", "Community"],
      shortDesc: "A full NFT collection I designed and built over more than a year — 3D art, website, wallet connection, and community. Built end to end, never minted.",
      longDesc: [
        "Pixio was an NFT project I conceived, designed, and built on my own over more than a year. I modeled every character and trait in 3D, rendered the full collection with metadata and rarity tiers for each item, built the website and its wallet connection, and grew a community around the brand — including collecting whitelist members ahead of launch.",
        "I never actually minted the collection. Everything was built and ready, but the mint itself never happened.",
        "What I got out of it was a huge jump in my design skills. Most of that year was spent in Blender: modeling, texturing, and lighting dozens of heads, hoodies, and accessories, then rendering them into one consistent collection. From logo design to tokenomics, every decision was mine.",
      ],
      details: [
        ["Role", "Solo Creator"],
        ["Tools", "Blender, Solidity, React, Ethers.js"],
        ["Timeline", "1+ Year"],
        ["Status", "Built, Never Minted"],
      ],
      sections: [
        {
          title: "The collection",
          images: [
            { src: IMG + "pixio-collection.jpg", w: 1792, h: 1396, alt: "Grid of 56 rendered Pixio characters, each with a different head, hoodie, and background", label: "Rendered characters — each with its own metadata and trait rarities", wide: true },
          ],
        },
        {
          title: "In Blender",
          images: [
            { src: IMG + "pixio-blender.jpg", w: 1800, h: 1107, alt: "Blender workspace showing a gift-box-headed character model, the trait collections list, and the material node editor", label: "Modeling a character — trait collections on the right, materials below", wide: true },
          ],
        },
        {
          title: "The website & brand",
          images: [
            { src: IMG + "pixio-web.png", w: 1600, h: 818, alt: "Project Pixio minting website screenshot", label: "Website with wallet connection" },
            { src: IMG + "pixio-logo.png", w: 900, h: 900, alt: "Project Pixio brand logo", label: "Brand logo" },
          ],
        },
      ],
      link: "https://adamwilson24.github.io/projectpixio.github.io/",
    },
    {
      title: "Mathware",
      tagline: "Congressional App Challenge Winner · WI\u201106",
      bannerSrc: IMG + "mathware-cover.png",
      bannerAlt: "Mathware math learning platform cover image",
      tags: ["🏆 App Challenge Winner", "Education", "JavaScript", "Web App"],
      shortDesc: "A math learning app that won the Congressional App Challenge for Wisconsin's 6th District, and took us to Washington, D.C. to present.",
      longDesc: [
        "Mathware was built for the Congressional App Challenge, a nationwide competition run by the U.S. House of Representatives where high school students design and code an original app. Each congressional district picks its own winner, and winners are invited to Washington, D.C. to show their apps at #HouseOfCode.",
        "We won the challenge for Wisconsin's 6th District, which earned us a trip to D.C. to demo Mathware at House of Code — talking through the app with members of Congress, their staff, and other winners from around the country.",
        "Mathware is a web app, built with HTML, CSS, and JavaScript, that makes math practice feel more like a game. Students start with simple questions and work their way up in difficulty, unlocking each new level only after they've mastered the one before it.",
      ],
      details: [
        ["Role", "Developer"],
        ["Stack", "HTML, CSS, JavaScript"],
        ["Year", "2022"],
        ["Result", "🏆 Winner, WI-06"],
      ],
      sections: [
        {
          title: "House of Code — Washington, D.C.",
          images: [
            { src: IMG + "mathware-house-of-code.jpg", w: 1600, h: 1067, alt: "Adam and his teammates presenting Mathware next to their poster at House of Code in Washington, D.C.", label: "Demoing Mathware at the Congressional App Challenge winners' conference", wide: true },
          ],
        },
        {
          title: "The Congressional App Challenge",
          aside: true,
          images: [
            { src: IMG + "congressional-app-challenge-logo.png", w: 1340, h: 960, alt: "Congressional App Challenge logo", label: "Congressional App Challenge", light: true },
          ],
          note: "The U.S. House of Representatives' competition for getting high school students coding. Mathware was the winning app for Wisconsin's 6th District.",
        },
        {
          title: "Inside the app",
          images: [
            { src: IMG + "mathware-problem.png", w: 1600, h: 517, alt: "Mathware example math problem interface", label: "An example problem", wide: true },
          ],
        },
      ],
      video: "zL6p8WKSIgY",
      link: "https://adamwilson24.github.io/congressional-app-challenge-2022/index.html",
    },
    {
      title: "Guidance Guru",
      tagline: "Virtual School Counselor · Congressional App Challenge",
      bannerSrc: IMG + "guidance-guru.png",
      bannerAlt: "Guidance Guru virtual counselor interface",
      tags: ["Education", "UX Design", "JavaScript", "App Challenge"],
      shortDesc: "A virtual school counselor that helps students pick their next classes — our team's Congressional App Challenge entry the year after Mathware.",
      longDesc: [
        "After Mathware won, our team came back the next year with a new entry for the Congressional App Challenge: Guidance Guru. We didn't win this time, but it was a bigger, more ambitious app to design and build.",
        "Guidance Guru is a virtual school counselor. Instead of waiting for a meeting to figure out what to take next year, a student can just ask. The chat walks them through it — what subject they need, the last class they took, whether it was honors — and points them toward the right next course.",
        "There's also a full Course Guide: every class shown as a card with its credits and which grades can take it, with filters to narrow it down, plus a light and dark mode toggle.",
      ],
      details: [
        ["Role", "Designer & Developer"],
        ["Team", "Adam Wilson, Mason McManus, Carter Lator, Miles Trompeter"],
        ["Year", "2023"],
        ["Result", "Competition Entry"],
      ],
      sections: [
        {
          title: "The app",
          images: [
            { src: IMG + "guidance-guru-home.png", w: 1468, h: 788, alt: "Guidance Guru home screen with Start and About buttons", label: "Home screen", wide: true },
            { src: IMG + "guidance-guru-chat.png", w: 1002, h: 561, alt: "Chat where the virtual counselor asks about the student's last math class", label: "Chat — ask what to take next" },
            { src: IMG + "guidance-guru-courses.png", w: 1452, h: 780, alt: "Course Guide grid of class cards showing credits and available grades, with filters", label: "Course Guide — filter every class" },
          ],
        },
        {
          title: "The Congressional App Challenge",
          aside: true,
          images: [
            { src: IMG + "congressional-app-challenge-logo.png", w: 1340, h: 960, alt: "Congressional App Challenge logo", label: "Congressional App Challenge", light: true },
          ],
          note: "A competition run by the U.S. House of Representatives where high school students design and code an original app. Each congressional district picks its own winner, and winners are invited to present at House of Code in Washington, D.C. Our team won Wisconsin's 6th District the year before with Mathware; Guidance Guru was our follow-up entry.",
        },
      ],
      video: "x-U-YkumZ_Y",
      link: "https://nimblevalley.github.io/congressional-app-challenge-2023/index.html",
    },
    {
      title: "Business Owner",
      tagline: "Sunnyside Scrubbers & Lawn Care",
      bannerSrc: IMG + "business/sunnyside-banner.jpg",
      bannerAlt: "Adam cleaning a second-floor window from a ladder",
      tags: ["Entrepreneurship", "Sales", "Branding", "Design"],
      shortDesc: "In 2024 I launched Sunnyside Scrubbers, a window cleaning business built on top of the lawn care business I've run since 2019.",
      longDesc: [
        "In 2024 my partner and I started Sunnyside Scrubbers, a window cleaning business. I already had a lawn care business with a steady group of customers, and I wanted to build something new on top of it to grow that customer base.",
        "We went door to door around Cedarburg with flyers I designed: before-and-after photos on the front and an instant quote on the back, with a discount for anyone who kept the flyer. I also made the logo, the branded polos, and the quote sheets we filled out at each house.",
        "It taught me a lot about selling: walking up to a stranger's door, explaining what we do, and turning that into a quote and a booked job.",
      ],
      details: [
        ["Role", "Founder & Owner"],
        ["Businesses", "Lawn Care (2019) · Sunnyside Scrubbers (2024)"],
        ["Location", "Cedarburg, WI"],
        ["Growth", "+25% Clients per Year"],
      ],
      sections: [
        {
          title: "Sunnyside Scrubbers — the flyer",
          images: [
            { src: IMG + "business/sunnyside-flyer.jpg", w: 1000, h: 773, alt: "Sunnyside Scrubbers flyer: front with logo, services and before-and-after photos; back with an instant quote checklist", label: "Front and back of the flyer we handed out door to door", wide: true },
          ],
        },
        {
          title: "On the job",
          images: [
            { src: IMG + "business/sunnyside-window.jpg", w: 886, h: 886, alt: "Adam on a ladder cleaning a second-floor window", label: "Second-floor windows" },
            { src: IMG + "business/sunnyside-quote.jpg", w: 697, h: 672, alt: "Adam in a Sunnyside Scrubbers polo giving a thumbs up with a completed service quote", label: "Another quote booked" },
          ],
        },
        {
          title: "The brand",
          aside: true,
          images: [
            { src: IMG + "business/sunnyside-polo.jpg", w: 900, h: 854, alt: "White polo with the embroidered Sunnyside Scrubbers sun logo", label: "Sunnyside Scrubbers polo", light: true },
          ],
          note: "I designed the sun logo and put it on everything: the flyers, the quote sheets, and the polos we wore to each job.",
        },
        {
          title: "Where it started — lawn care, since 2019",
          aside: true,
          images: [
            { src: IMG + "business/lawn-stripes.jpg", w: 700, h: 875, alt: "A freshly mowed lawn with clean stripes and an edged mulch bed", label: "A finished lawn" },
          ],
          note: "I started my lawn care business in 2019, and it grew into a steady base of customers: mowing, cleanups, mulch, and general yard work. That base is what Sunnyside Scrubbers was built on.",
        },
        {
          title: "Then vs. now",
          images: [
            { src: IMG + "business/lawn-flyer-2019.jpg", w: 730, h: 1076, alt: "Adam's Lawn Service flyer from 2019 listing services and a phone number", label: "2019 — my very first flyer, made at 14" },
            { src: IMG + "business/business-cards.jpg", w: 1400, h: 1050, alt: "Blue and white Adam Wilson Yard Care business cards with a lawn mower logo", label: "Later — the Yard Care business cards I designed" },
          ],
        },
      ],
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

  const figure = (img) => `
    <figure class="${img.wide ? "wide" : ""} ${img.light ? "light" : ""}">
      <button class="zoomable" type="button" aria-label="Enlarge: ${esc(img.label)}">
        <img src="${img.src}" alt="${esc(img.alt)}"${img.w ? ` width="${img.w}" height="${img.h}"` : ""} decoding="async">
      </button>
      <figcaption>${esc(img.label)}</figcaption>
    </figure>`;

  function gallery(p) {
    if (p.sections) {
      return p.sections.map((sec) => `
        <section class="gal-section ${sec.team ? "gal-team" : ""} ${sec.aside ? "gal-aside" : ""}">
          ${sec.title ? `<h3>${esc(sec.title)}</h3>` : ""}
          <div class="preview-grid ${sec.images.length === 1 ? "single" : ""} ${sec.cols === 4 ? "cols-4" : ""}">
            ${sec.images.map(figure).join("")}
            ${sec.note ? `<p class="gal-note">${esc(sec.note)}</p>` : ""}
          </div>
        </section>`).join("");
    }
    if (!p.images || !p.images.length) return "";
    return `<h3>Preview</h3>
      <div class="preview-grid ${p.images.length === 1 ? "single" : ""}">${p.images.map(figure).join("")}</div>`;
  }

  /* Full-size view for any image inside the modal */
  const zoom = document.createElement("div");
  zoom.className = "zoom-view";
  zoom.hidden = true;
  zoom.setAttribute("role", "dialog");
  zoom.setAttribute("aria-modal", "true");
  zoom.innerHTML = `<button class="modal-close" type="button" aria-label="Close image">×</button><figure><img alt=""><figcaption></figcaption></figure>`;
  document.body.appendChild(zoom);
  let zoomFrom = null;
  function openZoom(btn) {
    zoomFrom = btn;
    const img = btn.querySelector("img");
    zoom.querySelector("img").src = img.src;
    zoom.querySelector("img").alt = img.alt;
    zoom.querySelector("figcaption").textContent = btn.parentElement.querySelector("figcaption").textContent;
    zoom.hidden = false;
    zoom.querySelector(".modal-close").focus();
  }
  function closeZoom() {
    zoom.hidden = true;
    if (zoomFrom) zoomFrom.focus();
  }
  zoom.addEventListener("click", (e) => { if (e.target === zoom || e.target.closest(".modal-close") || e.target.tagName === "IMG") closeZoom(); });

  function openModal(p) {
    lastFocus = document.activeElement;
    modal.innerHTML = `
      <div class="modal-panel" role="document">
        ${p.video ? videoHero(p) : `
        <div class="modal-hero" style="background-image:url('${p.heroSrc || p.bannerSrc}')" role="img" aria-label="${esc(p.bannerAlt)}">
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
          ${gallery(p)}
        </div>
      </div>`;
    modal.setAttribute("aria-label", `${p.title} project details`);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close").addEventListener("click", closeModal);
    const poster = modal.querySelector(".video-poster");
    if (poster) poster.addEventListener("click", () => playVideo(poster));
    modal.querySelectorAll(".zoomable").forEach((b) => b.addEventListener("click", () => openZoom(b)));
    modal.querySelector(".modal-panel").scrollTop = 0;
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
  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!zoom.hidden) closeZoom();
    else if (!modal.hidden) closeModal();
  });
})();
