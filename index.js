const openButton = document.getElementById('openMenu');
const closeButton = document.getElementById('closeMenu');
const menuLinks = document.querySelectorAll(".menu__link")

function toggleMenu() {
    document.body.classList.toggle('menu--open');
}

openButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
    link.addEventListener('click', toggleMenu)
});

document.querySelectorAll('.popup-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        openDescription(btn.dataset.title, btn.dataset.description);
      });
    });

    function openDescription(title, description) {
      const overlay = document.createElement('div');
      overlay.classList.add('popup-overlay');

      const popup = document.createElement('div');
      popup.classList.add('popup-card');
      popup.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <button>Close</button>
      `;

      popup.querySelector('button').onclick = () => overlay.remove();
      overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
      overlay.appendChild(popup);
      document.body.appendChild(overlay);
    }