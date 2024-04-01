import { NgModule } from '@angular/core';
import { PagListaVehiculosComponent } from './PagListaVehiculos/PagListaVehiculos.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilitariosModule } from '../utilitarios/UtilitariosModule';
import { PagVehiculoComponent } from './PagVehiculo/PagVehiculo.component';
import { RouterModule } from '@angular/router';
import { PagVehiculoRegistroComponent } from './PagVehiculoRegistro/PagVehiculoRegistro.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilitariosModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    PagListaVehiculosComponent,
    PagVehiculoComponent,
    PagVehiculoRegistroComponent
  ],
  exports: [
    PagListaVehiculosComponent,
    PagVehiculoComponent,
    PagVehiculoRegistroComponent
  ],
})
export class PaginaModule {}
