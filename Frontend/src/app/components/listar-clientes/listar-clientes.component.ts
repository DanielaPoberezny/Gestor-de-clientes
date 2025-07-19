import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';



@Component({
  selector: 'app-lista-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {
  clientes: any[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data) => {
      this.clientes = data;
    });
  }
  volverInicio(): void {
    window.location.href = '/inicio';
  }
}
  

