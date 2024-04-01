import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css'],
})
export class PagListaVehiculosComponent implements OnInit {
  mostrarImagen: boolean = false;
  //filtro:string = "";
  private _filtro: string = '';

  rows: number = 10;
  page: number = 1;
  pages: number = 0;

  get filtro() {
    return this._filtro;
  }

  set filtro(data: string) {
    this._filtro = data;
    this.consultarVehiculos();
  }

  listaVehiculos: Array<any> = [];

  constructor(
    private vehiculoService: VehiculoService,
    private route: Router
  ) {}

  ngOnInit() {
    console.log('Ingreso a ejecutarse');
    this.consultarVehiculos();
    /*this.listaVehiculos = this.vehiculoService.getVehiculos();
    this.vehiculoService.addVehiculo( {
      codigo: 'C003',
      marca: 'marcaa',
      modelo: 'MODELO-1',
      anio: 2022,
      color: 'color',
      kilometraje: 'kilometraje',
      precio: 15000,
      calificacion: 1,
      imagen: '../../../assets/imagenAutos/aston-martin.jpg',
    },);*/
  }

  mostrar() {
    this.mostrarImagen = !this.mostrarImagen;
  }

  consultarVehiculos() {
    this.vehiculoService
      .getVehiculos(this.filtro, this.rows, this.page)
      .subscribe((respuesta) => {
        if (respuesta.codigo == '1') {
          this.listaVehiculos = respuesta.data;
          this.pages = respuesta.pages;
          this.paginar(respuesta.pages);
        }
      });
  }

  recepcion(dato: number) {
    console.log('dato: ', dato);
  }

  cambiarPagina(pagina: number) {
    this.page = pagina;
    this.consultarVehiculos();
  }

  listaPaginas: Array<number> = [];
  paginar(paginas: number) {
    this.listaPaginas = [];
    for (let i = 1; i <= paginas; i++) {
      this.listaPaginas.push(i);
    }
  }

  siguiente() {
    if (this.page < this.pages) {
      this.page++;
      this.consultarVehiculos();
    }
  }

  atras() {
    if (this.page > 1) {
      this.page--;
      this.consultarVehiculos();
    }
  }

  eliminar(codigo: string) {
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      icon: 'question',
    }).then((res) => {
      if (res.isConfirmed) {
        this.vehiculoService.eliminarVehiculo(codigo).subscribe((data) => {
          if (data.codigo == '1') {
            this.consultarVehiculos();
            Swal.fire({
              title: 'Mensaje',
              text: 'Vehiculo eliminado con exito',
              icon: 'success',
            });
          } else {
            Swal.fire({
              title: 'Mensaje',
              text: 'No se pudo eliminar el registro: ' + data.mensaje,
              icon: 'error',
            });
          }
        });
      }
    });
  }
}
