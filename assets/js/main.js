//La idea es que se muestren las marcas para que el usuario seleccione
// una de ellas y que a partir de ese evento se filtre la marca y empiece a mostrar los diferentes modelos para que despues se seleccione y de ahi se lleve el precio para poder cotizar el seguro


let ford = document.querySelector('.marcas__ford')
let audi = document.querySelector('.marcas__audi')
let chevrolet = document.querySelector('.marcas__chevrolet') 
let marcaAuto=''
let marca=''

ford.addEventListener('click', () =>{
    console.log("Ingresaste en Ford")
    marcaAuto= 'ford';
    filtrarAuto()


})
audi.addEventListener('click', () =>{
    console.log("Ingresaste en Audi")

})
chevrolet.addEventListener('click', () =>{
    console.log("Ingresaste en Chevrolet")

})

const busqueda={
    marca:marcaAuto,
    modelo:'',
} 

function mostrarAutos(autos){
    autos.forEach(auto => {
        console.log(auto)
        
    });
}

function filtrarMarca(auto){
    if(busqueda.marca){
        return auto.marca === busqueda.marca
    }
    return auto
}

function filtrarModelo(auto){
    if (busqueda.modelo){
        return auto.modelo === busqueda.modelo
    }
    return auto
}

function filtrarAuto(){
    let resultado = autos.filter(filtrarMarca).filter(filtrarModelo)
    if(resultado.length){
        mostrarAutos(resultado)
    }

}


// document.write(mostrarAutos(autos))

//filtrarAuto()



