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

  constructor(private _http: HttpClient ) {
    var disp:Dispositivo= new Dispositivo(1,"Sensor 1","Patio",1);
    var disp2:Dispositivo= new Dispositivo(2,"Sensor 2","Cocina",2);
    var disp3:Dispositivo= new Dispositivo(3,"Sensor 3","Jardin Delantero",3);
    var disp4:Dispositivo= new Dispositivo(4,"Sensor 4","Living",4);

   }

  getDispositivo(id):Promise<Dispositivo>{     
    return this._http.get<Dispositivo>(this.urlApi+"/dispositivo/"+id).toPromise()
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
