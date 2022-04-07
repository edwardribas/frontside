const menuBtn = document.querySelector('.menu-toggler'),
nav = document.querySelector('nav'),
navLink = document.querySelectorAll('nav ul li a'),
upButton = document.querySelector('.up-btn');

const toggleMenu = () => nav.classList.toggle('active');

menuBtn.onclick = () => toggleMenu();



const toggleUpBtn = () => {
    if(scrollY > 300){
        upButton.classList.add('active');
    }else{
        upButton.classList.remove('active');
    }
}

window.onscroll = () => toggleUpBtn()
window.onload = () => toggleUpBtn()