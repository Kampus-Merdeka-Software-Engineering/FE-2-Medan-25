let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const carouselWrapper = document.getElementById('carouselWrapper');
let slideWidth;

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



// Fungsi fetchData
async function fetchData() {
    try {
        const response = await fetch('slide.json');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Response Status:', response.status);

        if (data && data.data) {
            data.data.forEach(item => {
                console.log("Creating slide for:", item.title)
                const slide = document.createElement('div');
                slide.classList.add('slide');

                const img = document.createElement('img');
                img.src = item.gambar;
                img.alt = item.title;

                const overlay = document.createElement('div');
                overlay.classList.add('dark-overlay');

                const content = document.createElement('div');
                content.classList.add('slide-content');
                const title = document.createElement('h2');
                title.innerHTML = `<a href="#">${item.title}</a>`;
                const description = document.createElement('blockquote');
                description.textContent = item.deskripsi;

                content.appendChild(title);
                content.appendChild(description);

                slide.appendChild(img);
                slide.appendChild(overlay);
                slide.appendChild(content);

                carouselWrapper.appendChild(slide);
            });

            updateCarousel();
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
