import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css'],

})
export class SolicitudComponent implements OnInit {

  parientes: { nombre: string; apellidos:string }[] = [{nombre:"Juan", apellidos:"Gomez"}, {nombre:"Luis", apellidos:"Gutierrez"}];
  nuevoPariente(){
      this.parientes.push({nombre:"Julio" , apellidos:"Pardinas"})
  }

  solicitud = {nombre: "", apellidos:""};
  solicitudComedor = 'Solicitud de Comedor';
  nuevaSolicitud = 'Nueva Solicitud';

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
  } 


