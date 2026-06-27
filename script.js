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
setLink("saveContactLink", LINKS.saveContact);
