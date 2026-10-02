tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#000000', /* Preto puro para fundir com a logo */
                    light: '#161616', /* Cinza muito escuro para contraste de cards */
                    orange: '#F47E20', /* Laranja extraído da logo */
                    orangehover: '#D96B18',
                    whatsapp: '#25D366',
                    whatsapphover: '#1ebe57'
                }
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                heading: ['Oswald', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "linear-gradient(to right bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
                'wood-pattern': "linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url('https://images.unsplash.com/photo-1555529902-5261145633cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
            }
        }
    }
}

// Script to change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    // Guard: as páginas institucionais (termos, privacidade, faq) não possuem navbar
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.classList.replace('bg-brand-dark/90', 'bg-brand-dark/95');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.replace('bg-brand-dark/95', 'bg-brand-dark/90');
    }
});
// Slideshow de prêmios (seção "Prêmios & Reconhecimentos" do index.html)
(function initPremiosSlider() {
    const slider = document.getElementById('premios-slider');
    // Guard: as páginas institucionais (termos, privacidade, faq) não possuem o slideshow
    if (!slider) return;

    const viewport = slider.querySelector('.premios-viewport');
    const slides = Array.from(slider.querySelectorAll('.premios-slide'));
    const dots = Array.from(slider.querySelectorAll('.premios-dot'));
    const prevBtn = slider.querySelector('.premios-prev');
    const nextBtn = slider.querySelector('.premios-next');
    if (!viewport || slides.length === 0) return;

    const interval = parseInt(slider.dataset.autoplay, 10) || 5000;
    let current = slides.findIndex((img) => img.classList.contains('is-active'));
    if (current < 0) current = 0;
    let timer = null;
    let hoverPaused = false;
    let focusPaused = false;

    // Ajusta a altura do viewport conforme a proporção da imagem ativa,
    // exibindo-a por inteiro (sem cortes nem barras laterais).
    function updateAspect(slide) {
        const apply = () => {
            if (slide.naturalWidth && slide.naturalHeight) {
                viewport.style.aspectRatio = slide.naturalWidth + ' / ' + slide.naturalHeight;
            }
        };
        if (slide.complete) {
            apply();
        } else {
            slide.addEventListener('load', apply, { once: true });
        }
    }

    function show(index) {
        current = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
        dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
        updateAspect(slides[current]);
    }

    function next() { show(current + 1); }
    function prev() { show(current - 1); }

    function isPaused() {
        return hoverPaused || focusPaused || document.hidden;
    }

    // (Re)inicia o avanço automático respeitando o estado de pausa
    function sync() {
        if (timer) {
            window.clearInterval(timer);
            timer = null;
        }
        if (isPaused()) return;
        timer = window.setInterval(next, interval);
    }

    // Controles manuais: reiniciam o timer para dar tempo de rever a imagem
    nextBtn.addEventListener('click', () => { next(); sync(); });
    prevBtn.addEventListener('click', () => { prev(); sync(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); sync(); }));

    // Pausa no hover/foco para o usuário observar a imagem com calma
    slider.addEventListener('mouseenter', () => { hoverPaused = true; sync(); });
    slider.addEventListener('mouseleave', () => { hoverPaused = false; sync(); });
    slider.addEventListener('focusin', () => { focusPaused = true; sync(); });
    slider.addEventListener('focusout', () => { focusPaused = false; sync(); });

    // Navegação por teclado (setas esquerda/direita)
    slider.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') { next(); sync(); }
        if (event.key === 'ArrowLeft') { prev(); sync(); }
    });

    // Pausa quando a aba fica oculta (economia de recursos)
    document.addEventListener('visibilitychange', sync);

    show(current);
    sync();
})();