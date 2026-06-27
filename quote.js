const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyRwqSH1axYtNAmcpR9nqTENo_VM1xwll8deBJMwuqcwZyQgPHIq3Hj0OqF2GgKEUDl/exec";

const form = document.getElementById("quoteForm");
const message = document.getElementById("formMessage");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
  message.className = "form-message";
  message.textContent = "";

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    contactMethod: formData.get("contactMethod"),
    orderType: formData.get("orderType"),
    product: formData.get("product"),
    quantity: formData.get("quantity"),
    dueDate: formData.get("dueDate"),
    budget: formData.get("budget"),
    description: formData.get("description"),
    sizes: formData.get("sizes"),
    artwork: formData.get("artwork"),
    notes: formData.get("notes")
  };

  try {
    await fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    form.reset();
    message.className = "form-message success";
    message.innerHTML = "Thank you! Your quote request has been received. We will contact you within 1–2 business days. 💖";
  } catch (error) {
    message.className = "form-message error";
    message.textContent = "Something went wrong. Please try again or email info@platinumcustomco.com.";
  }

  submitBtn.disabled = false;
  submitBtn.textContent = "Submit Quote Request";
});

// Sparkles
const sparkleLayer = document.querySelector(".sparkles");
for (let i = 0; i < 120; i++) {
  const s = document.createElement("span");
  s.className = "sparkle";
  const size = Math.random() * 4 + 1.5;
  s.style.left = `${Math.random() * 100}%`;
  s.style.top = `${Math.random() * 100}%`;
  s.style.width = `${size}px`;
  s.style.height = `${size}px`;
  s.style.animationDuration = `${Math.random() * 4 + 2.5}s`;
  s.style.animationDelay = `${Math.random() * 5}s`;
  sparkleLayer.appendChild(s);
}

// Hearts
const heartLayer = document.querySelector(".hearts");
for (let i = 0; i < 26; i++) {
  const h = document.createElement("span");
  h.className = "float-heart";
  h.textContent = Math.random() > 0.45 ? "♡" : "♥";
  h.style.left = `${Math.random() * 100}%`;
  h.style.fontSize = `${Math.random() * 30 + 16}px`;
  h.style.animationDuration = `${Math.random() * 16 + 18}s`;
  h.style.animationDelay = `${Math.random() * 16}s`;
  heartLayer.appendChild(h);
}
