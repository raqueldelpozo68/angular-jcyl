import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CentroComponent } from './centro/centro.component';
import { CentrosComponent } from './centros/centros.component';
import { HttpClientModule } from '@angular/common/http';
import { FilaSolicitudComponent } from './fila-solicitud/fila-solicitud.component';
import { SelectorCentroComponent } from './selector-centro/selector-centro.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { SolicitudModule } from './solicitud/solicitud.module';
import { DatosBancariosComponent } from './datos-bancarios/datos-bancarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    AppComponent,
    CentrosComponent,
    CentroComponent,
    DatosBancariosComponent
    
  ],
  imports: [
    SolicitudModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  exports: [

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
