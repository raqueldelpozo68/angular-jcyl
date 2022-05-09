import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centros',
  templateUrl: './centros.component.html',
  styleUrls: ['./centros.component.css']
})
export class CentrosComponent implements OnInit {

  centros: tipoCentro[] = [{nombre:"Rosa Chacel",codigo:"002"},{nombre:"Gloria Fuertes" ,codigo:"009"}]
 
  constructor() { }

  ngOnInit(): void {
  }

}
export class tipoCentro{
  nombre?:string
  codigo?:string
}