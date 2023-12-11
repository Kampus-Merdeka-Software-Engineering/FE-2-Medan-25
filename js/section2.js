// Fetch data from API
fetch('https://be-2-medan-25-production.up.railway.app/artikel')
    .then(response => response.json())
    .then(data => {
        // Rels section
        const relsData = data.data.filter(item => item.kategori === 'Reels');
        const relsContainer = document.getElementById('rels-container');

        relsData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'rels-card';

            const img = document.createElement('img');
            img.width = '200px';
            img.src = item.gambar;
            img.alt = item.title;

            const content = document.createElement('div');
            content.className = 'rels-content';

            const title = document.createElement('h5');
            const titleLink = document.createElement('a');
            titleLink.href = item.deskripsi;
            titleLink.textContent = item.title;

            title.appendChild(titleLink);
            content.appendChild(title);

            card.appendChild(img);
            card.appendChild(content);

            // Append the card to the rels container
            relsContainer.appendChild(card);
        });

        // Earth section
        const earthData = data.data.filter(item => item.kategori === 'Earth');
        const earthContainer = document.getElementById('earth-container');

        earthData.forEach(item => {
            const earthCard = document.createElement('div');
            earthCard.className = 'Earth';

            const earthImg = document.createElement('img');
            earthImg.src = item.gambar;
            earthImg.alt = `Earth Image: ${item.title}`;

            const earthContent = document.createElement('div');
            earthContent.className = 'Earth-content';

            const earthTitle = document.createElement('h3');
            const earthTitleLink = document.createElement('a');
            earthTitleLink.href = `detail.html?id=${encodeURIComponent(item.id)}`;
            earthTitleLink.textContent = item.title;

            earthTitle.appendChild(earthTitleLink);
            earthContent.appendChild(earthTitle);

            const earthDescription = document.createElement('p');
            earthDescription.textContent = item.deskripsi.substring(0, 30);
            

            earthContent.appendChild(earthDescription);

            earthCard.appendChild(earthImg);
            earthCard.appendChild(earthContent);

            // Append the card to the Earth container
            earthContainer.appendChild(earthCard);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
