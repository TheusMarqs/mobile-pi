import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentChooseProfessorPage } from './student-choose-professor.page';

const routes: Routes = [
  {
    path: '',
    component: StudentChooseProfessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentChooseProfessorPageRoutingModule {}
