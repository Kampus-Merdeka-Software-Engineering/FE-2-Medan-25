let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const carouselWrapper = document.querySelector('.carousel-wrapper');
let slideWidth = document.querySelector('.slide').clientWidth;

function updateCarousel() {
  slideWidth = document.querySelector('.slide').clientWidth;
  carouselWrapper.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

window.addEventListener('resize', function () {
  slideWidth = document.querySelector('.slide').clientWidth;
  currentIndex = 0; // Atur ulang indeks saat layar diubah ukurannya
  updateCarousel();
});

document.addEventListener('DOMContentLoaded', function () {
  // Panggil fungsi untuk mengisi carousel
  fillCarousel();

  // Setelah mengisi carousel, Anda dapat terus menggunakan fungsi nextSlide dan prevSlide seperti sebelumnya.
});

setInterval(nextSlide, 3000);

// Fungsi untuk mengisi carousel dari JSON
function fillCarousel() {
  // Gunakan fetch untuk mendapatkan data JSON
  fetch('/database.json') // Ganti 'URL_JSON_ANDA' dengan URL yang benar
    .then(response => response.json())
    .then(jsonData => {
      // Ambil data dari JSON
      const data = jsonData.data;

      // Loop melalui setiap item dalam data
      for (let i = 0; i < data.length; i++) {
        const item = data[i];

        // Buat elemen slide
        const slide = document.createElement('div');
        slide.classList.add('slide');

        // Buat elemen gambar
        const img = document.createElement('img');
        img.src = item.gambar;
        img.alt = `Slide ${i + 1}`;

        // Buat elemen dark-overlay
        const darkOverlay = document.createElement('div');
        darkOverlay.classList.add('dark-overlay');

        // Buat elemen slide-content
        const slideContent = document.createElement('div');
        slideContent.classList.add('slide-content');

        // Isi elemen slide-content dengan data dari JSON
        slideContent.innerHTML = `
          <h2><a href="#">${item.title}</a></h2>
          <blockquote>${item.deskripsi}</blockquote>
        `;

        // Tambahkan elemen-gambar, dark-overlay, dan slide-content ke dalam elemen slide
        slide.appendChild(img);
        slide.appendChild(darkOverlay);
        slide.appendChild(slideContent);

        // Tambahkan elemen slide ke dalam carousel
        carouselWrapper.appendChild(slide);
      }
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
}
