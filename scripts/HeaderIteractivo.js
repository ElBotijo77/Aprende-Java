// scripts/HeaderIteractivo.js

// 1. **VERIFICAR:** ¿Es 'cabecera' la clase correcta? (Sí, según tu HTML)
const header = document.querySelector('.cabecera'); 

// Si no encuentra el elemento, 'header' será null. 
// Para verificar, añade: console.log(header);

let lastScrollTop = 0;
// 2. **VERIFICAR:** Si tu header es muy bajo, usa un valor fijo más alto, ej: 100
const offsetLimit = header ? header.offsetHeight : 60; 

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // 3. **VERIFICAR:** Lógica de Scroll
    if (currentScroll > lastScrollTop && currentScroll > offsetLimit){
        // Scroll hacia abajo (ocultar)
        // 4. **VERIFICAR:** ¿Es 'header-hidden' el nombre de la clase CSS que lo oculta?
        header.classList.add('header-hidden');
    } else {
        // Scroll hacia arriba (mostrar)
        header.classList.remove('header-hidden');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});