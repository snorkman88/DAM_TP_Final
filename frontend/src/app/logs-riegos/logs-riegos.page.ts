import { Component, OnInit } from '@angular/core';
import { RiegoService } from '../services/riego.service';
import { Riego } from '../model/Riego';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logs-riegos',
  templateUrl: './logs-riegos.page.html',
  styleUrls: ['./logs-riegos.page.scss'],
})
export class LogsRiegosPage implements OnInit {
  public riegos:Riego;
  public idElectrovalvula

  constructor(private router:ActivatedRoute, private lServ:RiegoService) { }

  async ngOnInit() {
    let idElectrovalvula = this.router.snapshot.paramMap.get('id');
    await this.getPromisedata(idElectrovalvula)
  }

  async getPromisedata(idElectrovalvula){
    try{
      let log_riegos_temporales:any = await this.lServ.getTodosLosRiegos(idElectrovalvula)
      this.riegos = log_riegos_temporales
      console.log("EL HISTORICO DE RIEGOS es: "+JSON.stringify(this.riegos))

    }
    catch(err){console.log("EL ERROR ES" + err)}

  }

}
