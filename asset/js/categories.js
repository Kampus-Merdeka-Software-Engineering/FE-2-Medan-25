document.addEventListener('DOMContentLoaded', function () {
    // Kategori-kategori yang diberikan
    let categories = [
        "Politik", "Ekonomi", "Teknologi", "Kesehatan", "Olahraga", "Hiburan",
        "Politik", "Ekonomi", "Teknologi", "Kesehatan", "Olahraga", "Hiburan",
        "Politik", "Ekonomi", "Teknologi", "Kesehatan", "Olahraga", "Hiburan"
    ];

    // Mendapatkan elemen kategoriContainer
    let kategoriContainer = document.getElementById('kategoriContainer');

    // Loop untuk setiap kategori
    categories.forEach(function (category) {
        // Membuat elemen <a> untuk setiap kategori
        let aElement = document.createElement('a');
        aElement.href = '#'; // Atur href sesuai kebutuhan
        aElement.classList.add('category');
        aElement.textContent = category;

        // Menambahkan elemen <a> ke dalam kategoriContainer
        kategoriContainer.appendChild(aElement);
    });
});
