import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentProfessorSchedulePage } from './student-professor-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: StudentProfessorSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentProfessorSchedulePageRoutingModule {}
