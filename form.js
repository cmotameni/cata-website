// Form submission handling
document.getElementById('demoForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        jobTitle: document.getElementById('jobTitle').value,
        company: document.getElementById('company').value,
        message: document.getElementById('message').value
    };

    try {
        // Send email using Email.js service
        await emailjs.send(
            'YOUR_SERVICE_ID', // Replace with your Email.js service ID
            'YOUR_TEMPLATE_ID', // Replace with your Email.js template ID
            formData,
            'YOUR_PUBLIC_KEY' // Replace with your Email.js public key
        );

        // Clear the form
        this.reset();
        
        // Show success toast
        toast.show();

    } catch (error) {
        console.error('Error sending email:', error);
        
        // Show error toast with specific message
        let errorMessage = 'There was an error submitting the form. Please try again.';
        
        // Customize error message based on error type
        if (error.message.includes('Network')) {
            errorMessage = 'Network error. Please check your internet connection.';
        } else if (error.message.includes('Invalid template')) {
            errorMessage = 'Service temporarily unavailable. Please try again later.';
        }
        
        toast.show(errorMessage, true);
    }
}); 