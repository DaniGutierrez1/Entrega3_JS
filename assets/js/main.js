//La idea es que se muestren las marcas para que el usuario seleccione
// una de ellas y que a partir de ese evento se filtre la marca y empiece a mostrar los diferentes modelos para que despues se seleccione y de ahi se lleve el precio para poder cotizar el seguro


let ford = document.querySelector('.marcas__ford')
let audi = document.querySelector('.marcas__audi')
let chevrolet = document.querySelector('.marcas__chevrolet') 
let resultado = document.querySelector('.resultado')



ford.addEventListener('click', () =>{
    console.log("Ingresaste en Ford")
    
    let marca = 'Ford'

    filtrarAuto(marca)
    

    for (let busqueda of autos){
        console.log(busqueda)
        resultado.innerHTML +=  `
        <div class = "card" style="width:20px;">
            <img src="${busqueda.img}" width=100px>
        </div>`
    };

})




function filtrarAuto(marca){
    const busqueda = autos.filter(a =>a.marca === marca)
    if (busqueda.length){
        console.log(busqueda)
    }else{
        console.log("No se encontro")
    }
    

} 

/* function mostrarAutos(autos){
    autos.forEach(auto => {
        console.log(auto)
        
    });
}

function filtrarMarca(auto){
    if(busqueda.marca){
        return auto.marca === busqueda.marca
    }
    return auto
};

function filtrarModelo(auto){
    if (busqueda.modelo){
        return auto.modelo === busqueda.modelo
    }
    return auto
};

function filtrarImg(auto){
    if(busqueda.img){
        return auto.img === busqueda.img
    }
    return auto
}; 

function filtrarAuto(){
    let resultado = autos.filter(filtrarMarca).filter(filtrarModelo).filter(filtrarImg);
    if(resultado.length){
        mostrarAutos(resultado)
    }

};  */




audi.addEventListener('click', () =>{
    console.log("Ingresaste en Audi")

})
chevrolet.addEventListener('click', () =>{
    console.log("Ingresaste en Chevrolet")

})



// document.write(mostrarAutos(autos))

//filtrarAuto()



