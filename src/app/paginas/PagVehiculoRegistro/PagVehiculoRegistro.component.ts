import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { validadorCodigo } from '../../validaciones/VehiculoValidaciones';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css'],
})

export class PagVehiculoRegistroComponent implements OnInit {

  //vehiculo?: Vehiculo

  formulario: FormGroup;
  //id: string;
  //router: any;

  constructor(
    private vehiculoService: VehiculoService,
    private formBuilder: FormBuilder
  ) {
    /*this.vehiculo = {
      codigo: '',
      marca: '',
      color: '',
      modelo: '',
      kilometraje: '',
      precio: 0,
      imagen: null,
      anio: 0,
      calificacion: 0
    }*/

    this.formulario = this.formBuilder.group({
      codigo: ['', [Validators.required, validadorCodigo()]],
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      anio: ['', [Validators.required]],
      kilometraje: [],
      precio: [],
      calificacion: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.formulario.valid) {
      this.vehiculoService
        .insertVehiculo({ ...this.formulario.value })
        .subscribe((respuesta) => {
          if (respuesta.codigo == '1') {
            Swal.fire({
              title: 'Mensaje',
              text: 'Vehiculo registrado con exito',
              icon: 'success',
            }).then(() => {
              this.formulario.reset();
            });
          } else {
            Swal.fire({
              title: 'Mensaje',
              text: 'No se pudo registrar el vehiculo: ' + respuesta.mensaje,
              icon: 'error',
            });
          }
        });
    } else {
      console.log(this.formulario);
      Swal.fire({
        title: 'Mensaje',
        text: 'Faltan campos por llenar',
        icon: 'error',
      });
    }
  }
}
