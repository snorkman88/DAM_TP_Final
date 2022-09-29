import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../model/Dispositivo';
import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  public dispositivo:Dispositivo;
  constructor(private router:ActivatedRoute, private dServ:DispositivoService) { }

  ngOnInit() {
    let idDispositivo = this.router.snapshot.paramMap.get('id');
    //this.dispositivo = this.dServ.getDispositivo(idDispositivo);
    //this.dServ.getDispositivo(1).then((disp) => {this.dispositivo = disp});

    let tmp_listado:any = this.dServ.asyncgetDispositivos()
    this.dServ.listado = tmp_listado
    alert("LLEGA!!!")
    let tmp:any = this.dServ.asyncgetDispositivo(1)
    this.dispositivo = tmp

    console.log(this.dispositivo);
  }

  ionViewWillEnter(){
    
  }



}
