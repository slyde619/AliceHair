
// Data Arrays
const servicesData = [
    {
        icon: 'fas fa-magic',
        title: 'Styling',
        description: 'From sleek to curly — get styled for any occasion.'
    },
    {
        icon: 'fas fa-air-freshener',
        title: 'Extensions',
        description: 'Premium human hair extensions for added length and volume.'
    },
    {
        icon: 'fas fa-spa',
        title: 'Treatments',
        description: 'Revitalize your hair with nourishing care and deep treatments.'
    }
];

const galleryData = [
    {
        id: 1,
        src: './assets/images/braid-1.png',
        alt: 'A close-up photograph showing the back of a woman’s head with a neatly styled French braid. Her straight, brown hair is tied into a smooth, symmetrical braid that falls down her back. '
    },
    {
        id: 2,
        src: './assets/images/braid-2.png',
        alt: 'A side-profile photo of a Nigerian woman with dark skin and natural black hair styled in neat cornrows that lead into a single braid.'
    },
    {
        id: 3,
        src: './assets/images/braid-1.png',
        alt: 'A close-up photograph showing the back of a woman’s head with a neatly styled French braid. Her straight, brown hair is tied into a smooth, symmetrical braid that falls down her back.'
    },
    {
        id: 4,
        src: './assets/images/braid-2.png',
        alt: 'A side-profile photo of a Nigerian woman with dark skin and natural black hair styled in neat cornrows that lead into a single braid.'
    },
    {
        id: 5,
        src: './assets/images/braid-1.png',
        alt: 'A close-up photograph showing the back of a woman’s head with a neatly styled French braid. Her straight, brown hair is tied into a smooth, symmetrical braid that falls down her back.'
    },
    {
        id: 6,
        src: './assets/images/braid-2.png',
        alt: 'A side-profile photo of a Nigerian woman with dark skin and natural black hair styled in neat cornrows that lead into a single braid.'
    }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const servicesGrid = document.getElementById('services-grid');
const galleryGrid = document.getElementById('gallery-grid');
const contactForm = document.getElementById('contact-form');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    renderServices();
    renderGallery();
    setupEventListeners();
    setupScrollEffects();
    setupIntersectionObserver();
});

// Render Services
function renderServices() {
    const servicesHTML = servicesData.map(service => `
        <div class="service-card" data-aos="fade-up">
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
    
    servicesGrid.innerHTML = servicesHTML;
}

// Render Gallery
function renderGallery() {
    const galleryHTML = galleryData.map(item => `
        <div class="gallery-item" data-aos="fade-up" data-aos-delay="${item.id * 100}">
            <img src="${item.src}" alt="${item.alt}" loading="lazy">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
    `).join('');
    
    galleryGrid.innerHTML = galleryHTML;
}

// Setup Event
// Setup Event Listeners
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Navigation smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-section');
            scrollToSection(targetId);
            
            // Close mobile menu
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Update active link
            updateActiveLink(link);
        });
    });

    // Contact form submission
    contactForm.addEventListener('submit', handleFormSubmission);

    // Gallery item clicks (lightbox effect)
    document.addEventListener('click', (e) => {
        if (e.target.closest('.gallery-item')) {
            const img = e.target.closest('.gallery-item').querySelector('img');
            openLightbox(img.src, img.alt);
        }
    });
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Update active navigation link
function updateActiveLink(activeLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Scroll effects
function setupScrollEffects() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar background on scroll
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        
        // Parallax effect for hero image
        const heroImage = document.querySelector('.hero-img');
        if (heroImage) {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Update active nav link based on visible section
                updateActiveNavigation(entry.target.id);
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        observer.observe(section);
    });

    // Observe cards with stagger effect
    const cards = document.querySelectorAll('.service-card, .gallery-item');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 150);
                }
            });
        }, observerOptions);
        
        cardObserver.observe(card);
    });
}

// Update active navigation based on scroll position
function updateActiveNavigation(activeSectionId) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === activeSectionId) {
            link.classList.add('active');
        }
    });
}

// Handle form submission
function handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        contactForm.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Lightbox functionality
function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="${src}" alt="${alt}">
            <div class="lightbox-caption">${alt}</div>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    // Animate in
    requestAnimationFrame(() => {
        lightbox.style.opacity = '1';
        lightbox.querySelector('.lightbox-content').style.transform = 'scale(1)';
    });
    
    // Close handlers
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard handler
    document.addEventListener('keydown', handleLightboxKeydown);
    
    function closeLightbox() {
        lightbox.style.opacity = '0';
        lightbox.querySelector('.lightbox-content').style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            document.body.removeChild(lightbox);
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleLightboxKeydown);
        }, 300);
    }
    
    function handleLightboxKeydown(e) {
        if (e.key === 'Escape') closeLightbox();
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    });
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}