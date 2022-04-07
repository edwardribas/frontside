const specialHeader = document.querySelector("header.hidden"),
specialNav = document.querySelector('header.hidden nav'),
menuSpecialBtn = document.querySelector('header.hidden .menu-toggler')
;

const toggleHeader = () => {
    if(scrollY > 100){
        specialHeader.classList.add("active");
    }else{
        specialHeader.classList.remove("active");

    }
}
window.onscroll = () => toggleHeader();
window.onload = () => toggleHeader();
menuSpecialBtn.onclick = () => specialNav.classList.toggle("active");
