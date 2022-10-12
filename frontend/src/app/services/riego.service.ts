import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Riego } from '../model/Riego';

@Injectable({
  providedIn: 'root'
})
export class RiegoService {
  urlApi:string = "http://localhost:3000/api"
  constructor(private _http: HttpClient) {
  }

  //GET ESTADO ACTUAL ELECTROVALVULA
  getEstadoElectrovalvula(idElectrovalvula):Promise<Riego>{
    return this._http.get<Riego>(this.urlApi+"/riego/"+idElectrovalvula+"/actual").toPromise().then((evento_riego:Riego) => {
      return evento_riego
    })
  }

  //TRAER EL LOG DE RIEGOS
  getTodosLosRiegos(idElectrovalvula):Promise<Riego[]>{     
    return this._http.get<Riego[]>(this.urlApi+"/riego/"+idElectrovalvula+"/todas").toPromise().then((evento_riego:Riego[]) => {
      return evento_riego
    })
  };

  //INSERTAR UNA NUEVA ENTRADA EN EL LOG DE RIEGOS
  postNuevoRiego(idElectrovalvula, nuevo_evento){
    this._http.post(this.urlApi+"/riego/"+idElectrovalvula, nuevo_evento).toPromise().then(() => {
    })
  };

  //INSERTAR UNA NUEVO VALOR DE MEDICION
  postNuevaMedicion(fecha, valor, idDispositivo){
    this._http.post(this.urlApi+"/medicion/agregar", {fecha, valor, idDispositivo}).toPromise().then(() => {
    })
  };

}
