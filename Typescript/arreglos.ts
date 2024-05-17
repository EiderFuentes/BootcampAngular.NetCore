//Arreglos
let persona: string[] = ["Eider", "Leidy", "Isaac"];
  persona.push("NuevoNombre");

  //Objetos

  interface IEmpleado{
     nombres: string;
     apellidos: string;
     direccion: string;
     telefonos: string[];
     sueldo: number;
     cargo?: string;
  }

  const empleado: IEmpleado = {
    nombres: "Eider Andres",
    apellidos: "Fuentes",
    direccion: "Calle 19 El roble",
    telefonos: ["3143985106", "310352255"],
    sueldo: 5000
  }

  console.table(empleado);