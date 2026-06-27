const heartContainer = document.querySelector(".floating-hearts");
const heartCount = 18;

for (let i = 0; i < heartCount; i++) {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.35 ? "♡" : "♥";

  const size = Math.random() * 24 + 14;
  const left = Math.random() * 100;
  const duration = Math.random() * 12 + 16;
  const delay = Math.random() * 12;

  heart.style.left = `${left}%`;
  heart.style.fontSize = `${size}px`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `${delay}s`;

  heartContainer.appendChild(heart);
}
