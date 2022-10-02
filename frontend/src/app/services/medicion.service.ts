import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicion } from '../model/Medicion';


@Injectable({
  providedIn: 'root'
})
export class MedicionService {
  urlApi:string = "http://localhost:3000/api"// "/medicion/:id"
  
  constructor(private _http: HttpClient) {
  }
  
  getUltimaMedicion(id):Promise<Medicion>{     
    return this._http.get<Medicion>(this.urlApi+"/medicion/"+id).toPromise().then((med:Medicion) => {
      return med
    })
  };
}

