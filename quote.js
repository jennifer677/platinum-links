const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyRwqSH1axYtNAmcpR9nqTENo_VM1xwll8deBJMwuqcwZyQgPHIq3Hj0OqF2GgKEUDl/exec";
const form = document.getElementById("quoteForm");
const message = document.getElementById("formMessage");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
  message.className = "";
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    form.reset();
    message.className = "success";
    message.textContent = "Thank you! Your quote request has been received. We will contact you within 1–2 business days.";
  } catch (error) {
    message.className = "error";
    message.textContent = "Something went wrong. Please try again or email info@platinumcustomco.com.";
  }

  submitBtn.disabled = false;
  submitBtn.textContent = "Submit Quote Request";
});