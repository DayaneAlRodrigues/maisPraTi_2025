const menuHamburguer = document.getElementById('menu_hamburguer');
const navMenu = document.getElementById('navMenu');
const arrow = document.getElementById('arrow_up');
menuHamburguer.addEventListener('click', () =>
    navMenu.classList.toggle('open')
);

arrow.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
});
