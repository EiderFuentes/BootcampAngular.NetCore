var pelicula = {
    id: 1,
    titulo: "Star Wars - guerra de los Clones",
    descripcion: "Saga de Star Wars",
    anio: 2001,
    director: {
        nombres: "George",
        apellidos: "Lucas"
    }
};
var titulo = pelicula.titulo, descripcion = pelicula.descripcion, anio = pelicula.anio;
//const {nombres} = director;
console.log("Pelicula: ", titulo);
console.log("Anio :", anio);
