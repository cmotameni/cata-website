// Form submission handling
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
        const formData = new FormData(this);
        
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            // Show success message
            const toast = document.getElementById('toast');
            toast.textContent = 'Thanks for your interest! We\'ll be in touch soon.';
            toast.style.backgroundColor = '#4CAF50';
            toast.classList.add('show');
            
            // Reset form
            this.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        // Show error message
        const toast = document.getElementById('toast');
        toast.textContent = 'Sorry, there was an error. Please try again.';
        toast.style.backgroundColor = '#dc3545';
        toast.classList.add('show');
        
        console.error('Form submission failed:', error);
    }

    // Hide toast after 3 seconds
    setTimeout(() => {
        const toast = document.getElementById('toast');
        toast.classList.remove('show');
    }, 3000);

    // Reset button state
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
}); 