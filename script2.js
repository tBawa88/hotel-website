//We'll apply all the classes through the heaeder 
const header = document.querySelector('.header');
const hamburgerMenu = document.querySelector('.hamburger-menu');

//Click listerner for bars icon
hamburgerMenu.addEventListener('click', ()=>{
    header.classList.toggle('menu-open')
})

// In the original, everything except header is inside main tag
// ie all the sections are inside the main tag