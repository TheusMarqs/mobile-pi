import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinatorRegisterProfessorsPage } from './coordinator-register-professors.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinatorRegisterProfessorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorRegisterProfessorsPageRoutingModule {}
