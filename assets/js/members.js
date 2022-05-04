const switcher = document.querySelector('toggler'),
      toggles = document.querySelectorAll('span.option')
      overlay = document.querySelector('span.overlay'),
      editores = document.querySelector('.editores'),
      membros = document.querySelector('.membros')
;

const toggleGallery = bool => {
    editores.classList.toggle('active', bool)
    membros.classList.toggle('active', !bool)
}
window.onload = () => {
    toggleGallery(1)
}
toggles.forEach(e => {
    e.onclick = () => {
        if(!e.classList.contains('active')){
            toggles.forEach(e => e.classList.remove('active'));
            e.classList.add('active');
            if(e.matches(':nth-of-type(1)')){
                overlay.classList.remove('active');
                toggleGallery(1);
            }else{
                overlay.classList.add('active')
                toggleGallery();
            }
        }
    }
})
