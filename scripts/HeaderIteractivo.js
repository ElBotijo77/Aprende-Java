// scripts/HeaderIteractivo.js

const header = document.querySelector('.cabecera'); 

//Si header toma un valor null, lo mostrara por pantalla

if(header == null) console.log("Error en la seleccion");


let lastScrollTop = 0;
// Mediante un operador ternario (if-else simplificado) determina el limite de desplazamient
//inicial medida en pixeles
const offsetLimit = header ? header.offsetHeight : 60; 

//Añadimos un evento a la escucha de cuando se haga scroll. Se usara una clase anonima al 
//igual que se hace con los eventos en Java. Para ello usaremos =>
//El metodo pageYOffset() determina el numero de pixeles que se ha desplazado el usuario 
//desde la parte de arriba
//document.documentElement.scrollTop hace lo mismo asegurando el script en navegadpres mas antiguos

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