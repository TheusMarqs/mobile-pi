import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinatorRegisterCoursePage } from './coordinator-register-course.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinatorRegisterCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorRegisterCoursePageRoutingModule {}
