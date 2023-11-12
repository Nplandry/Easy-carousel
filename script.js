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