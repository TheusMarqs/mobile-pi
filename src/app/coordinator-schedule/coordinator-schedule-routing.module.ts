import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinatorSchedulePage } from './coordinator-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinatorSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorSchedulePageRoutingModule {}
