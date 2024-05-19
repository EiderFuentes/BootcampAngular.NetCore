import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { ListadoComponent } from "../listado/listado.component";

@Component({
    selector: 'app-empleado',
    standalone: true,
    templateUrl: './empleado.component.html',
    styleUrl: './empleado.component.css',
    imports: [ListadoComponent]
})
export class EmpleadoComponent {
  tituloAnt: string = "Titulo Empleado Antiguo";
  tituloNuv: string = "Titulo Empleado Nuevo";

  empleaodosAntiguos: IEmpleado[] = [
    {
      nombres: "eider",
      apellidos: "fuentes",
      direcccion: "calle 19",
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
  ]

  empleaodosNuevos: IEmpleado[] = [
    {
      nombres: "neron",
      apellidos: "fuentes",
      direcccion: "La coroza",
      sueldo: 2000
    }
  ]
}
