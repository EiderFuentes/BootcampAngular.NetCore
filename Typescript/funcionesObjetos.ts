
interface ICliente{
    nombres: string;
    apellidos: string;
    credito: number;
    mostrarCliente: () => void;
    direccion: IDireccion
    
}

interface IDireccion{
    numeroCalle: number;
    nombreCalle: string;
    cuidad: string
}

const deuda = (cliente: ICliente, monto: number):void => {
  cliente.credito += monto;
}

const nuevoCliente: ICliente = {
  nombres: "Eider",
  apellidos: "Fuentes",
  credito: 2000,
  mostrarCliente(){
      console.log(`Credito del cliente: ${this.nombres} ${this.apellidos} es ${this.credito}`);
  },
  direccion: {
    numeroCalle: 19,
    nombreCalle: "El prado",
    cuidad: "Pueblo Nuevo"
  }
}

deuda(nuevoCliente, 200);
nuevoCliente.mostrarCliente();