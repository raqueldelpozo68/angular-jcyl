import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentroComponent } from './centro/centro.component';
import { CentrosComponent } from './centros/centros.component';
import { DatosBancariosComponent } from './datos-bancarios/datos-bancarios.component';
import { SolicitudesComponent } from "./solicitudes/solicitudes.component";


let routes= [
  {path:"solicitudes",component:SolicitudesComponent},
  {path:"centros",component:CentrosComponent},
  {path:"centro/:centroId",component:CentroComponent},
  {path:"datosbancarios",component:DatosBancariosComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)

  ]
})
export class AppRoutingModule { }
