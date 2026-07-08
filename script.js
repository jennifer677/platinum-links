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

const serviceGrid = document.getElementById("serviceGrid");
SERVICES.forEach(service => {
  const card = document.createElement("article");
  card.className = "service-card";
  card.innerHTML = `<div class="service-icon">${service.icon}</div><h2>${service.title}</h2><div class="service-list">${service.items.map(i=>`<p>${i}</p>`).join("")}</div>`;
  serviceGrid.appendChild(card);
});