// Placeholder for any JavaScript functionalities
// Add interactivity for navigation, product views, or user actions here

// Example: Mobile-friendly navigation toggle
const navToggle = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Placeholder function for 'Explore now' button interaction
const exploreButton = document.querySelector('.btn');
if (exploreButton) {
    exploreButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Explore functionality is coming soon!');
    });
}
