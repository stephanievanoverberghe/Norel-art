import './assets/scss/styles.scss';
import './index.scss';

const navItems = document.querySelector('.nav-items');
const navItem = document.querySelectorAll('.nav-item');

// Menu burger
// Open and disabled Menu

iconBurger.addEventListener('click', () => {
    if (navItems.style.display === "block") {
        navItems.style.display = "none";
    } else {
        navItems.style.display = "block";
    }
});

// Disabled Menu with nav-item

navItems.addEventListener('click', () => {
    console.log(navItem);
    if (navItems.style.display === "block") {
        navItems.style.display = "none";
    }
});