import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CentrosComponent } from './centros/centros.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solicitudes';

  constructor(private router:Router){

  }

  navegarAlCentro(){
    this.router.navigate(['centro', "EmiliaPardoBazan"]);
  }
}
