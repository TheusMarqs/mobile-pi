import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinatorCoursePage } from './coordinator-course.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinatorCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorCoursePageRoutingModule {}
