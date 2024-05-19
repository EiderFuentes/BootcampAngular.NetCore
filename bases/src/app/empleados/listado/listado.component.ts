import { Component, Input } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  etiquetaBorrado: string = "";

  //Decorredor
   @Input()
    //Creo un arreglo
   empleados: IEmpleado[] = [];
   
   @Input()
   titulo: string = "";

   borrar(){
    //console.log("El boton funciona");
     //Guardo el objeto en una constante
     const emp = this.empleados.shift();
     if(emp !== undefined){
       this.etiquetaBorrado = emp?.nombres + ' ' + emp?.apellidos;
     }
     else{
       this.etiquetaBorrado="";
     }

   }
}
