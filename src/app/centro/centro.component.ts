import { Component, Input, OnInit } from '@angular/core';
import { CentrosComponent, tipoCentro } from '../centros/centros.component';



@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})

export class CentroComponent implements OnInit {

 @Input() centro?:tipoCentro;
  constructor() { }

  ngOnInit(): void {
  }


}	