// ============ CONTACT FORM LOGIC ============
const contactSection = document.querySelector("#contact");

const nameInput = contactSection.querySelector("input[type='text']");
const emailInput = contactSection.querySelector("input[type='email']");
const messageInput = contactSection.querySelector("textarea");
const sendButton = contactSection.querySelector("button");

sendButton.addEventListener("click", async () => {

  // 1️⃣ Get values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // 2️⃣ Validate
  if (!name || !email || !message) {
    alert("Please fill all fields ❗");
    return;
  }

  // 3️⃣ 🔥 THIS IS WHERE YOUR CODE GOES
  try {
    await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      message: message,
      createdAt: new Date()
    });

    alert("Message sent successfully ✅");

    // 4️⃣ Clear form
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

  } catch (error) {
    console.error("Error saving message:", error);
    alert("Failed to send message ❌");
  }
});
