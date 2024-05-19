import { Component } from '@angular/core';
import { ICliente } from './interfaces/cliente';
import { ListadoClientesComponent } from "../listado-clientes/listado-clientes.component";

@Component({
    selector: 'app-pagina-inicio',
    standalone: true,
    templateUrl: './pagina-inicio.component.html',
    styleUrl: './pagina-inicio.component.css',
    imports: [ListadoClientesComponent]
})
export class PaginaInicioComponent {
   //creo el objeto nuevo
   nuevo: ICliente = {
    nombre: "",
    credito: 0
   }

   clientes: ICliente[] =[
    {
      nombre: "Eider",
      credito: 5000
    },
    {
      nombre: "Leidy",
      credito: 4500
    }
   ]
  //Metodo
  agregar(){

    //evento.preventDefaul();//Metodo que preeviene que la pagina se refresque
    //console.log(this.nuevo);

    if(this.nuevo.nombre.trim().length ===0 ){
      return;
    }

    if(this.nuevo.credito === null ){
      return;
    }
    
    //Agragamos con el metodo push
    this.clientes.push(this.nuevo);
    //Inicializamos el objeto
    this.nuevo = {
      nombre: "",
      credito: 0
    }

  }

}
