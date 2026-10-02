tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#111111',
                    light: '#222222',
                    gold: '#d4af37',
                    goldhover: '#b5952f',
                    whatsapp: '#25D366',
                    whatsapphover: '#1ebe57'
                }
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                heading: ['Oswald', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "linear-gradient(to right bottom, rgba(17, 17, 17, 0.9), rgba(17, 17, 17, 0.8)), url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
                'wood-pattern': "linear-gradient(to right, rgba(17, 17, 17, 0.95), rgba(17, 17, 17, 0.95)), url('https://images.unsplash.com/photo-1555529902-5261145633cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
            }
        }
    }
}

// Script to change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.classList.replace('bg-brand-dark/90', 'bg-brand-dark/95');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.replace('bg-brand-dark/95', 'bg-brand-dark/90');
    }
});