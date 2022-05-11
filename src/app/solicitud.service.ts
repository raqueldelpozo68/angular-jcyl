import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor() { }

  getSolicitudes(){
    return [{id:"1", nombre:"Elena", apellidos:"Gomez"}, {id:"3",nombre:"Maria", apellidos:"Gutierrez"}];
  }
}
