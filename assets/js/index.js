const upButton = document.querySelector('.up-btn'),
      shuffleButton = document.querySelector('.text a'),
      articlesLinks = document.querySelectorAll('article > a')
;

const toggleUpBtn = () => {
    if(scrollY > 300){
        upButton.classList.add('active');
    }else{
        upButton.classList.remove('active');
    }
}

window.onscroll = () => {
    toggleUpBtn();
    if (window.scrollY >= 100) nav.classList.remove('active')
}
window.onload = () => toggleUpBtn()

// Get Random Link
shuffleButton.onclick = () => {
    let links = [];
    for (let link of articlesLinks) {
        links.push(link.getAttribute('href'));
    }

    let randomNumber = Math.floor(Math.random() * links.length);

    shuffleButton.setAttribute('href', links[randomNumber]);
    
    shuffleButton.click();
}
