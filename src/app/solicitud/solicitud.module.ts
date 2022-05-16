import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesComponent } from '../solicitudes/solicitudes.component';
import { FilaSolicitudComponent } from '../fila-solicitud/fila-solicitud.component';
import { SelectorCentroComponent } from '../selector-centro/selector-centro.component';


@NgModule({
  declarations: [
    SolicitudesComponent,
    SelectorCentroComponent,
    FilaSolicitudComponent,
  ],
  imports: [
    CommonModule,
  ],

})
export class SolicitudModule { }
