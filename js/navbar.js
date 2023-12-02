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
<a href="#" class="logo"><img src="asset/images/logo.jpeg"
style="width: 40px; border-radius: 50%; margin-right: 5px;" alt=""><span>Ceplosnews</span></a>
<ul class="nav-links">
<li><a href="/">Home</a></li>
<li><a href="src/about.html">About</a></li>
<li><a href="#">Services</a></li>
<li><a href="src/contact.html">Contact</a></li>
<form class="search" action="/cc.html">
<input type="text" class="search" placeholder="search"
    style="width: 200px; height: 30px; border-radius: 50px 0 0 50px; padding: 10px; border: 0;"><button
    type="submit"
    style="width: 30px; height: 30px; border-radius: 0 50px 50px 0; border: 0; color: rgb(0, 0, 0); background-color: white;"><i
        class="fa-solid fa-magnifying-glass"></i></button>
</form>
<li>
<a href="src/login.html"><i class="fa-solid fa-user" style="color: #ffffff;"></i> Login</a>
</li>
</ul>
<div class="menu-icon">
<i class="fa-solid fa-bars-staggered"></i>
</div>
<div class="menu-icon-x">
<i class="fa-solid fa-x"></i>
</div>
`;
