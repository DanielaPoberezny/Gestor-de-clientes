import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ListaClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { KpiClientesComponent } from './components/kpi-clientes/kpi-clientes.component';
import { AppRoutingModule } from './app-routing.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearClienteComponent,
    ListaClientesComponent,
    KpiClientesComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    PanelModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    CardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputNumberModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    TableModule,
  ],

  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}

//DECLARACION DE COMPONENTES
