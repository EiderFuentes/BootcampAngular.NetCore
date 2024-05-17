import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
    //Creo un arreglo
   empleados: IEmpleado[] = [
    {
      nombres: "eider",
      apellidos: "fuentes",
      direcccion: "Calle 19",
      sueldo: 2000
    },
    {
      nombres: "carlos",
      apellidos: "piedra",
      direcccion: "los angeles",
      sueldo: 5000
    },
    {
      nombres: "juan",
      apellidos: "hoyos",
      direcccion: "medeelin",
      sueldo: 3500
    }
   ];
}
