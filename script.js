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

// Build service cards from config.js
const serviceGrid = document.getElementById("serviceGrid");

SERVICES.forEach(group => {
  const card = document.createElement("article");
  card.className = "service-card";

  const icon = document.createElement("i");
  icon.className = group.icon + " service-icon";
  card.appendChild(icon);

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
  const heartCount = SETTINGS.heartCount || 24;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.45 ? "♡" : "♥";

    const size = Math.random() * 38 + 18;
    const left = Math.random() * 100;
    const duration = Math.random() * 14 + 16;
    const delay = Math.random() * 16;

    heart.style.left = `${left}%`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;

    heartContainer.appendChild(heart);
  }
}

// Sparkle dots and starbursts
const sparkleLayer = document.querySelector(".sparkle-layer");
const sparkleCount = SETTINGS.sparkleCount || 70;

for (let i = 0; i < sparkleCount; i++) {
  const sparkle = document.createElement("span");
  sparkle.className = Math.random() > 0.78 ? "sparkle big" : "sparkle";

  const size = Math.random() * 4 + 2;
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  sparkle.style.animationDelay = `${Math.random() * 5}s`;
  sparkle.style.animationDuration = `${Math.random() * 3 + 2.5}s`;

  sparkleLayer.appendChild(sparkle);
}
