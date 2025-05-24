document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.hero-carousel-container .carousel');
    if (!carousel) return;
    const items = carousel.querySelectorAll('.carousel-item');
    const dots = carousel.querySelectorAll('.dot');
    let currentSlide = 0;
    let interval;

    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all items and dots
        items.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current item and dot
        items[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // Function to show next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % items.length;
        showSlide(currentSlide);
    }

    // Add click event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(interval);
            showSlide(index);
            startAutoSlide();
        });
    });

    // Start auto-sliding
    function startAutoSlide() {
        interval = setInterval(nextSlide, 3500); // Change slide every 3.5 seconds
    }

    // Start the carousel
    showSlide(0);
    startAutoSlide();

    // Pause on hover
    carousel.addEventListener('mouseenter', () => clearInterval(interval));
    carousel.addEventListener('mouseleave', startAutoSlide);
}); 