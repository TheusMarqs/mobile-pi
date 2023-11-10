import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinatorClassroomPage } from './coordinator-classroom.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinatorClassroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorClassroomPageRoutingModule {}
