import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogsRiegosPageRoutingModule } from './logs-riegos-routing.module';

import { LogsRiegosPage } from './logs-riegos.page';

import { ValvulaPipe } from '../pipes/valvula.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogsRiegosPageRoutingModule
  ],
  declarations: [LogsRiegosPage, ValvulaPipe]
})
export class LogsRiegosPageModule {}
