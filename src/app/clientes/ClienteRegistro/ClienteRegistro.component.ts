import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../utilitarios/modelos/Cliente';
import { ClienteService } from '../../servicios/Cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ClienteRegistro',
  templateUrl: './ClienteRegistro.component.html',
  styleUrls: ['./ClienteRegistro.component.css'],
})
export class ClienteRegistroComponent implements OnInit {
  clienteFormulario: FormGroup;
  cliente: Cliente | undefined;
  isChecked: boolean = false;

  constructor(
    fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.clienteFormulario = fb.group({
      isChecked: [this.isChecked],
      nombre: [],
      apellido: [],
      password: [],
      telefono: [],
      email: [],
    });

    if (!this.isChecked) {
      this.clienteFormulario.get('email')?.clearValidators();
      this.clienteFormulario.get('telefono')?.clearValidators();
    }
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.clienteFormulario.valid) {
      this.clienteService
        .addCliente({
          ...this.clienteFormulario.value,
        })
        .subscribe((result) => {
          if (result.codigo == '1') {
            Swal.fire({
              title: 'Éxito',
              text: 'Cliente registrado correctamente',
              icon: 'success',
            }).then((res) => {
              this.clienteFormulario.reset();
            });
          } else {
            Swal.fire({
              title: 'Error',
              text: 'No se pudo registrar el cliente' + result.mensaje,
              icon: 'error',
            });
          }
        });
    } else {
      Swal.fire({
        title: 'Alerta',
        text: 'Faltan llenar campos en el formulario',
        icon: 'error',
      });
    }
  }

  onChange() {
    this.isChecked = !this.isChecked;
    this.clienteFormulario.get('email')?.setValue('');
    this.clienteFormulario.get('telefono')?.setValue('');
  }

}
