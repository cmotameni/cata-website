// Toast notification functionality
class Toast {
    constructor() {
        this.toast = document.getElementById('toast');
        this.defaultText = 'Thanks for your interest! We\'ll be in touch soon.';
        this.defaultBgColor = '#4CAF50';
    }

    show(message = this.defaultText, isError = false) {
        // Set toast properties
        this.toast.textContent = message;
        this.toast.style.backgroundColor = isError ? '#dc3545' : this.defaultBgColor;
        
        // Show toast
        this.toast.classList.add('show');
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            this.hide();
        }, 3000);
    }

    hide() {
        this.toast.classList.remove('show');
        
        // Reset to default styles after animation
        setTimeout(() => {
            this.toast.textContent = this.defaultText;
            this.toast.style.backgroundColor = this.defaultBgColor;
        }, 300); // Match this with the CSS transition time
    }
}

// Create global toast instance
const toast = new Toast(); 