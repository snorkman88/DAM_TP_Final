import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';
import { Dispositivo } from '../model/Dispositivo';
import { DispositivoService } from '../services/dispositivo.service';
import { MedicionService } from '../services/medicion.service';
import { Medicion } from '../model/Medicion';
import { RiegoService } from '../services/riego.service';
import { Riego } from '../model/Riego';


declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {
  public dispositivo:Dispositivo;
  public medicion:Medicion;
  public idDispositivo
  public myChart;
  private chartOptions;
  public estadoEv

  constructor(private router:ActivatedRoute, private dServ:DispositivoService, private mServ: MedicionService, private lServ:RiegoService) {
  }

  async ngOnInit() {

    this.idDispositivo = this.router.snapshot.paramMap.get('id');

    let dispositivo_temp = await this.dServ.getDispositivo(this.idDispositivo)
    this.dispositivo = dispositivo_temp

    await this.getMedicionPromiseData()
    console.log("La medicion es: "+ this.medicion.valor)

    await this.getEstadoEVPromisedata(this.dispositivo.electrovalvulaId)
    this.generarChart();
    }

  async togglearEstadoEV() {
      this.estadoEv = !this.estadoEv;
      console.log('La electrovalvula del dispositivo' + this.dispositivo.nombre + ' esta ' + this.estadoEv);
      let nuevo_evento: Riego = new Riego(0, new Date(), Number(this.estadoEv), this.dispositivo.electrovalvulaId);//crear esta dataclass "Logs"
      this.lServ.postNuevoRiego(this.dispositivo.electrovalvulaId, nuevo_evento); //agregar nueva entrada de
      let nuevo_valor_sensor:number = this.getRandomInt(0, 100);
      let fecha:Date = new Date()
      this.lServ.postNuevaMedicion(fecha, nuevo_valor_sensor, this.dispositivo.dispositivoId);

    }

  getRandomInt(min=0, max) : number{
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

  async getEstadoEVPromisedata(idElectrovalvula){
    try{
      let estado_temporales:any = await this.lServ.getEstadoElectrovalvula(idElectrovalvula)
      this.estadoEv = estado_temporales
      console.log("La EV esta: "+JSON.stringify(this.estadoEv.apertura))
    }
    catch(err){console.log("EL ERROR ES" + err)}

  }

  async getMedicionPromiseData(){
    try{    
      let medicion_temporal = await this.mServ.getUltimaMedicion(this.idDispositivo) 
      this.medicion = medicion_temporal
    }
    catch(err) {console.log("EL ERROR ES" + err)};
  }

  async generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: "#000000",
          plotBackgroundImage: "#000000",
          plotBorderWidth: 0,
          plotShadow: false,
          height: '300px'
        }
        ,title: {
          text: [this.dispositivo.nombre]
        }
        ,credits:{enabled:false}
        ,pane: {
            startAngle: -150,
            endAngle: 150,
            center: ['50%', '50%'],
            size: '100%'
        }
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Cb kPa'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#000000' // black
        }, {
            from: 10,
            to: 30,
            color: '#55BF3B' // green
        }, {
            from: 30,
            to: 60,
            color: '#DDDF0D' // yellow
        }, {
            from: 60,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
    series: [{
        name: 'Cb',
        data: [Number(this.medicion.valor)],
        tooltip: {
            valueSuffix: ' Cb'
        }
    }]
    };
    console.log('DEBUG: Highcharts: '+ this.chartOptions.series);
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }
}
