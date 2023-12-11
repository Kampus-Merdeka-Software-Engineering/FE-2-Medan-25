
document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan elemen formulir pencarian
    let searchForm = document.getElementById('searchForm');

    // Menambahkan event listener pada formulir pencarian
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah pengiriman formulir standar

        // Mendapatkan nilai pencarian dari input
        let searchInput = document.getElementById('searchInput');
        let searchTerm = searchInput.value.toLowerCase();

        // Mengalihkan pengguna ke halaman search.html dengan kata kunci pencarian sebagai parameter
        window.location.href = 'search.html?q=' + encodeURIComponent(searchTerm);
    });
});

