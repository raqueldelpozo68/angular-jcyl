import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css'],

})
export class SolicitudComponent implements OnInit {

  solicitudes: { id:string, nombre: string; apellidos:string }[] = [{id:"1", nombre:"Juan", apellidos:"Gomez"}, {id:"3",nombre:"Luis", apellidos:"Gutierrez"}];
  nuevaSolicitud(){
      this.solicitudes.push({id:"4", nombre:"Julio" , apellidos:"Pardinas"})
  }

  solicitud = {id: "", nombre: "", apellidos:""};
  solicitudComedor = 'Solicitud de Comedor';

 

  constructor() { 
  }
  
  ngOnInit(): void {
  }

  enviar(solicitud:any){
    console.log('Enviada', solicitud.nombre, solicitud.apellidos);
    
  }
  actualizarApellidos($event: KeyboardEvent){
      const element = $event.target as HTMLInputElement;
      this.solicitud.apellidos = element.value; 
      console.log('Actualizados Apellidos: ', this.solicitud.apellidos);
      }
  actualizarNombre($event: KeyboardEvent){
    const element = $event.target as HTMLInputElement;
    this.solicitud.nombre = element.value; 
    console.log('Actualizado Nombre: ', this.solicitud.nombre);
    }
  eliminar(solicitud:any){
    this.solicitudes = this.solicitudes.filter(x => x.id != solicitud.id)
  }
   
  } 


