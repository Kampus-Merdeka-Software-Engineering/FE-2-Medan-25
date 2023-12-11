document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan elemen untuk menampilkan hasil pencarian
    let searchContainer = document.getElementById('search-container');
    let searchLabel = document.getElementById('search-label');
    let searchTermSpan = document.getElementById('search-term');

    // Mendapatkan kata kunci pencarian dari URL
    let searchParams = new URLSearchParams(window.location.search);
    let searchTerm = searchParams.get('q');

    // Memeriksa apakah parameter pencarian ada
    if (searchTerm !== null) {
        // Mengatur teks pada label dan elemen span berdasarkan kata kunci pencarian
        searchLabel.textContent = `Search - ${searchTerm}`;
        searchTermSpan.textContent = searchTerm;

        // Mengambil data dari file JSON menggunakan fetch
        fetch('http://localhost:3000/artikel')
            .then(response => response.json())
            .then(data => {
                // Menyaring data berdasarkan judul atau deskripsi yang cocok dengan kata kunci pencarian
                let searchResults = data.data.filter(item =>
                    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.deskripsi.toLowerCase().includes(searchTerm.toLowerCase())
                );

                // Menampilkan hasil pencarian di halaman web
                displaySearchResults(searchResults, searchContainer);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                searchContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
            });
    } else {
        // Tampilkan pesan bahwa tidak ada kata kunci pencarian
        searchContainer.innerHTML = '<p>No search term provided</p>';
    }

    // Fungsi untuk menampilkan hasil pencarian di halaman web
    function displaySearchResults(results, container) {
        // Mengosongkan kontainer sebelum menambahkan hasil pencarian baru
        container.innerHTML = '';

        // Loop untuk setiap hasil pencarian
        results.forEach(function (item) {
            // Membuat elemen card-search untuk setiap hasil pencarian
            let cardElement = document.createElement('div');
            cardElement.classList.add('card-search');

            let imgElement = document.createElement('img');
            imgElement.src = item.gambar;
            imgElement.alt = item.title;

            let titleElement = document.createElement('h3');
            let titleLink = document.createElement('a');
            titleLink.href = 'detail.html?id=' + item.id;
            titleLink.textContent = item.title;
            titleElement.appendChild(titleLink);

            let descElement = document.createElement('p');
            descElement.textContent = item.deskripsi.substring(0, 50);

            // Menambahkan elemen ke dalam card-search
            cardElement.appendChild(imgElement);
            cardElement.appendChild(titleElement);
            cardElement.appendChild(descElement);

            // Menambahkan elemen card-search ke dalam container
            container.appendChild(cardElement);
        });
    }
});
