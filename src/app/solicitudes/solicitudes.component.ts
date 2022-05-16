import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css'],
})
export class SolicitudesComponent implements OnInit {
  solicitudesP: any;

  solicitud = { id: "", nombre: "", apellidos: "" };
  solicitudComedor = 'Solicitud de Comedor';

  constructor(private solicitudService: SolicitudService) {
    this.solicitudesP = solicitudService.getSolicitudes();
  }

  ngOnInit(): void {
  }

  enviar(solicitud: any) {
    console.log('Enviada', solicitud.nombre, solicitud.apellidos);
  }
  actualizarApellidos($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement;
    this.solicitud.apellidos = element.value;
    console.log('Actualizados Apellidos: ', this.solicitud.apellidos);
  }
  actualizarNombre($event: KeyboardEvent) {
    const element = $event.target as HTMLInputElement;
    this.solicitud.nombre = element.value;
    console.log('Actualizado Nombre: ', this.solicitud.nombre);
  }

  nuevaSolicitud() {
    this.solicitudesP.push({ id: "4", nombre: "Julio", apellidos: "Pardinas" });
  }

  eliminar(solicitud: any) {
    //this.solicitudes = this.solicitudes.filter(x => x.id != solicitud.id)
  }

}
