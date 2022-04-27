import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {


  solicitud = { nombre: "Raquel" };

  constructor() { 

    setTimeout(() => {
    this.solicitud.nombre = ' Pepa ';
  },2000)
}
  ngOnInit(): void {
  }

}
