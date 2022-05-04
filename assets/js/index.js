const upButton = document.querySelector('.up-btn');

const toggleUpBtn = () => {
    if(scrollY > 300){
        upButton.classList.add('active');
    }else{
        upButton.classList.remove('active');
    }
}

window.onscroll = () => {
    toggleUpBtn();
    if(window.scrollY >= 100){
        nav.classList.remove('active')
    }
}
window.onload = () => toggleUpBtn()