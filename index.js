const backdrop = document.getElementById('menuBackdrop');
const openButton = document.getElementById('openMenu');
const closeButton = document.getElementById('closeMenu');

function toggleMenu() {
    backdrop.classList.toggle('menu--open');
}

openButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
