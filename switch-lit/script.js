/* =============================================
   Switch-Lit JavaScript
   Handles: Form toggles, FAQ accordion, Sort buttons
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {
    
    // =============================================
    // Writing Partner Toggle (Yes/No)
    // =============================================
    const partnerToggles = document.querySelectorAll('[data-toggle="partner"]');
    const partnerEmailField = document.getElementById('partner-email-field');
    
    partnerToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Remove active class from all partner toggles
            partnerToggles.forEach(t => t.classList.remove('active'));
            // Add active class to clicked toggle
            this.classList.add('active');
            
            // Show/hide email field based on selection
            if (this.dataset.value === 'yes') {
                partnerEmailField.classList.add('visible');
            } else {
                partnerEmailField.classList.remove('visible');
            }
        });
    });
    
    // =============================================
    // First Chapter Toggle (My partner / Me!)
    // =============================================
    const firstChapterToggles = document.querySelectorAll('[data-toggle="first-chapter"]');
    
    firstChapterToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Remove active class from all first chapter toggles
            firstChapterToggles.forEach(t => t.classList.remove('active'));
            // Add active class to clicked toggle
            this.classList.add('active');
        });
    });
    
    // =============================================
    // FAQ Accordion
    // =============================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
    
    // =============================================
    // Library Sort Buttons
    // =============================================
    const sortButtons = document.querySelectorAll('.sort-btn');
    
    sortButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all sort buttons
            sortButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // In a real implementation, this would trigger a table re-sort
            // For now, we just update the visual state
            console.log(`Sorting by: ${this.dataset.sort}`);
        });
    });
    
    // =============================================
    // Smooth scroll for anchor links
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for actual page anchors
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // =============================================
    // Form validation hints (optional enhancement)
    // =============================================
    const emailInput = document.querySelector('input[type="email"]');
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !isValidEmail(this.value)) {
                this.style.borderColor = '#e74c3c';
            } else {
                this.style.borderColor = '#ccc';
            }
        });
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
});
