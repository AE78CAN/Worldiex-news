
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const subscribeForm = document.getElementById("subscribe-form");

  // Contact form submission
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      message: contactForm.message.value,
    };

    fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Message sent successfully!");
        contactForm.reset();
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Failed to send message.");
      });
  });

  // Newsletter form submission
  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = subscribeForm.email.value;

    fetch("http://localhost:3000/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Subscribed successfully!");
        subscribeForm.reset();
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Subscription failed.");
      });
  });
});
