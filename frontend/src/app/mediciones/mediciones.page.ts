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
  public ultima_medicion:Medicion
  public mediciones:Medicion;
  public idDispositivo

  constructor(private router:ActivatedRoute, private mServ:MedicionService) {}

  async ngOnInit() {
    let idDispositivo = this.router.snapshot.paramMap.get('id');
    try{    
      this.mServ.getUltimaMedicion(idDispositivo)
      .then((disp) => {this.ultima_medicion = disp
      console.log("La ultima medicion es: "+ JSON.stringify(disp))})
      .catch((err) => {console.log("EL ERROR ES" + err)});
    }catch(e){
      console.log("SE CATCHEO LA EXCEPCION")
    }

    await this.getPromisedata(idDispositivo)
  }

  async getPromisedata(idDispositivo){
    try{
      let mediciones_temporales:any = await this.mServ.getTodasMediciones(idDispositivo)
      this.mediciones = mediciones_temporales
      console.log("EL HISTORICO DE MEDICIONES es: "+JSON.stringify(this.mediciones))

    }
    catch(err){console.log("EL ERROR ES" + err)}

  }

}
