async function fetchData() {
    try {
        const response = await fetch('slide.json'); // Ganti URL_API_ANDA dengan URL API yang sesuai
        const data = await response.json();

        // Panggil fungsi untuk membangun slide dari data API
        buildSlides(data.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to build slides from data
function buildSlides(data) {
    const carouselWrapper = document.getElementById('carouselWrapper');

    // Filter data berdasarkan kategori "slide"
    const filteredData = data.filter(item => item.kategori === 'slide');

    // Batasi jumlah slide yang akan ditampilkan
    const slidesToDisplay = filteredData.slice(0, 3);

    // Loop through the filtered data and create a slide for each item
    slidesToDisplay.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';

        const img = document.createElement('img');
        img.src = item.gambar;
        img.alt = `Slide ${index + 1}`;

        const darkOverlay = document.createElement('div');
        darkOverlay.className = 'dark-overlay';

        const slideContent = document.createElement('div');
        slideContent.className = 'slide-content';

        const title = document.createElement('h2');
        const titleLink = document.createElement('a');
        titleLink.href = '#'; // Ganti dengan link yang sesuai jika ada
        titleLink.textContent = item.title;
        title.appendChild(titleLink);

        const blockquote = document.createElement('blockquote');
        blockquote.textContent = item.deskripsi;

        // Append elements to the slide
        slideContent.appendChild(title);
        slideContent.appendChild(blockquote);
        slide.appendChild(img);
        slide.appendChild(darkOverlay);
        slide.appendChild(slideContent);

        // Append the slide to the carousel wrapper
        carouselWrapper.appendChild(slide);
    });
}

// Function to show the next slide
function nextSlide() {
    // Implement logic to show the next slide
}

// Function to show the previous slide
function prevSlide() {
    // Implement logic to show the previous slide
}

// Fetch data when the page loads
fetchData();