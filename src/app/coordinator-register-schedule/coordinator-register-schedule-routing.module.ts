import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinatorRegisterSchedulePage } from './coordinator-register-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinatorRegisterSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorRegisterSchedulePageRoutingModule {}
