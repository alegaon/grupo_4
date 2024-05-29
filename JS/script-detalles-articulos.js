console.log("desde la consola");

// carrousel

let sliderInner = document.querySelector(".slider--inner");

let index = 0;

let images =  sliderInner.querySelectorAll("img");

setInterval(function(){
    let percentage = index * -100;
    sliderInner.style.transform = "translateX("+ percentage +"%)"
    index++;
    if(index > (images.length - 1)) {
        index = 0;
    }
}, 3000);


// fin carrousel

// comentarios

// comentarios clone



// fin comentarios clone



//  api
let persona = document.querySelector(".original-comentarios");

let contenedorPersona = document.querySelector(".clone-comentarios");

persona.remove();

function agregarComentarios(){
    
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => {
        
            let nuevaPersona = persona.cloneNode(true);
        
            nuevaPersona.querySelector("#img-comentarios").src = data.results[0].picture.thumbnail;
            nuevaPersona.querySelector("#img-comentarios").alt = "foto usuario";
            nuevaPersona.querySelector("#span-usuario").innerHTML = data.results[0].name.first+ " " +data.results[0].name.last;
            nuevaPersona.querySelector("#p-comentarios").innerHTML = "comentario comentario comentarios";
            
            contenedorPersona.appendChild(nuevaPersona);


        // console.log(data.results[0].name.first+ " " +data.results[0].name.last);
        // console.log(data.results[0].picture.thumbnail);



        })

    .catch(error => console.log("ocurrio un error!"));
}

agregarComentarios();
agregarComentarios();
agregarComentarios();
// fin comentarios


// ubicacion


// fin ubicacion