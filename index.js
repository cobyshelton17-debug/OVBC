const openButton = document.getElementById('openMenu');
const closeButton = document.getElementById('closeMenu');
const menuLinks = document.querySelectorAll(".menu__link")

function toggleMenu() {
    document.body.classList.toggle('menu--open');
}

openButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

menuLinks.forEach{
    addEventListener('click', toggleMenu)
};