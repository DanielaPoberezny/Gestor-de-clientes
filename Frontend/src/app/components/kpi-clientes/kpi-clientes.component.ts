import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-kpi-clientes',
  templateUrl: './kpi-clientes.component.html',
  styleUrls: ['./kpi-clientes.component.css'],
})
export class KpiClientesComponent implements OnInit {
  promedioEdad!: number;
  desviacionEstandar!: number;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getKpiClientes().subscribe((data) => {
      this.promedioEdad = data.promedioEdad;
      this.desviacionEstandar = data.desviacionEstandar;
    });
  }

  volverInicio(): void {
    window.location.href = '/inicio';
  }
}
