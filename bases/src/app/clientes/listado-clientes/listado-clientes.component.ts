import { Component, Input } from '@angular/core';
import { ICliente } from '../pagina-inicio/interfaces/cliente';

@Component({
  selector: 'app-listado-clientes',
  standalone: true,
  imports: [],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {

   @Input()
   clientes: ICliente[] = [];
}
