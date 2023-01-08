let header = document.querySelector(".header")

console.log(window.location)

header.innerHTML = `
<nav class="navbar">
    <div class="navbar-container">
    <div class="navbar-logo">
        <a href='/'>
        <img class="navbar-logo-img" src="../utils/logo-removebg.png" alt="" />
        </a>
    </div>
    <div class="navbar-menu-list">
        <ul class="nav-list">
        <li class="nav-link-home ${window.location.pathname.includes('index') ? 'active' : 'inactive'}"><a href="./index.html"><span>Home</span></a></li>
        <li class="nav-link-menu ${window.location.pathname.includes('menu') ? 'active' : 'inactive'}"><a href="./menu.html"><span>Menu</span></a></li>
        <li class="nav-link-about-us ${window.location.pathname.includes('about') ? 'active' : 'inactive'}"><a href="./about.html"><span>About Us</span></a></li>
        <li class="nav-link-contact ${window.location.pathname.includes('contact') ? 'active' : 'inactive'}"><a href="./contact.html"><span>Contact</span></a></li>
        <li class="nav-link-shopping-cart">
            <i class="fas fa-shopping-cart"></i>
        </li>
        </ul>
    </div>
    </div>
</nav>`