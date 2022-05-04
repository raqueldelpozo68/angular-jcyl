import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centro',
  //templateUrl: './centro.component.html',
  template:`
       <h1>Centro</h1>
               <div class="mb-3 mt-3">
                   <label for="nombre" class="form-label">Nombre:</label>
                   {{centro.nombre}}
               </div>                    
      
               <div class="mb-3 mt-3">
                 <label for="codigo" class="form-label">Codigo:</label>
                    {{centro.codigo}}
               </div>
  `,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {
  centro = {nombre: "IES Lo imposible", codigo:"003"};
  constructor() { }

  ngOnInit(): void {
  }

}
