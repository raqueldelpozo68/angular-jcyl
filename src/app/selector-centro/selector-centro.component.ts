import { Component, OnInit, Output } from '@angular/core';
import { tipoCentro } from '../centros/centros.component';

@Component({
  selector: 'app-selector-centro',
  template: `
      <input (keyup)="buscarCentro($event)" [value]="centroSeleccionado?.nombre">

      <div *ngFor="let centro of centrosFiltrados">
          <p (click) = "seleccionarCentro(centro)">{{centro.nombre}}</p>
      </div>
  `,
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent implements OnInit {
  centros: tipoCentro[] = [{nombre:"Rosa Chacel"},{nombre:"Gloria Fuertes"}];
  centrosFiltrados: tipoCentro[] = [];
  @Output()
  centroSeleccionado?: tipoCentro = {nombre:''};

  constructor() { }

  ngOnInit(): void {
  }

  buscarCentro($event:KeyboardEvent):any{
      const target = $event.target as HTMLInputElement;
      this.centrosFiltrados = this.centros.filter(centro => centro.nombre?.toLocaleLowerCase().includes(target.value.toLocaleLowerCase()))
  }
  
  seleccionarCentro(centro:tipoCentro){
      this.centroSeleccionado = centro;
  }
 

 
  


}

