/**
 * FEFO 2025 Website JavaScript
 * Adds interactivity and animations to the website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-menu') && !event.target.closest('.menu-toggle') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.querySelector('i').classList.add('fa-bars');
                    menuToggle.querySelector('i').classList.remove('fa-times');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Countdown Timer
    const countdownElement = document.querySelector('.countdown');
    if (countdownElement) {
        // Set the date we're counting down to (May 15, 2025 9:00:00 AM)
        const countDownDate = new Date("May 15, 2025 09:00:00").getTime();
        
        // Update the countdown every 1 second
        const countdownTimer = setInterval(function() {
            // Get current date and time
            const now = new Date().getTime();
            
            // Find the distance between now and the countdown date
            const distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result
            document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
            document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
            
            // If the countdown is finished, display a message
            if (distance < 0) {
                clearInterval(countdownTimer);
                document.getElementById("days").innerHTML = "00";
                document.getElementById("hours").innerHTML = "00";
                document.getElementById("minutes").innerHTML = "00";
                document.getElementById("seconds").innerHTML = "00";
            }
        }, 1000);
    }
    
    // Gallery Lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');
    
    if (galleryItems.length > 0 && lightbox && lightboxImg && closeLightbox) {
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.getAttribute('data-src');
                lightboxImg.src = imgSrc;
                lightbox.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
            });
        });
        
        closeLightbox.addEventListener('click', function() {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
        
        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close lightbox with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.style.display === 'block') {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Registration Form Handling
    const registrationForm = document.getElementById('registration-form');
    const successModal = document.getElementById('success-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalOkBtn = document.getElementById('modal-ok');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            let isValid = true;
            const requiredFields = registrationForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (field.type === 'checkbox') {
                    if (!field.checked) {
                        isValid = false;
                        field.parentElement.classList.add('error');
                    } else {
                        field.parentElement.classList.remove('error');
                    }
                } else if (field.value.trim() === '') {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Check if at least one competition is selected
            const competitionCheckboxes = registrationForm.querySelectorAll('input[name="competitions"]');
            let competitionSelected = false;
            
            competitionCheckboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    competitionSelected = true;
                }
            });
            
            if (!competitionSelected) {
                isValid = false;
                competitionCheckboxes.forEach(checkbox => {
                    checkbox.parentElement.classList.add('error');
                });
            } else {
                competitionCheckboxes.forEach(checkbox => {
                    checkbox.parentElement.classList.remove('error');
                });
            }
            
            // If form is valid, show success modal
            if (isValid && successModal) {
                // In a real application, you would send the form data to a server here
                // For this demo, we'll just show the success modal
                successModal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
                
                // Reset form
                registrationForm.reset();
            }
        });
    }
    
    // Close modal events
    if (closeModal && successModal) {
        closeModal.addEventListener('click', function() {
            successModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
    }
    
    if (modalOkBtn && successModal) {
        modalOkBtn.addEventListener('click', function() {
            successModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    if (successModal) {
        window.addEventListener('click', function(e) {
            if (e.target === successModal) {
                successModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Add animation to competition cards
    const competitionCards = document.querySelectorAll('.competition-card');
    if (competitionCards.length > 0) {
        const observerOptions = {
            threshold: 0.2
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        competitionCards.forEach(card => {
            observer.observe(card);
        });
    }
    
    // Form field animations
    const formFields = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    if (formFields.length > 0) {
        formFields.forEach(field => {
            field.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            field.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.parentElement.classList.remove('focused');
                }
            });
            
            // Check if field already has value on page load
            if (field.value.trim() !== '') {
                field.parentElement.classList.add('focused');
            }
        });
    }
});
