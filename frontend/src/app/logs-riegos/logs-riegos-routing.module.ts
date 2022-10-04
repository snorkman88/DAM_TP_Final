import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogsRiegosPage } from './logs-riegos.page';

const routes: Routes = [
  {
    path: '',
    component: LogsRiegosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogsRiegosPageRoutingModule {}
