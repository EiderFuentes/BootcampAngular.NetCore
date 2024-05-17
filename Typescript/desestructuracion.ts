interface IPelicula{
  id: number;
  titulo: string;
  descripcion: string;
  anio: number;
  director: IDirector;
}

interface IDirector{
    nombres: string;
    apellidos: string;
}

const pelicula: IPelicula = {
    id: 1,
    titulo: "Star Wars - guerra de los Clones",
    descripcion: "Saga de Star Wars",
    anio: 2001,
    director: {
        nombres:"George",
        apellidos: "Lucas"
    }
}

const {titulo, descripcion, anio} = pelicula;
//const {nombres} = director;

//Mostrar en consola
console.log("Pelicula: ", titulo);
console.log("Anio :", anio);
