import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { Dispositivo } from '../model/Dispositivo';

import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public dispositivo:Dispositivo;
  
  constructor(private router:ActivatedRoute, public dServ:DispositivoService) {}
  ngOnInit() {
    let idDispositivo = this.router.snapshot.paramMap.get('id');

    this.dServ.getDispositivo(1)
    .then((disp) => {this.dispositivo = disp
    console.log("DISPOSITIVO: "+ JSON.stringify(disp))})
    .catch((err) => {console.log("EL ERROR ES" + err)});

    this.dServ.getDispositivos()
    .then((disp) => {this.dServ.listado = disp
    console.log("DISPOSITIVOS: "+ JSON.stringify(disp))})
    .catch((err) => {console.log("EL ERROR ES" + err)});

  }

}
