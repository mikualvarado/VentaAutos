import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/Vehiculo';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Respuesta } from '../utilitarios/modelos/Respuesta';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://epico.gob.ec/vehiculo/public/api/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getVehiculos(
    filtro?: string,
    rows?: number,
    page?: number
  ): Observable<Respuesta> {
    let body = new HttpParams();
    body = filtro ? body.set('filtro', filtro) : body;
    body = rows ? body.set('rows', rows) : body;
    body = page ? body.set('page', page) : body;
    return this.http.get<Respuesta>(this.baseUrl + 'vehiculos/', {
      params: body,
    });
  }

  insertVehiculo(vehiculo: Vehiculo) {
    return this.http.post<Respuesta>(
      this.baseUrl + 'vehiculo/',
      vehiculo,
      this.httpOptions
    );
  }

  getVehiculo(codigo: string) {
    return this.http.get<Respuesta>(this.baseUrl + 'vehiculo/' + codigo);
  }

  actualizarVehiculo(vehiculo: Vehiculo, codigo: string) {
    return this.http.put<Respuesta>(
      this.baseUrl + 'vehiculo/' + codigo,
      vehiculo,
      this.httpOptions
    );
  }

  eliminarVehiculo(codigo: string) {
    return this.http.delete<Respuesta>(this.baseUrl + 'vehiculo/' + codigo);
  }

  addVehiculo(vehiculo: Vehiculo) {
    this.listaVehiculos.push(vehiculo);
  }

  public listaVehiculos: Array<Vehiculo> = [
    {
      codigo: 'A001',
      marca: 'marcaa',
      modelo: 'MODELO-1',
      anio: 2020,
      color: 'color',
      kilometraje: 'kilometraje',
      precio: 15000,
      calificacion: 1,
      foto: '../../../assets/imagenAutos/aston-martin.jpg',
    },
    {
      codigo: 'B002',
      marca: 'marcaa',
      modelo: 'MODELO-2',
      anio: 2021,
      color: 'color',
      kilometraje: 'kilometraje',
      precio: 15000,
      calificacion: 2,
      foto: '../../../assets/imagenAutos/aston-martin.jpg',
    },
  ];
}
