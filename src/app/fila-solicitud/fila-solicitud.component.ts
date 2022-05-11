import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fila-solicitud',
  templateUrl: './fila-solicitud.component.html',
  styleUrls: ['./fila-solicitud.component.css']
})
export class FilaSolicitudComponent implements OnInit {

  @Input() solicitud:any;

  @Output() solicitudEliminada = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  eliminar(solicitud:any){
      this.solicitudEliminada.emit(this.solicitud);
  }
}
