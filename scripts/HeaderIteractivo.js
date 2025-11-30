// scripts/HeaderIteractivo.js

const header = document.querySelector('.cabecera'); 

//Si header toma un valor null, lo mostrara por pantalla

if(header == null) console.log("Error en la seleccion");


let lastScrollTop = 0;

/*Mediante un operador ternario (if-else simplificado) determina el limite de desplazamient
//inicial medida en pixeles*/ 

const offsetLimit = header ? header.offsetHeight : 60; 

/*Añadimos un evento a la escucha de cuando se haga scroll. Se usara una clase anonima al 
igual que se hace con los eventos en Java. Para ello usaremos =>*/

window.addEventListener('scroll', () => {
        
    /*El metodo pageYOffset() determina el numero de pixeles que se ha desplazado el usuario 
        desde la parte de arriba
        document.documentElement.scrollTop hace lo mismo asegurando el script en navegadpres mas antiguos*/

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    /*Mediante la primera condicion verificamos si el usuario ha hehco mas scroll del limite 
    interpuesto mas arriba y con la segunda evitaremos que se esconda nada mas iniciar la pagina*/ 
   
    if (currentScroll > lastScrollTop && currentScroll > offsetLimit){
        
        /*Si se cumple, añadimos la clase "header-hidden" para posteriormente añadirle un transform
        ocultando asi el header*/
        
        header.classList.add('header-hidden');
    } else {
        
        /*Si no se cumple, borramos la clase para el header se mantenga en su sitio*/ 

        header.classList.remove('header-hidden');
    }
    
    /*Con un operador ternario actualizamos la ultima posicion diciendole el valor que tiene la variable
    que guarda el scroll actual para quedar lista en la siguiente comprobacion*/ 

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});