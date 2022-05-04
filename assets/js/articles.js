const specialHeader = document.querySelector("header.hidden"),
specialNav = document.querySelector('header.hidden nav'),
menuSpecialBtn = document.querySelector('header.hidden .menu-toggler'),
normalNav = document.querySelector('header:not(.hidden) nav')
;

const toggleHeader = () => {
    if(scrollY > 120){
        specialHeader.classList.add("active");
        normalNav.classList.remove('active');
    }else{
        specialHeader.classList.remove("active");
        specialNav.classList.remove('active');
    }
}
window.onscroll = () => toggleHeader();
window.onload = () => toggleHeader();
menuSpecialBtn.onclick = () => specialNav.classList.toggle("active");
