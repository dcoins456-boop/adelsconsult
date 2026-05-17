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

const heroSlides = Array.from(document.querySelectorAll("[data-hero-slide]"));
const heroDots = Array.from(document.querySelectorAll("[data-hero-dot]"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let activeHeroSlide = 0;
let heroCarouselTimer;

function showHeroSlide(index) {
  activeHeroSlide = index;

  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeHeroSlide);
  });

  heroDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeHeroSlide);
  });
}

function startHeroCarousel() {
  if (prefersReducedMotion || heroSlides.length < 2) {
    return;
  }

  heroCarouselTimer = window.setInterval(() => {
    showHeroSlide((activeHeroSlide + 1) % heroSlides.length);
  }, 10000);
}

if (heroSlides.length > 1) {
  heroDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      window.clearInterval(heroCarouselTimer);
      showHeroSlide(index);
      startHeroCarousel();
    });
  });

  startHeroCarousel();
}
