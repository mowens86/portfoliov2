//jshint esversion: 6

// HAMBURGER MENU
const navBurger = document.getElementById("hamButton");
const navContainer = document.querySelector('.little-nav-flex-container');
navBurger.addEventListener('click', () => {
    
    // Toggle for active burger navbar
    navBurger.classList.toggle("active");
    
    // Call navToggle Function to toggle active setting on and off based on clicks
    navToggle();
});

// Create function for toggling
const navToggle = () => {
    
    // Check windows length and if navbar is active turn display from none to flex
    (navBurger.classList.contains("active")) && (window.innerWidth <= 768) ? navContainer.style.display = "flex"

    // Check if navBurger has the class of active and windows length is greater than or equal to 768px and display none
    : (navBurger.classList.contains("active") === false) && (window.innerWidth <= 768) ? navContainer.style.display = "none"

    // Otherwise display flex
    : navContainer.style.display = "flex";
};


// Update year
const currentYear = document.querySelector('.currentYear');
let date = new Date();
let year = date.getFullYear();
currentYear.innerHTML = year;
