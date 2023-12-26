let menu = document.getElementById('menu');
let menuBTn = document.querySelector('.menuBtn');
let closeBtn = document.querySelector('.closeBtn');

function openMenu(){
    menu.style.display = 'block';
    menuBTn.style.display = 'none';
    closeBtn.style.display = 'block';

}

function closeMenu(){
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBTn.style.display = 'block';
}