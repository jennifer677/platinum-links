// Applies your easy-edit settings from config.js

function setLink(id, url) {
  const element = document.getElementById(id);
  if (!element) return;

  element.href = url || "#";

  // If the link is a placeholder, keep it clickable but do nothing.
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

setLink("quoteLink", LINKS.quote);
setLink("websiteLink", LINKS.website);
setLink("contactLink", LINKS.contact);

setLink("instagramLink", LINKS.instagram);
setLink("facebookLink", LINKS.facebook);
setLink("tiktokLink", LINKS.tiktok);

setLink("venmoLink", LINKS.venmo);
setLink("cashappLink", LINKS.cashapp);
setLink("paypalLink", LINKS.paypal);

setLink("reviewLink", LINKS.googleReview);

// Build services automatically from config.js
const serviceGrid = document.getElementById("serviceGrid");

SERVICES.forEach(group => {
  const card = document.createElement("article");
  card.className = "service-card";

  const title = document.createElement("h2");
  title.textContent = group.title;
  card.appendChild(title);

  group.items.forEach(item => {
    const p = document.createElement("p");
    p.textContent = "✓ " + item;
    card.appendChild(p);
  });

  serviceGrid.appendChild(card);
});

// Floating hearts
if (SETTINGS.floatingHearts) {
  const heartContainer = document.querySelector(".floating-hearts");
  const heartCount = SETTINGS.heartCount || 12;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.35 ? "♡" : "♥";

    const size = Math.random() * 22 + 12;
    const left = Math.random() * 100;
    const duration = Math.random() * 12 + 16;
    const delay = Math.random() * 12;

    heart.style.left = `${left}%`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;

    heartContainer.appendChild(heart);
  }
}
