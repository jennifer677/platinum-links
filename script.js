// Floating hearts. Change heartCount lower/higher if you want fewer/more hearts.
const heartContainer = document.querySelector('.hearts');
const heartCount = 12;
for (let i = 0; i < heartCount; i++) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '♥';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${Math.random() * 16 + 10}px`;
  heart.style.animationDuration = `${Math.random() * 10 + 14}s`;
  heart.style.animationDelay = `${Math.random() * 10}s`;
  heartContainer.appendChild(heart);
}
