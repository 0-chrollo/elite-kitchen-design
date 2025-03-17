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


























// Banner Slider Functionality
const slides = document.querySelectorAll('.banner-slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
let slideInterval;
const slideDelay = 5000; // 5 seconds

// Initialize the slider
function initSlider() {
  // Set up automatic sliding
  startSlideTimer();
  
  // Add click events to indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      goToSlide(index);
      resetSlideTimer();
    });
  });

  // Create floating particle effects
  createParticles();
}

// Go to a specific slide
function goToSlide(index) {
  // Remove active class from current slide and indicator
  slides[currentSlide].classList.remove('active');
  indicators[currentSlide].classList.remove('active');

  // Update current slide index
  currentSlide = index;

  // Loop slides if index is out of bounds
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Add active class to the new current slide and indicator
  slides[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');
}

// Start automatic slide transition
function startSlideTimer() {
  slideInterval = setInterval(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, slideDelay);
}

// Reset the slide timer when user manually changes slides
function resetSlideTimer() {
  clearInterval(slideInterval);
  startSlideTimer();
}


// Header Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Initialize the slider on page load
window.onload = initSlider;













