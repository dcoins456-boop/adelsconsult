document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");

    if (!id || id === "#") {
      return;
    }

    const target = document.querySelector(id);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const nextUrlField = document.querySelector("#quote-next-url");

if (nextUrlField) {
  nextUrlField.value = new URL("success.html", window.location.href).href;
}
