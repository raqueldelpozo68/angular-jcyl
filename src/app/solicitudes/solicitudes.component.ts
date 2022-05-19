import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css'],
})
export class SolicitudesComponent implements OnInit {

  solicitudComedor = 'Solicitud de Comedor';

  solicitud = { id: "", nombre: "NNNNNN", apellidos: "" };
  solicitudesP: any;
  solicitudes: any;

  constructor(private solicitudService: SolicitudService) {
    this.solicitudes = solicitudService.getSolicitudes();
  }

  ngOnInit(): void {
  }

  enviar(solicitud: any) {
    console.log('Enviada', solicitud);
  }
  nuevaSolicitud() {
    this.solicitudesP.push({ id: "4", nombre: "Julio", apellidos: "Pardinas" });
  }

  eliminar(solicitud: any) {
    //this.solicitudes = this.solicitudes.filter(x => x.id != solicitud.id)
  }

}
