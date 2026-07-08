function setLink(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = url || "#";
  if (!url || url === "#") {
    el.addEventListener("click", e => { e.preventDefault(); alert("This link will be added soon."); });
  }
}

document.getElementById("eyebrow").textContent = BRAND.eyebrow;
document.getElementById("headline").textContent = BRAND.headline;
document.getElementById("subheadline").textContent = BRAND.subheadline;
document.getElementById("footerText").textContent = BRAND.footer;
document.getElementById("quoteText").textContent = BUTTON_TEXT.quote;
document.getElementById("websiteText").textContent = BUTTON_TEXT.website;
document.getElementById("contactText").textContent = BUTTON_TEXT.contact;

["quote","website","contact","instagram","facebook","tiktok","venmo","cashapp","paypal"].forEach(n => setLink(n+"Link", LINKS[n]));
setLink("reviewLink", LINKS.googleReview);

const ICONS = {
  shirt: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4l2 2h4l2-2 4 3-2 4-2-1v10H8V10l-2 1-2-4 4-3z"/><path d="M10 6h4"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v4a4 4 0 0 1-8 0V4z"/><path d="M8 6H4v2a3 3 0 0 0 3 3h1"/><path d="M16 6h4v2a3 3 0 0 1-3 3h-1"/><path d="M12 12v5"/><path d="M9 20h6"/><path d="M10 17h4"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7V5h6v2"/><path d="M4 8h16v11H4z"/><path d="M4 13h16"/><path d="M10 13v2h4v-2"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.4 5.1L18 10l-4.6 1.9L12 17l-1.4-5.1L6 10l4.6-1.9L12 3z"/><path d="M19 4v4"/><path d="M21 6h-4"/><path d="M5 16v3"/><path d="M6.5 17.5h-3"/></svg>`,
  gift: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h16v10H4z"/><path d="M3 7h18v3H3z"/><path d="M12 7v13"/><path d="M7.5 7C6 7 5 6.2 5 5.1S6 3 7.1 3C9 3 12 7 12 7s-3.5 0-4.5 0z"/><path d="M16.5 7C18 7 19 6.2 19 5.1S18 3 16.9 3C15 3 12 7 12 7s3.5 0 4.5 0z"/></svg>`
};

const serviceGrid = document.getElementById("serviceGrid");
SERVICES.forEach(service => {
  const card = document.createElement("article");
  card.className = "service-card";
  card.innerHTML = `
    <div class="service-icon">${ICONS[service.icon] || ""}</div>
    <h2>${service.title}</h2>
    <div class="service-list">${service.items.map(i=>`<p>${i}</p>`).join("")}</div>
  `;
  serviceGrid.appendChild(card);
});

const projectGrid = document.getElementById("projectGrid");
if (projectGrid && typeof PROJECTS !== "undefined") {
  PROJECTS.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-image-wrap"><img src="${project.image}" alt="${project.title}"></div>
      <div class="project-info">
        <small>${project.category}</small>
        <strong>${project.title}</strong>
      </div>
    `;
    projectGrid.appendChild(card);
  });
}
