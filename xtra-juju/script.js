// Datos de ejemplo para la galería
const galleryData = [
    {
        id: 1,
        title: "Uñas Francesas Modernas",
        category: "uñas-gel",
        image: "images/xtra-1.jpg",
        description: "Diseño elegante con toque moderno"
    },
    {
        id: 2,
        title: "Diseño Floral Primavera",
        category: "diseños",
        image: "images/xtra-2.jpg",
        description: "Colores vibrantes y flores delicadas"
    },
    {
        id: 3,
        title: "Uñas Acrílicas Largas",
        category: "uñas-acrilicas",
        image: "images/xtra-3.jpg",
        description: "Extensión acrílica con forma coffin"
    },
    {
        id: 4,
        title: "Efecto Marmol",
        category: "diseños",
        image: "images/xtra-4.jpg",
        description: "Técnica de mármol en tonos pastel"
    },
    {
        id: 5,
        title: "Uñas Esculpidas Naturales",
        category: "esculpidas",
        image: "images/xtra-5.jpg",
        description: "Forma natural con acabado brillante"
    },
    {
        id: 6,
        title: "Diseño con Piedras",
        category: "diseños",
        image: "images/xtra-6.jpg",
        description: "Decoración con cristales SWAROVSKI"
    },
    {
        id: 7,
        title: "Uñas de Gel Color Nude",
        category: "uñas-gel",
        image: "images/xtra-7.png",
        description: "Color nude con brillo sutil"
    },
    {
        id: 8,
        title: "Diseño Geométrico",
        category: "diseños",
        image: "images/xtra-8.jpg",
        description: "Líneas geométricas en blanco y negro"
    },
    {
        id: 9,
        title: "Uñas Acrílicas con Diseño",
        category: "uñas-acrilicas",
        image: "images/xtra-9.jpg",
        description: "Uñas largas con arte abstracto"
    }
];

// Variables globales
let currentFilter = 'todos';
let isLightboxOpen = false;

// DOM Elements
const galleryGrid = document.getElementById('gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    setupEventListeners();
    setupSmoothScrolling();
});

// Renderizar galería
function renderGallery() {
    galleryGrid.innerHTML = '';
    
    galleryData.forEach((item, index) => {
        const galleryItem = createGalleryItem(item, index);
        galleryGrid.appendChild(galleryItem);
    });
    
    // Animar entrada de elementos
    setTimeout(() => {
        document.querySelectorAll('.gallery-item').forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

// Crear elemento de galería
function createGalleryItem(item, index) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.style.opacity = '0';
    div.style.transform = 'translateY(20px)';
    div.style.transition = 'all 0.5s ease';
    
    div.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
            <div class="gallery-title">${item.title}</div>
            <div class="gallery-category">${getCategoryName(item.category)}</div>
        </div>
    `;
    
    div.addEventListener('click', () => openLightbox(item));
    
    return div;
}

// Obtener nombre de categoría
function getCategoryName(category) {
    const categoryNames = {
        'uñas-acrilicas': 'Uñas Acrílicas',
        'uñas-gel': 'Uñas de Gel',
        'diseños': 'Diseños Creativos',
        'esculpidas': 'Uñas Esculpidas'
    };
    return categoryNames[category] || category;
}

// Configurar event listeners
function setupEventListeners() {
    // Lightbox
    closeLightbox.addEventListener('click', closeLightboxFunc);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightboxFunc();
        }
    });
    
    // Teclas para lightbox
    document.addEventListener('keydown', (e) => {
        if (isLightboxOpen) {
            if (e.key === 'Escape') {
                closeLightboxFunc();
            }
        }
    });
    
    // Menú móvil
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer click en enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Scroll header
    window.addEventListener('scroll', handleScroll);
}

// Abrir lightbox
function openLightbox(item) {
    lightboxImg.src = item.image;
    lightboxCaption.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p><strong>Categoría:</strong> ${getCategoryName(item.category)}</p>
    `;
    lightbox.style.display = 'block';
    isLightboxOpen = true;
    document.body.style.overflow = 'hidden';
}

// Cerrar lightbox
function closeLightboxFunc() {
    lightbox.style.display = 'none';
    isLightboxOpen = false;
    document.body.style.overflow = 'auto';
}

// Manejar formulario de contacto
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simular envío del formulario
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // Mostrar mensaje de éxito
        showNotification('¡Mensaje enviado con éxito! Te contactaré pronto.', 'success');
        
        // Resetear formulario
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Crear mensaje para WhatsApp (opcional)
        const whatsappMessage = `Hola, soy ${name}. Estoy interesada en: ${message}. Mi teléfono: ${phone}, email: ${email}`;
        console.log('Mensaje para WhatsApp:', whatsappMessage);
    }, 2000);
}

// Mostrar notificación
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Configurar scroll suave
function setupSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector('#galeria');
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Manejar scroll del header
function handleScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(255, 255, 255, 0.15)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(255, 255, 255, 0.1)';
    }
}

// Lazy loading para imágenes
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Animación de números (para estadísticas si se agregan)
function animateNumbers() {
    const numbers = document.querySelectorAll('.animate-number');
    
    numbers.forEach(number => {
        const target = parseInt(number.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateNumber = () => {
            current += step;
            if (current < target) {
                number.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                number.textContent = target;
            }
        };
        
        updateNumber();
    });
}

// Función para agregar nuevas imágenes dinámicamente
function addNewImage(imageData) {
    galleryData.push(imageData);
    renderGallery();
    showNotification('¡Nueva imagen agregada con éxito!', 'success');
}

// Función para exportar datos (para futuro uso)
function exportGalleryData() {
    const dataStr = JSON.stringify(galleryData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'gallery-data.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Inicializar lazy loading cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', setupLazyLoading);
