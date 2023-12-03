document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan elemen kategoriContainer
    let kategoriContainer = document.getElementById('kategoriContainer');

    // Mengambil data dari file JSON menggunakan fetch
    fetch('/database.json')
        .then(response => response.json())
        .then(data => {
            // Mendapatkan kategori unik dari data
            let uniqueCategories = [...new Set(data.data.map(item => item.kategori))];

            // Loop untuk setiap kategori
            uniqueCategories.forEach(function (category) {
                // Membuat elemen <a> untuk setiap kategori
                let aElement = document.createElement('a');
                aElement.href = `/list-kategori.html?kategori=${encodeURIComponent(category)}`;
                aElement.classList.add('category');
                aElement.textContent = category;

                // Menambahkan event listener untuk setiap elemen kategori
                aElement.addEventListener('click', function (event) {
                    event.preventDefault(); // Mencegah navigasi standar

                    // Menyaring data sesuai dengan kategori yang diklik
                    let filteredData = data.data.filter(item => item.kategori === category);

                    // Mengarahkan pengguna ke halaman list-kategori.html dengan parameter kategori
                    window.location.href = `list-kategori.html?kategori=${encodeURIComponent(category)}`;
                });

                // Menambahkan elemen <a> ke dalam kategoriContainer
                kategoriContainer.appendChild(aElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});