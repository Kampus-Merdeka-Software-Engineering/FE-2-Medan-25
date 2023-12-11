
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    fetch('https://be-2-medan-25-production.up.railway.app/artikel')
        .then(response => response.json())
        .then(data => {
            const detailItem = data.data.find(item => item.id === parseInt(id));

            if (detailItem) {
                document.getElementById('detailTitle').textContent = detailItem.title;

                const detailImage = document.getElementById('detailImage');
                detailImage.src = detailItem.gambar;
                detailImage.alt = `Card-isi-detail Image: ${detailItem.title}`;

                // Adding the additional detail elements
                const isiDetail = document.querySelector('.isi-detail');
                isiDetail.innerHTML = `
                    <div class="card-detail">
                        <img src="${detailItem.gambar}" alt="Card-isi-detail Image 1">
                        <div class="card-detail-content">
                            <h5>${detailItem.time}</h5>
                            <h3>kategori - ${detailItem.kategori}</h3>
                            <p>${detailItem.deskripsi}</p>
                        </div>
                    </div>
                `;
            } else {
                console.error('Item not found');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
