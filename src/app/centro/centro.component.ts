import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tipoCentro } from '../centros/centros.component';



@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})

export class CentroComponent implements OnInit {

 @Input() centro?:tipoCentro;

  constructor(private route: ActivatedRoute) {
      route.params.subscribe( x => console.log(x) )
  }

  ngOnInit(): void {
     }


}	