// Selecciona todos los elementos con la clase "punto" y los almacena en la variable 'punto'.
const punto = document.querySelectorAll(".punto");

// Selecciona el primer elemento con la clase "carrusel-content" y lo almacena en la variable 'carruselContent'.
const carruselContent = document.querySelector(".carrusel-content");

// Itera sobre cada elemento en el NodeList 'punto' usando forEach, proporcionando el elemento (Puntos) y el índice (i).
punto.forEach((Puntos, i) => {
    
    // Añade un evento de clic a cada elemento 'punto'.
    punto[i].addEventListener("click", () => {
        
        // Al hacer clic, obtiene el índice del punto actual y lo almacena en la variable 'posicion'.
        let posicion = i;

        // Calcula el valor de la transformación en base al índice y lo almacena en la variable 'operacion'.
        let operacion = posicion * -50;

        // Aplica la transformación al estilo del elemento 'carruselContent' utilizando translateX.
        carruselContent.style.transform = `translateX(${operacion}%)`;

        // Itera sobre todos los elementos 'punto' y elimina la clase 'activo' de cada uno.
        punto.forEach((Puntos, i) => {
            punto[i].classList.remove('activo');
        });

        // Agrega la clase 'activo' al punto actual que ha sido clicado.
        punto[i].classList.add('activo');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('.carrusel');
    var carouselInner = document.querySelector('.carrusel-content');
    // = 1

    var currentIndex = 0;
    var totalItems = document.querySelectorAll('.carousel-item').length; 
    // = 2 Corresponde a la cantidad de elementos dentro del carrusel-item o grande.
    var itemWidth = document.querySelector('.carousel-item').offsetWidth;
 // = relativo = width actual de la pagina, el valor cambia constantemente.
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        // 1 y 0
        updateCarousel();
        //updateCarousel toma el valor del nuevo curretnIndex (1 y 0 en intervalos de 10 segundos)
    }

    function updateCarousel() {
        var translateValue = -currentIndex * itemWidth;
        carouselInner.style.transform = 'translateX(' + translateValue + 'px)';
    }
    // Sin intervalo se ejecuta solo esta funcion lo que da como resultado 0
    // Con intervalo de ejecuta esta funcion con los valores definidos en nextSlide, osea el offsetwidth en negativo.

    // Configurar intervalo para cambiar automáticamente de diapositiva cada 10 segundos mientras llamamos a la funcion nextSlide
    var intervalId = setInterval(nextSlide, 8000); 

});
const punto1 = document.querySelectorAll(".punto1")
const punto2 = document.querySelectorAll(".punto2")
// Seleccionamos las clases dentro de los puntos
document.addEventListener("DOMContentLoaded", event => {
    /*Creamos una funcion con un foreach que cada 3 segundos quite la clase activo al primer punto 
    y a la vez añada la clase activo al segundo punto     *la clase activo solo cambia de color la fuente del icono.*/
    function intervalActive() {
        punto1.forEach( (puntos, i) => {
            punto1[i].classList.remove('activo')
        })
        punto2.forEach ( (puntos, i) => {
            punto2[i].classList.add('activo')
        })
    }
    /*Hacemos el mismo forEach pero esta vez con un intervalo de 6 segundos que haga la funcion contraria y devuelva la clase activo
    como estaba al principo */
    function intervalActive2() {
        punto1.forEach( (puntos, i) => {
            punto1[i].classList.add('activo')
        })
        punto2.forEach ( (puntos, i) => {
            punto2[i].classList.remove('activo')
        })
    }
    // Set de ambos intervalos
    var intervalPuntos = setInterval(intervalActive, 8000); 
    var intervalpunto2 = setInterval(intervalActive2, 16000)

})



