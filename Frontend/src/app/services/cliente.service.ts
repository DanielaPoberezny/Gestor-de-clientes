import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  fechaNacimiento: string;
  fechaProbableMuerte?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'http://localhost:3000'; // Cambiar si está en otro puerto o dominio

  constructor(private http: HttpClient) {}

  getKpiClientes(): Observable<{
    promedioEdad: number;
    desviacionEstandar: number;
  }> {
    return this.http.get<{ promedioEdad: number; desviacionEstandar: number }>(
      `${this.apiUrl}/kpi-clientes`
    );
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}/list-clientes`);
  }
}
