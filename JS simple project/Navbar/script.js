const menu = document.getElementById('menu');
const close = document.getElementById('close');
const headerNav = document.getElementById('header-nav');

menu.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);

function showMenu() {
    headerNav.style.right = "0%";
}

function hideMenu(){
    headerNav.style.right = "-100%";
}