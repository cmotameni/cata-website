// Function to handle navbar scroll behavior
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const heroCta = document.querySelector('.hero-cta');
    const scrollPosition = window.scrollY;
    
    // Get the position of the hero CTA
    const heroCtaPosition = heroCta.getBoundingClientRect().bottom + window.scrollY;
    
    // Add or remove classes based on scroll position relative to hero CTA
    if (scrollPosition > heroCtaPosition) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleNavbarScroll);

// Call once on page load to set initial state
handleNavbarScroll(); 