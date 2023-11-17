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

// Headlines yang akan ditampilkan
const headlines = ["Berita 1", "Berita 2", "Berita 3", "Berita 4"];

// Function untuk membuat elemen headline dan memulai animasi
function createHeadlineElement(text) {
  const headlineElement = document.createElement("div");
  headlineElement.textContent = text;
  headlineElement.classList.add("headline-item");
  return headlineElement;
}

// Function untuk mengubah headline secara otomatis setiap beberapa detik
function changeHeadline() {
  const headlineContainer = document.getElementById("headline-container");

  headlines.forEach((headline) => {
    const headlineElement = createHeadlineElement(headline);
    headlineContainer.appendChild(headlineElement);
  });

  let index = 0;
  setInterval(() => {
    const headlineItems = document.querySelectorAll(".headline-item");
    headlineItems.forEach((item, i) => {
      item.style.animation = `none`; // Reset animasi untuk setiap headline
      if (i === index) {
        item.style.animation = `slide 10s linear infinite`; // Terapkan animasi pada headline yang sedang ditampilkan
      }
    });
    index = (index + 1) % headlines.length;
  }, 3000); // Ubah setiap 3 detik, bisa disesuaikan dengan kebutuhan
}

// Panggil function untuk memulai perubahan headline
changeHeadline();
