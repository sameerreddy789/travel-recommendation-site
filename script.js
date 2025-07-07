document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks for reaching out! We'll get back to you soon.");
      form.reset();
    });
  }
});