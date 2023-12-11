document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan parameter kategori dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategory = urlParams.get('kategori');

    // Mendapatkan elemen label kategori
    let kategoriLabel = document.getElementById('kategoriLabel');
    kategoriLabel.textContent = `Kategori - ${selectedCategory || 'Semua Kategori'}`;

    // Mendapatkan elemen listKategoriContainer
    let listKategoriContainer = document.getElementById('listKategoriContainer');

    // Mengambil data dari file JSON menggunakan fetch
    fetch('http://localhost:3000/artikel')
        .then(response => response.json())
        .then(data => {
            // Menyaring data sesuai dengan kategori yang dipilih
            let filteredData = selectedCategory
                ? data.data.filter(item => item.kategori === selectedCategory)
                : data.data;

            // Loop untuk setiap data yang difilter
            filteredData.forEach(function (item) {
                // Membuat elemen card-list-kategori untuk setiap data
                let cardElement = document.createElement('div');
                cardElement.classList.add('card-list-kategori');

                let imgElement = document.createElement('img');
                imgElement.src = item.gambar;
                imgElement.alt = item.title;

                let titleElement = document.createElement('h3');
                let titleLink = document.createElement('a');
                titleLink.href = `detail.html?id=${encodeURIComponent(item.id)}">${item.title}`; // Atur href sesuai kebutuhan
                titleLink.textContent = item.title;
                titleElement.appendChild(titleLink);

                let descElement = document.createElement('p');
                descElement.textContent = item.deskripsi.substring(0, 50);

                // Menambahkan elemen ke dalam card-list-kategori
                cardElement.appendChild(imgElement);
                cardElement.appendChild(titleElement);
                cardElement.appendChild(descElement);

                // Menambahkan elemen card-list-kategori ke dalam listKategoriContainer
                listKategoriContainer.appendChild(cardElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});