import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentProfessorsPage } from './student-professors.page';

const routes: Routes = [
  {
    path: '',
    component: StudentProfessorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentProfessorsPageRoutingModule {}
