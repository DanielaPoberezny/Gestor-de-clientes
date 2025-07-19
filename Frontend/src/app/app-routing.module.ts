import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ListaClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { KpiClientesComponent } from './components/kpi-clientes/kpi-clientes.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'crear-cliente', component: CrearClienteComponent },
  { path: 'lista-clientes', component: ListaClientesComponent },
  { path: 'kpi-clientes', component: KpiClientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

