// ================= SCROLL REVEAL =================
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const elementVisible = 120;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible && elementTop > -el.offsetHeight) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// ================= CONTACT FORM =================
document.addEventListener("DOMContentLoaded", () => {

  const contactSection = document.querySelector("#contact");

  if (!contactSection) return; // safety check

  const nameInput = contactSection.querySelector("input[type='text']");
  const emailInput = contactSection.querySelector("input[type='email']");
  const messageInput = contactSection.querySelector("textarea");
  const sendButton = contactSection.querySelector("button");

  if (!sendButton) return; // safety check

  sendButton.addEventListener("click", (e) => {
    e.preventDefault(); // prevent reload

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Validation
    if (!name || !email || !message) {
      alert("Please fill all fields ❗");
      return;
    }

    // Basic email check
    if (!email.includes("@") || !email.includes(".")) {
      alert("Enter a valid email ❗");
      return;
    }

    // Demo success (no backend)
    alert("Message sent successfully ✅");

    // Clear form
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  });

});