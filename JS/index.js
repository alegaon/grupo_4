let contenedor = document.querySelector(".contenedor-articulos");

let articuloPublicado = contenedor.querySelector(".articulo.publicados");
let articuloArchivado = contenedor.querySelector(".articulo.archivados");
// let articuloPublicado = contenedor.querySelector(".articulo.publicados");

let publicados = articuloPublicado.cloneNode(true);
let archivados = articuloArchivado.cloneNode(true);

articuloPublicado.remove();
articuloArchivado.remove();

fetchData("http://127.0.0.1:5000/api/articles/published", "GET", (data_response) => {

    
    for (let articulo of data_response) {
        console.log(articulo)
        
        let nuevoPublicado = publicados.cloneNode(true);

        nuevoPublicado.querySelector(".imagen-articulo"); // imagen
        nuevoPublicado.querySelector(".titulo-publicados").innerHTML = articulo.titulo; // titulo
        nuevoPublicado.querySelector(".descrip-publicados").innerHTML = articulo.descripcion;  // description 


        if (!articulo.comida) {
            nuevoPublicado.querySelector(".icono.icomida").style.display = 'none'; // icono comida
        }
        if (!articulo.embarcacion) {
            nuevoPublicado.querySelector(".icono.iembarcacion").style.display = 'none'; // icono embarcacion
        }
        if (!articulo.guia) {
            nuevoPublicado.querySelector(".icono.iguia").style.display = 'none'; // icono guia
        }
        if (!articulo.equipos) {
            nuevoPublicado.querySelector(".icono.iequipos").style.display = 'none'; // icono equipos
        }
        if (!articulo.carnada) {
            nuevoPublicado.querySelector(".icono.icarnada").style.display = 'none'; // icono carnada
        }
        if (!articulo.wifi) {
            nuevoPublicado.querySelector(".icono.iwifi").style.display = 'none'; // icono wifi
        }
        if (!articulo.hospedaje) {
            nuevoPublicado.querySelector(".icono.ihospedaje").style.display = 'none'; // icono hospedaje
        }
        if (!articulo.atencion) {
            nuevoPublicado.querySelector(".icono.iatencion").style.display = 'none'; // icono atencion
        }
        if (!articulo.salvavidas) {
            nuevoPublicado.querySelector(".icono.isalvadidas").style.display = 'none'; // icono salvadidas

        }

        nuevoPublicado.querySelector(".texto-info-boton"); // text de btn informacion

        

        
        contenedor.appendChild(nuevoPublicado);
        
    }
})