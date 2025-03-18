function toggleMenu() {
    let menu = document.getElementById('menu');
    let burger = document.querySelector('.burger');
    menu.classList.toggle('open');
    burger.classList.toggle('open');
}


const navbar = document.querySelector('.navbar');
window.onscroll= function() {
    
    if (window.scrollX> 50) { 
        navbar.classList.add('scroll');

    } else{
        navbar.classList.remove('scroll');
    }
};

