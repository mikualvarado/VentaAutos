import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { RespuestaCliente } from '../utilitarios/modelos/Respuesta';
import { Cliente } from '../utilitarios/modelos/Cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://epico.gob.ec/vehiculo/public/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };


  addCliente(cliente: Cliente) {
    return this.http.post<RespuestaCliente>(
      this.baseUrl + 'cliente/',
      cliente,
      this.httpOptions
    );
  }
}
