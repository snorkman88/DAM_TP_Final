import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicionService } from '../services/medicion.service';
import { Medicion } from '../model/Medicion';


@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit {
  public medicion:Medicion;

  constructor(private router:ActivatedRoute, private mServ:MedicionService) {}

  ngOnInit() {
    let idDispositivo = this.router.snapshot.paramMap.get('id');
    try{    
      this.mServ.getUltimaMedicion(idDispositivo)
      .then((disp) => {this.medicion = disp
      console.log("LA ULTIMA MEDICION ES: "+ JSON.stringify(disp))})
      .catch((err) => {console.log("EL ERROR ES" + err)});
    }catch(e){
      console.log("SE CATCHEO LA EXCEPCION")
    }
  }

}
