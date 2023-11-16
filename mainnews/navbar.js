document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menuIconX = document.querySelector(".menu-icon-x");
  const navLinks = document.querySelector(".nav-links");

  // Sembunyikan menu-icon-x saat halaman dimuat
  menuIconX.style.display = "none";

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.style.display = "none";
    menuIconX.style.display = "block";
  });

  menuIconX.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.style.display = "block";
    menuIconX.style.display = "none";
  });
});
