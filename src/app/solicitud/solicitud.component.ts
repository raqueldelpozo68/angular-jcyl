import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  private _solicitud = { nombre: "Raquel" };
  public get solicitud() {
    return this._solicitud;
  }
  public set solicitud(value) {
    this._solicitud = value;
  }

  constructor() { }
  ngOnInit(): void {
  }

}
