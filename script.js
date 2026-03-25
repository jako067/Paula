// Menu switching - sidebar always visible, no toggle
// Love button alert + confetti effect
document.addEventListener("DOMContentLoaded", () => {
  const menuBtns = document.querySelectorAll(".menu-btn");
  const pages = document.querySelectorAll(".page");
  const loveBtn = document.querySelector(".love-btn");
  const styleSwitch = document.getElementById("style-switch");
  const quoteCarousel = document.querySelector(".quote-carousel");
  const quotes = document.querySelectorAll(".quote");

  // Menu clicks
  menuBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetPage = btn.dataset.page;

      // Update active button
      menuBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Show page
      pages.forEach((p) => p.classList.remove("active"));
      document.getElementById(targetPage).classList.add("active");
    });
  });

  // Home button hearts
  document
    .querySelector('.menu-btn[data-page="home"]')
    .addEventListener("click", createHeart);

  loveBtn.addEventListener("click", createHeart);

  function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "90vh";
    heart.style.fontSize = "2rem";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "10000";
    heart.style.animation = "heartFloat 3s ease-out forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }

  // Style switcher
  styleSwitch.addEventListener("click", () => {
    document.body.classList.toggle("style2");
  });

  // Quote carousel auto
  let quoteIndex = 0;
  setInterval(() => {
    quotes.forEach((q) => q.classList.remove("active"));
    quotes[quoteIndex].classList.add("active");
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }, 4000);

  // Initial
  document.querySelector('.menu-btn[data-page="home"]').classList.add("active");
  document.getElementById("home").classList.add("active");
});
