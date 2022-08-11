let hamburguer = document.querySelector(".hamburguer");
let navMenu = document.querySelector(".nav-menu");
let logo = document.querySelector('#logo')

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
    logo.classList.toggle('active')
});