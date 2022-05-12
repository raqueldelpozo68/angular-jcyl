import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentrosComponent } from './centros/centros.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';

let routes= [
  {path:"solicitudes",component:SolicitudesComponent},
  {path:"centros",component:CentrosComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)

  ]
})
export class AppRoutingModule { }
