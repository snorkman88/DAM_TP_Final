import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  listado:Array<Dispositivo> = new Array<Dispositivo>();
  urlApi:string = "http://localhost:3000/api"

  //golpear api con un servicio y traer todos los dispositivos y meterlos en una lista de Objetos Dispositivo

  constructor(private _http: HttpClient) {
   }

  getDispositivo(id):Promise<Dispositivo>{     
    return this._http.get<Dispositivo>(this.urlApi+"/dispositivo/"+id).toPromise().then((disp: Dispositivo) => {
      //console.log("DISPOSITIVO: "+ JSON.stringify(disp));
      return disp;
    });
  };

  async asyncgetDispositivo(id){
    let dispositivo = await this._http.get(this.urlApi+"/dispositivo/"+id)
    return dispositivo
  }

  getDispositivos():Promise<Dispositivo[]>{     
    return this._http.get(this.urlApi+"/dispositivo/").toPromise().then((dispositivos:Dispositivo[])=>{
      return dispositivos;
    });
  };

  async asyncgetDispositivos(){
    return await this._http.get(this.urlApi+"/dispositivo/")
  }
}
