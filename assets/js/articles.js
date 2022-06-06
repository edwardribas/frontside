const specialHeader = document.querySelector("header.hidden"),
    specialNav = document.querySelector('header.hidden nav'),
    menuSpecialBtn = document.querySelector('header.hidden .menu-toggler'),
    normalNav = document.querySelector('header:not(.hidden) nav'),
    metaTags = document.querySelector('#tags').getAttribute('content').split(", "),
    tagsWrapper = document.querySelector('.tags')
;

const toggleHeader = () => {
    specialHeader.classList.toggle('active', scrollY > 120);
    normalNav.classList.toggle('active', scrollY > 120);
}

window.onscroll = () => toggleHeader();
window.onload = () => toggleHeader();

menuSpecialBtn.onclick = () => specialNav.classList.toggle("active");

window.onload = () => {
    for(let tag of metaTags) {
        let span = document.createElement('span');
        span.textContent = tag;
        tagsWrapper.appendChild(span)
    }
}