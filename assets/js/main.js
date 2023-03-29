//La idea es que se muestren las marcas para que el usuario seleccione
// una de ellas y que a partir de ese evento se filtre la marca y empiece a mostrar los diferentes modelos para que despues se seleccione y de ahi se lleve el precio para poder cotizar el seguro
let segurosCarrito=[];
const listaProductos = document.querySelector('#lista_productos')
const contenedorCarrito =document.querySelector('#lista_carrito')
const carrito = document.querySelector('#carrito')
let ford = document.querySelector('.marcas__ford')
let audi = document.querySelector('.marcas__audi')
let chevrolet = document.querySelector('.marcas__chevrolet') 
let resultado = document.querySelector('.resultado')

document.addEventListener('DOMContentLoaded',()=>{
    segurosCarrito=JSON.parse(localStorage.getItem('carrito'))||[];
    
})

listaProductos.addEventListener('click',agregarSeguro)

ford.addEventListener('click', () =>{
    console.log("Ingresaste en Ford")
    
    let marca = 'Ford'

    filtrarAuto(marca)


})

audi.addEventListener('click', () =>{
    console.log("Ingresaste en Audi")

    let marca = 'Audi'

    filtrarAuto(marca)

})
chevrolet.addEventListener('click', () =>{
    console.log("Ingresaste en Chevrolet")
    
    let marca = 'Chevrolet'

    filtrarAuto(marca)

})

function filtrarAuto(marca){
    const busqueda = autos.filter(a =>a.marca === marca)
    if (busqueda.length){
        console.log(busqueda)
        mostrarAuto(busqueda)
    }else{
        console.log("No se encontro")
    }
    

} 

function mostrarAuto(busqueda){
    busqueda.forEach(auto =>{
        const cardAuto=document.createElement('articulo')
        cardAuto.setAttribute('id', 'tarjeta-auto')
        cardAuto.innerHTML +=  `
            <div class = "card">
                <h4 class="card__titulo"> ${auto.modelo}</h4>
                <img src="${auto.img}" width=150px>
                <p class="card__texto">Valor aproximado ${auto.valor}</p>
                <p class="card__texto__st">Seguro total ${auto.valor * 0.014 + auto.valor*0.011 + 8000}</p>
                <button id='${auto.valor}' class="btn__cotizar__total agregar-carrito">Agregar seguro total</button>
                <p class="card__texto__sb">Seguro base ${auto.valor * 0.014 + auto.valor*0.0085 + 8000}</p>
                <button id='${auto.valor}' 
                class="btn__cotizar__base agregar-carrito">Agregar seguro base</button>
                
            </div>`;
        resultado.appendChild(cardAuto);
    })


}

function agregarSeguro(evt){
    evt.preventDefault()

    if(evt.target.classList.contains('agregar-carrito')){
        const seguro = evt.target.parentElement.parentElement;

        leerDatosSeguro(seguro)
    }
}

function leerDatosSeguro(seguro){

    const infoSeguro={
        imagen: seguro.querySelector('img').src,
        titulo: seguro.querySelector('h4').textContent,
    }
} 








