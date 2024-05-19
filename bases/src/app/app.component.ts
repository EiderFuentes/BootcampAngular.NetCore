import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcumuladorComponent } from "./acumulador/acumulador.component";
import { ListadoComponent } from "./empleados/listado/listado.component";
import { EmpleadoComponent } from "./empleados/empleado/empleado.component";
import { PaginaInicioComponent } from "./clientes/pagina-inicio/pagina-inicio.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AcumuladorComponent, ListadoComponent, EmpleadoComponent, PaginaInicioComponent, FormsModule]
})
export class AppComponent {
  
}
