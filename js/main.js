// Updated Data Arrays - Extended gallery with categories
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

// Extended gallery data with categories
const galleryData = [
    // Model Images
    {
        id: 1,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504168/AliceHair/tinified/gallery-image-4_j4fgdt.jpg',
        alt: "A woman sitting in a tub with a pink shirt on",
        category: 'alicequeen'
    },
    {
        id: 2,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504168/AliceHair/tinified/gallery-image-2_zkjaak.jpg',
        alt: 'A woman with glasses sitting on a chair',
        category: 'alicequeen'
    },
    {
        id: 3,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504168/AliceHair/tinified/gallery-image-7_yjrpdo.jpg',
        alt: "A woman with long twists in her hair",
        category: 'alicequeen'
    },
    {
        id: 4,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504168/AliceHair/tinified/gallery-image-19_gxy0bm.jpg',
        alt: 'A woman in a pink top with a braid in her hair',
        category: 'alicequeen'
    },
    {
        id: 5,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504157/AliceHair/tinified/gallery-image-8_lkcu6k.jpg',
        alt: "A woman with pink braids holding a cell phone.",
        category: 'alicequeen'
    },
    {
        id: 6,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504158/AliceHair/tinified/gallery-image-10_nnctoj.jpg',
        alt: 'A little girl with long braids standing on a street',
        category: 'alicequeen'
    },
    {
        id: 7,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504158/AliceHair/tinified/gallery-image-1_snmo7s.jpg',
        alt: 'A woman with long braids is posing for a picture',
        category: 'alicequeen'
    },
    {
        id: 8,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504156/AliceHair/tinified/gallery-image-5_p5bpac.jpg',
        alt: 'a little girl sitting in a chair with a butterfly shirt on',
        category: 'alicequeen'
    },
    {
        id: 11,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504143/AliceHair/tinified/gallery-image-6_j8iszu.jpg',
        alt: 'a woman sitting in front of a poster',
        category: 'alicequeen'
    },
    {
        id: 13,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504150/AliceHair/tinified/gallery-image-3_wtogis.jpg',
        alt: 'a woman sitting in a tub with her hair in a pony tail',
        category: 'alicequeen'
    },
    {
        id: 14,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504143/AliceHair/tinified/gallery-image-9_amhefz.jpg',
        alt: 'a woman wearing glasses looking down at her cell phone',
        category: 'alicequeen'
    },
    
    // Product Images
    {
        id: 9,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504164/AliceHair/tinified/gallery-image-16_ife5hj.jpg',
        alt: 'A shade of burgundy Alice super jumbo braid hair extension',
        category: 'product'
    },
    {
        id: 10,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504168/AliceHair/tinified/gallery-image-11_neanes.jpg',
        alt: 'A pile of alice super jumbo braid hair extension products sitting on top of a cardboard box',
        category: 'product'
    },
    {
        id: 12,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504154/AliceHair/tinified/gallery-image-14_dfcuzy.jpg',
        alt: 'A shade of red Alice super jumbo braid hair extension',
        category: 'product'
    },
    {
        id: 15,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504121/AliceHair/tinified/gallery-image-12_hugcwm.jpg',
        alt: 'a bunch of white alice jumbo braids are in a box',
        category: 'product'
    },
    {
        id: 16,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504117/AliceHair/tinified/gallery-image-18_matojj.jpg',
        alt: ' a bunch of white hair sitting on top of a cardboard box',
        category: 'product'
    },
    {
        id: 17,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504117/AliceHair/tinified/gallery-image-13_iqfh2f.jpg',
        alt: 'two packets of medium brown alice jumbo hair extension inside a brown carton',
        category: 'product'
    },
    {
        id: 18,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504117/AliceHair/tinified/gallery-image-17_eiglv3.jpg',
        alt: 'two packets of purple alice jumbo hair extension sitting on top of a cardboard box',
        category: 'product'
    },
    {
        id: 19,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1748504117/AliceHair/tinified/gallery-image-15_etp23z.jpg',
        alt: 'Purple Alice super jumbo braiding hair extensions',
        category: 'product'
    },
    {
        id: 20,
        src: './assets/images/alice-model.webp',
        alt: 'Alice hair brand model posing for photo',
        category: 'model'
    },
    {
        id: 21,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1751192578/AliceHair/tinified/alice-braid_deg2pv.jpg',
        alt: 'A pack of five different types of braid',
        category: 'product'
    },
    {
        id: 22,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1751192593/AliceHair/tinified/alice-braid-2_ime5bx.jpg',
        alt: 'A package of different colored hair sitting on top of a white wall',
        category: 'product'
    },
    {
        id: 23,
        src: 'https://res.cloudinary.com/slydegee/image/upload/v1751192598/AliceHair/tinified/alice-braid-3_ej2bvt.jpg',
        alt: 'A package of six different types of braids',
        category: 'product'
    }
];

// Gallery pagination variables
let currentGalleryPage = 0;
let activeCategory = 'all';
const imagesPerPage = 8;
let displayedImages = [];
let filteredData = [];

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
    initializeGallery();
    setupEventListeners();
    setupScrollEffects();
    setupIntersectionObserver();
});

// Render Services (unchanged)
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

// Initialize Gallery with categories and pagination
function initializeGallery() {
    displayedImages = [];
    currentGalleryPage = 0;
    filterByCategory('all');
}

// Filter gallery by category
function filterByCategory(category) {
    activeCategory = category;
    currentGalleryPage = 0;
    displayedImages = [];
    
    if (category === 'all') {
        filteredData = [...galleryData];
    } else {
        filteredData = galleryData.filter(item => item.category === category);
    }
    
    loadMoreImages();
    updateCategoryTabs();
}

// Update active category tab
function updateCategoryTabs() {
    const tabs = document.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.category === activeCategory) {
            tab.classList.add('active');
        }
    });
}

// Load more images function
function loadMoreImages() {
    const startIndex = currentGalleryPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const newImages = filteredData.slice(startIndex, endIndex);
    
    if (newImages.length > 0) {
        displayedImages = [...displayedImages, ...newImages];
        renderGallery();
        currentGalleryPage++;
    }
}

// Get category counts for tab labels
function getCategoryCounts() {
    const counts = {
        all: galleryData.length,
        model: galleryData.filter(item => item.category === 'model').length,
        product: galleryData.filter(item => item.category === 'product').length,
        alicequeen: galleryData.filter(item => item.category === 'alicequeen').length
    };
    return counts;
}

// Render Gallery with category tabs and View More button
function renderGallery() {
    const counts = getCategoryCounts();
    
    // Category tabs HTML
    const tabsHTML = `
        <div class="gallery-tabs">
            <button class="category-tab ${activeCategory === 'all' ? 'active' : ''}" data-category="all">
                All <span class="tab-count">(${counts.all})</span>
            </button>
            <button class="category-tab ${activeCategory === 'model' ? 'active' : ''}" data-category="model">
                Models <span class="tab-count">(${counts.model})</span>
            </button>
            <button class="category-tab ${activeCategory === 'product' ? 'active' : ''}" data-category="product">
                 Products <span class="tab-count">(${counts.product})</span>
            </button>
            <button class="category-tab ${activeCategory === 'alicequeen' ? 'active' : ''}" data-category="alicequeen">
                Alice Queens <span class="tab-count">(${counts.alicequeen})</span>
            </button>
        </div>
    `;
    
    // Gallery items HTML
    const galleryHTML = displayedImages.map((item, index) => `
        <div class="gallery-item" data-aos="fade-up" data-aos-delay="${(index % imagesPerPage) * 100}" data-category="${item.category}">
            <img src="${item.src}" alt="${item.alt}" loading="lazy">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
                <div class="gallery-category">${item.category}</div>
            </div>
        </div>
    `).join('');
    
    // Check if there are more images to load
    const hasMoreImages = displayedImages.length < filteredData.length;
    const remainingImages = filteredData.length - displayedImages.length;
    
    const viewMoreButton = hasMoreImages ? `
        <div class="view-more-container">
            <button class="view-more-btn" id="view-more-btn">
                <span>Load More ${activeCategory === 'all' ? '' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1) + 's'} (${remainingImages} remaining)</span>
                <i class="fas fa-chevron-down"></i>
            </button>
        </div>
    ` : '';
    
    galleryGrid.innerHTML = tabsHTML + '<div class="gallery-items-grid">' + galleryHTML + '</div>' + viewMoreButton;
    
    // Add event listeners to category tabs
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            filterByCategory(category);
        });
    });
    
    // Add event listener to the View More button
    if (hasMoreImages) {
        const viewMoreBtn = document.getElementById('view-more-btn');
        viewMoreBtn.addEventListener('click', handleViewMore);
    }
    
    // Re-observe new gallery items for animations
    observeGalleryItems();
}

// Handle View More button click
function handleViewMore() {
    const viewMoreBtn = document.getElementById('view-more-btn');
    
    // Show loading state
    viewMoreBtn.innerHTML = `
        <span><i class="fas fa-spinner fa-spin"></i> Loading...</span>
    `;
    viewMoreBtn.disabled = true;
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        loadMoreImages();
        
        // Scroll to the newly loaded images
        const newImages = document.querySelectorAll('.gallery-item');
        const targetImage = newImages[displayedImages.length - imagesPerPage];
        if (targetImage) {
            targetImage.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    }, 500);
}

// Observe gallery items for animations
function observeGalleryItems() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe only the newly added gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    const startObserving = Math.max(0, galleryItems.length - imagesPerPage);
    
    for (let i = startObserving; i < galleryItems.length; i++) {
        const item = galleryItems[i];
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        galleryObserver.observe(item);
    }
}

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
                entry.target.transform = 'translateY(0)';
                
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

    // Observe service cards with stagger effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
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