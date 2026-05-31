const paymentLink = "https://gumroad.com/l/ai-investment-committee-beta";
const waitlistEmail = "joshuajian93@gmail.com";

document.querySelectorAll("[data-payment-link]").forEach((node) => {
  node.setAttribute("href", paymentLink);
});

const form = document.getElementById("waitlistForm");
const status = document.getElementById("formStatus");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const contact = String(data.get("contact") || "").trim();
  const segment = String(data.get("segment") || "").trim();
  const subject = encodeURIComponent("AI Investment Committee beta waitlist");
  const body = encodeURIComponent([
    "Beta waitlist request",
    "",
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Segment: ${segment}`,
    "",
    "Please send the Telegram invite/payment link."
  ].join("\n"));
  status.textContent = "Opening email draft...";
  window.location.href = `mailto:${waitlistEmail}?subject=${subject}&body=${body}`;
});
