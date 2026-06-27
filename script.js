function setLink(id, url) {
  const element = document.getElementById(id);
  if (!element) return;
  element.href = url || "#";
  if (!url || url === "#") {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      alert("This link will be added soon.");
    });
  }
}

document.getElementById("tagline").textContent = BRAND.tagline;
document.getElementById("description").textContent = BRAND.description;
document.getElementById("footerText").textContent = BRAND.footer;

document.getElementById("quoteText").textContent = BUTTON_TEXT.quote;
document.getElementById("websiteText").textContent = BUTTON_TEXT.website;
document.getElementById("contactText").textContent = BUTTON_TEXT.contact;

["quote","website","contact","instagram","facebook","tiktok","venmo","cashapp","paypal"].forEach(name => {
  const id = name + "Link";
  setLink(id, LINKS[name]);
});
setLink("reviewLink", LINKS.googleReview);

const serviceGrid = document.getElementById("serviceGrid");
SERVICES.forEach((group) => {
  const card = document.createElement("article");
  card.className = "service-card";
  const icon = document.createElement("div");
  icon.className = "service-icon";
  icon.textContent = group.icon;
  card.appendChild(icon);
  const h2 = document.createElement("h2");
  h2.textContent = group.title;
  card.appendChild(h2);
  group.items.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = "✓ " + item;
    card.appendChild(p);
  });
  serviceGrid.appendChild(card);
});

const sparkleLayer = document.querySelector(".sparkles");
for (let i = 0; i < SETTINGS.sparkleCount; i++) {
  const s = document.createElement("span");
  s.className = Math.random() > 0.82 ? "sparkle starburst" : "sparkle";
  const size = Math.random() * 4 + 1.5;
  s.style.left = `${Math.random() * 100}%`;
  s.style.top = `${Math.random() * 100}%`;
  s.style.width = `${size}px`;
  s.style.height = `${size}px`;
  s.style.animationDuration = `${Math.random() * 4 + 2.5}s`;
  s.style.animationDelay = `${Math.random() * 5}s`;
  sparkleLayer.appendChild(s);
}

if (SETTINGS.floatingHearts) {
  const heartLayer = document.querySelector(".hearts");
  for (let i = 0; i < SETTINGS.heartCount; i++) {
    const h = document.createElement("span");
    h.className = "float-heart";
    h.textContent = Math.random() > 0.45 ? "♡" : "♥";
    h.style.left = `${Math.random() * 100}%`;
    h.style.fontSize = `${Math.random() * 34 + 16}px`;
    h.style.animationDuration = `${Math.random() * 16 + 18}s`;
    h.style.animationDelay = `${Math.random() * 16}s`;
    heartLayer.appendChild(h);
  }
}
