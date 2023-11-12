const punto = document.querySelectorAll(".punto")
const carruselContent = document.querySelector(".carrusel-content")
punto.forEach( (Puntos, i)=> {
    punto[i].addEventListener("click", ()=> {
    let posicion = i
    let operacion = posicion * -50
    carruselContent.style.transform = `translateX(${ operacion }%)`
    punto.forEach( (Puntos, i) => {
        punto[i].classList.remove('activo')
    })
    punto[i].classList.add('activo')
})
})

document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('.carrusel');
    var carouselInner = document.querySelector('.carrusel-content');

    var currentIndex = 0;
    var totalItems = document.querySelectorAll('.carousel-item').length; 
    var itemWidth = document.querySelector('.carousel-item').offsetWidth;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function updateCarousel() {
        var translateValue = -currentIndex * itemWidth;
        carouselInner.style.transform = 'translateX(' + translateValue + 'px)';
    }

    // Configurar intervalo para cambiar automáticamente de diapositiva cada 3 segundos
    var intervalId = setInterval(nextSlide, 10000);

    // Detener el intervalo cuando el mouse entra en el carrusel
    carousel.addEventListener('mouseenter', function () {
        clearInterval(intervalId);
    });

    // Reanudar el intervalo cuando el mouse sale del carrusel
    carousel.addEventListener('mouseleave', function () {
        intervalId = setInterval(nextSlide, 10000);
    });
});
