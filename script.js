// selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');




hamburgerMenu.addEventListener('click', ()=>{
    header.classList.toggle('menu-open');
})

//Event listener for vertical scrollling window.scrollY
window.addEventListener('scroll', function(){
    let windowPosition = window.scrollY > 0; //returns boolean
    header.classList.toggle('active',windowPosition) //toggle method can also accept a boolean as a 
    // seconnd param, the class will only applied when the boolean is true
})