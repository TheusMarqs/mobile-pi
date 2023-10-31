import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinatorRegisterDisciplinePage } from './coordinator-register-discipline.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinatorRegisterDisciplinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorRegisterDisciplinePageRoutingModule {}
