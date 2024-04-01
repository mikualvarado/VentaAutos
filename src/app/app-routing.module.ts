import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/Home/Home.component';
import { PagListaVehiculosComponent } from './paginas/PagListaVehiculos/PagListaVehiculos.component';
import { PageNotFoundComponent } from './paginas/PageNotFound/PageNotFound.component';
import { PagVehiculoComponent } from './paginas/PagVehiculo/PagVehiculo.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { ClienteRegistroComponent } from './clientes/ClienteRegistro/ClienteRegistro.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'vehiculos',
    component: PagListaVehiculosComponent,
  },
  {
    path: 'vehiculo',
    component: PagVehiculoRegistroComponent,
  },
  {
    path: 'vehiculo/:codigo',
    component: PagVehiculoComponent,
  },
  {
    path: 'clientes',
    component: ClienteRegistroComponent,
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
