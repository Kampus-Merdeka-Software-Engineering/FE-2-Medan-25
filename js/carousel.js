document.addEventListener('DOMContentLoaded', function () {
  // Fungsi untuk melakukan fetch data dari JSON
  function fetchData() {
      fetch('https://be-2-medan-25-production.up.railway.app/artikel')
          .then(response => response.json())
          .then(data => displayData(data.data))
          .catch(error => console.error('Error fetching data:', error));
  }

  // Fungsi untuk menampilkan data di HTML
  function displayData(data) {
      // Filter data berdasarkan kategori 'Populer'
      const filteredData = data.filter(item => item.kategori === 'Populer');

      // Tampilkan data di carousel
      document.getElementById('carousel-title').textContent = filteredData[0].title;
      document.getElementById('carousel-description').textContent = filteredData[0].deskripsi.substring(0, 100);
      document.getElementById('carousel-image').src = filteredData[0].gambar;

      // Tampilkan data di card-header-container
      const cardHeaderContainer = document.getElementById('card-header-container');
      filteredData.slice(1, 5).forEach(item => {
          const cardHeader = document.createElement('div');
          cardHeader.classList.add('card-header');

          const cardHeaderOverlay = document.createElement('div');
          cardHeaderOverlay.classList.add('card-header-overlay');

          const cardHeaderContent = document.createElement('div');
          cardHeaderContent.classList.add('card-header-content');

          const cardTitle = document.createElement('h3');
          const titleLink = document.createElement('a');
          titleLink.href = 'detail.html?id=${encodeURIComponent(item.id)}';
          titleLink.textContent = item.title.substring(0, 40);
          cardTitle.appendChild(titleLink);

          const cardDescription = document.createElement('p');
          cardDescription.textContent = item.deskripsi.substring(0, 70);

          cardHeaderContent.appendChild(cardTitle);
          cardHeaderContent.appendChild(cardDescription);

          const cardImage = document.createElement('img');
          cardImage.src = item.gambar;
          cardImage.alt = '';

          cardHeader.appendChild(cardHeaderOverlay);
          cardHeader.appendChild(cardHeaderContent);
          cardHeader.appendChild(cardImage);

          cardHeaderContainer.appendChild(cardHeader);
      });
  }

  // Panggil fungsi fetchData untuk mendapatkan dan menampilkan data
  fetchData();
});