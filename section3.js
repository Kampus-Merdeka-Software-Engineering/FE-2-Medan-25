document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("https://kind-plum-wasp-wrap.cyclic.app/artikel");
        const data = await response.json();

        // Menampilkan data untuk kategori "Hiburan"
        const hiburanData = data.data.filter(item => item.kategori === "Hiburan");
        const hiburanContainer = document.getElementById("hiburan-container");

        hiburanData.forEach(item => {
            const cardElement = createCardElement(item, "hiburan");
            hiburanContainer.appendChild(cardElement);
        });

        // Menampilkan data untuk kategori "Ekonomi"
        const ekonomiData = data.data.filter(item => item.kategori === "Ekonomi");

        // Menampilkan data header untuk "Ekonomi"
        const headerEkonomiContainer = document.getElementById("header-ekonomi-container");
        const headerEkonomiData = ekonomiData.shift();

        if (headerEkonomiData) {
            const headerCardElement = createCardElement(headerEkonomiData, "header-ekonomi", true);
            headerEkonomiContainer.appendChild(headerCardElement);
        }

        // Menampilkan data kartu untuk "Ekonomi"
        const ekonomiContainer = document.getElementById("ekonomi-container");
        ekonomiData.slice(0, 3).forEach(item => {
            const cardElement = createCardElement(item, "ekonomi", false);
            ekonomiContainer.appendChild(cardElement);
        });
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
});

function createCardElement(item, category, isHeader) {
    const cardElement = document.createElement("div");

    // Mengganti class sesuai dengan kategori
    cardElement.className = category === "hiburan" ? "card-hiburan" : category === "header-ekonomi" ? "card-header-ekonomi" : "card-ekonomi";

    const imgElement = document.createElement("img");
    imgElement.src = item.gambar;
    imgElement.alt = "Card Image";

    const contentElement = document.createElement("div");
    contentElement.className = category === "hiburan" ? "card-hiburan-content" : "card-content-ekonomi";

    const titleElement = document.createElement("h3");
    const titleLinkElement = document.createElement("a");
    titleLinkElement.href = `detail.html?id=${encodeURIComponent(item.id)}`;
    titleLinkElement.textContent = item.title;
    titleElement.appendChild(titleLinkElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = item.deskripsi.substring(0, 30);

    contentElement.appendChild(titleElement);
    contentElement.appendChild(descriptionElement);

    cardElement.appendChild(imgElement);
    cardElement.appendChild(contentElement);

    // Menambahkan elemen overlay jika header Ekonomi
    if (isHeader && category === "ekonomi") {
        const overlayElement = document.createElement("div");
        overlayElement.className = "card-overlay";

        const contentCardElement = document.createElement("div");
        contentCardElement.className = "content-card";

        contentCardElement.appendChild(titleElement.cloneNode(true));
        contentCardElement.appendChild(descriptionElement.cloneNode(true));

        overlayElement.appendChild(contentCardElement);

        // Mengganti isi cardElement dengan overlay untuk header Ekonomi
        cardElement.innerHTML = "";
        cardElement.appendChild(imgElement.cloneNode(true));
        cardElement.appendChild(overlayElement);
    }

    return cardElement;
}
