import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentSchedulePage } from './student-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: StudentSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentSchedulePageRoutingModule {}
