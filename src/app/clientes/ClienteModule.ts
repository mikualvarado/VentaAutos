import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilitariosModule } from '../utilitarios/UtilitariosModule';
import { RouterModule } from '@angular/router';
import { ClienteRegistroComponent } from './ClienteRegistro/ClienteRegistro.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilitariosModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    ClienteRegistroComponent
  ],
  exports: [
    ClienteRegistroComponent
  ],
})
export class ClienteModule {}
