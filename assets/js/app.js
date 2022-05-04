const menuBtn = document.querySelector('.menu-toggler'),
nav = document.querySelector('nav');

const toggleMenu = () => nav.classList.toggle('active');
menuBtn.onclick = () => toggleMenu();



