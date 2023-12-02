document.addEventListener('DOMContentLoaded', function () {
    fetch('database.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const politicData = data.data.filter(item => item.kategori === 'Politik');
            const sportData = data.data.filter(item => item.kategori === 'Olahraga');
            const popularData = data.data.filter(item => item.kategori === 'Popular');
        
            const createCardHTML = (title, gambar, description, category) => {
                const cardClass = category === 'Popular' ? 'card-mini' : 'card';
                return `
                    <div class="${cardClass}">
                        <img src="${gambar}" alt="${title}">
                        <div class="${cardClass}-content">
                            <h3><a href="">${title}</a></h3>
                            <p>${description}</p>
                        </div>
                    </div>
                `;
            };
            
            const politicContainer = document.getElementById('politik-container');
            politicData.forEach(item => {
                politicContainer.innerHTML += createCardHTML(item.title, item.gambar, item.deskripsi, item.kategori);
            });

            // Render Sport cards
            const sportContainer = document.getElementById('sport-container');
            sportData.forEach(item => {
                sportContainer.innerHTML += createCardHTML(item.title, item.gambar, item.deskripsi, item.kategori);
            });

            // Render Popular cards
            const popularContainer = document.getElementById('popular-container');
            popularData.forEach(item => {
                popularContainer.innerHTML += createCardHTML(item.title, item.gambar, item.deskripsi, item.kategori);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
