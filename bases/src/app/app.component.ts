import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcumuladorComponent } from "./acumulador/acumulador.component";
import { ListadoComponent } from "./empleados/listado/listado.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AcumuladorComponent, ListadoComponent]
})
export class AppComponent {
  
}
