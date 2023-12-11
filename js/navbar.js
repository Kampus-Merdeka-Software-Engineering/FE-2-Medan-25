document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menuIconX = document.querySelector('.menu-icon-x');
    const navLinks = document.querySelector('.nav-links');

    // Sembunyikan menu-icon-x saat halaman dimuat
    menuIconX.style.display = 'none';

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.style.display = 'none';
        menuIconX.style.display = 'block';
    });

    menuIconX.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.style.display = 'block';
        menuIconX.style.display = 'none';
    });
});
// navbar
document.getElementById('navbarId').innerHTML = `
<a href="https://kampus-merdeka-software-engineering.github.io/FE-2-Medan-25/" class="logo"><img src="asset/logo.jpeg"
style="width: 40px; border-radius: 50%; margin-right: 5px;" alt=""><span>Ceplosnews</span></a>
<ul class="nav-links">
<li><a href="https://kampus-merdeka-software-engineering.github.io/FE-2-Medan-25/">Home</a></li>
<li><a href="about.html">About</a></li>                
<li><a href="contact.html">Contact</a></li>
<!-- Formulir Pencarian -->
<form class="search" id="searchForm" action="/search.html" method="GET">
<input type="text" id="searchInput" class="search" name="q" placeholder="search"
    style="width: 200px; height: 30px; border-radius: 50px; padding: 10px; border: 0;">
<button type="submit"
    style="width: 30px; height: 30px; border-radius: 50px; border: 0; color: rgb(0, 0, 0); background-color: white; cursor: pointer;">
    <i class="fa-solid fa-magnifying-glass"></i>
</button>

</form>
</ul>
<div class="menu-icon">
<i class="fa-solid fa-bars-staggered"></i>
</div>
<div class="menu-icon-x">
<i class="fa-solid fa-x"></i>
</div>
`;
