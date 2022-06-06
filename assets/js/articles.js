const specialHeader = document.querySelector("header.hidden"),
    specialNav = document.querySelector('header.hidden nav'),
    menuSpecialBtn = document.querySelector('header.hidden .menu-toggler'),
    normalNav = document.querySelector('header:not(.hidden) nav')
;

const toggleHeader = () => {
    specialHeader.classList.toggle('active', scrollY > 120);
    if (normalNav.classList.contains('active') && scrollY > 120 )
        normalNav.classList.remove('active');
        specialNav.classList.remove('active');
}

window.onscroll = () => toggleHeader();
window.onload = () => toggleHeader();

// Open Menu
menuSpecialBtn.onclick = () => specialNav.classList.toggle("active");

// Load Page Tags
if (document.querySelector('#tags')) {
    let metaTags = document.querySelector('#tags'); // get the content of keywords meta
    metaTags = metaTags.getAttribute('content').split(", "); // get array from string
    tagsWrapper = document.querySelector('.tags'); // calls the tag wrapper

    // iterate above the array
    for(let tag of metaTags) {
        let span = document.createElement('span');
        span.textContent = tag;
        span.onclick = () => scrollTo(0, 0)
        tagsWrapper.appendChild(span)
    }
}
