function setLink(id, url) {
  const el = document.getElementById(id);
  if (!el) return;

  el.href = url || "#";

  if (!url || url === "#") {
    el.addEventListener("click", (event) => {
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

const serviceGrid = document.getElementById("serviceGrid");

SERVICES.forEach((group) => {
  const card = document.createElement("article");
  card.className = "service-card";

  const icon = document.createElement("span");
  icon.className = `service-symbol ${group.icon}`;
  card.appendChild(icon);

  const title = document.createElement("h2");
  title.textContent = group.title;
  card.appendChild(title);

  group.items.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = "✓ " + item;
    card.appendChild(p);
  });

  serviceGrid.appendChild(card);
});

const sparkleLayer = document.querySelector(".background-glitter");
const sparkleCount = SETTINGS.sparkleCount || 100;

for (let i = 0; i < sparkleCount; i++) {
  const sparkle = document.createElement("span");
  sparkle.className = Math.random() > 0.82 ? "sparkle burst" : "sparkle";
  const size = Math.random() * 4 + 1.5;

  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  sparkle.style.animationDelay = `${Math.random() * 5}s`;
  sparkle.style.animationDuration = `${Math.random() * 4 + 2.5}s`;

  sparkleLayer.appendChild(sparkle);
}

if (SETTINGS.floatingHearts) {
  const hearts = document.querySelector(".floating-hearts");
  const heartCount = SETTINGS.heartCount || 24;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.textContent = Math.random() > 0.42 ? "♡" : "♥";

    const size = Math.random() * 34 + 18;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${Math.random() * 15 + 18}s`;
    heart.style.animationDelay = `${Math.random() * 16}s`;

    hearts.appendChild(heart);
  }
}
