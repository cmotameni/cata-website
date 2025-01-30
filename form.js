// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Create FormData object
            const formData = new FormData(this);

            console.log('Submitting form to Web3Forms...');
            
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            const data = await response.json();
            console.log('Response from Web3Forms:', data);

            if (data.success) {
                // Show success message
                const toast = document.getElementById('toast');
                toast.textContent = 'Thanks for your interest! We\'ll be in touch soon.';
                toast.style.backgroundColor = '#4CAF50';
                toast.classList.add('show');
                
                // Reset form
                this.reset();
            } else {
                throw new Error(data.message || 'Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            
            // Show error message
            const toast = document.getElementById('toast');
            toast.textContent = 'Sorry, there was an error. Please try again.';
            toast.style.backgroundColor = '#dc3545';
            toast.classList.add('show');
        } finally {
            // Hide toast after 3 seconds
            setTimeout(() => {
                const toast = document.getElementById('toast');
                if (toast.classList.contains('show')) {
                    toast.classList.remove('show');
                }
            }, 3000);

            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}); 