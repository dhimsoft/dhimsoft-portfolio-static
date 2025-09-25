// Contact form with Formspree
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formMsg.textContent = "⏳ Sending...";

    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        formMsg.textContent = "✅ Message sent!";
        form.reset();
      } else {
        formMsg.textContent = "⚠️ Something went wrong. Try again later.";
      }
    } catch (err) {
      formMsg.textContent = "❌ Network error. Please try again.";
    }
  });
}
