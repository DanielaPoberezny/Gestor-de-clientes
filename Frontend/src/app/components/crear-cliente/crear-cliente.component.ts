import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

interface Cliente {
  nombre: string;
  apellido: string;
  edad: number | null;
  fechaNacimiento: string;
}

interface ClienteConFechaProbable extends Cliente {
  fechaProbableMuerte?: string;
}

interface RespuestaCrearCliente {
  mensaje: string;
  cliente?: Cliente;
}

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css'],
  providers: [MessageService],
})
export class CrearClienteComponent implements OnInit {
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    edad: null,
    fechaNacimiento: '',
  };

  clientes: ClienteConFechaProbable[] = [];

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.http
      .get<ClienteConFechaProbable[]>('http://localhost:3000/list-clientes')
      .subscribe({
        next: (data) => {
          this.clientes = data;
          console.log('Clientes cargados:', data);
        },
        error: (err: any) => {
          console.error('Error al cargar clientes:', err);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se pudo cargar la lista de clientes',
          });
        },
      });
  }

  crearCliente(): void {
    const fecha = new Date(this.cliente.fechaNacimiento);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    if (isNaN(fecha.getTime())) {
      this.messageService.add({
        severity: 'error',
        summary: 'Fecha inválida',
        detail: 'La fecha de nacimiento no es válida',
      });
      return;
    }

    if (fecha >= hoy) {
      this.messageService.add({
        severity: 'error',
        summary: 'Fecha inválida',
        detail: 'La fecha de nacimiento debe ser anterior a hoy',
      });
      return;
    }

    const anios = hoy.getFullYear() - fecha.getFullYear();
    const edadIngresada = this.cliente.edad;

    if (edadIngresada === null || edadIngresada <= 0 || edadIngresada > 120) {
      this.messageService.add({
        severity: 'error',
        summary: 'Edad inválida',
        detail: 'La edad debe estar entre 1 y 120 años',
      });
      return;
    }

    if (Math.abs(anios - edadIngresada) > 1) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Advertencia',
        detail: 'La edad no coincide con la fecha de nacimiento',
      });
      return;
    }

    this.http
      .post<RespuestaCrearCliente>(
        'http://localhost:3000/crear-cliente',
        this.cliente
      )
      .subscribe({
        next: (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Cliente creado',
            detail: res?.mensaje || 'Cliente creado correctamente',
          });
          this.cliente = {
            nombre: '',
            apellido: '',
            edad: null,
            fechaNacimiento: '',
          };
          this.cargarClientes();
        },
        error: (err: any) => {
          console.error('Error al crear cliente:', err);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Hubo un problema al crear el cliente',
          });
        },
      });
  }
  volverInicio(): void {
    window.location.href = '/inicio';
  }
}
