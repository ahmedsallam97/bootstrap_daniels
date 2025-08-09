document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("main-nav");

  // Convert 100vh to pixels
  const scrollThreshold = window.innerHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
