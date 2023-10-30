import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinatorProfessorsPage } from './coordinator-professors.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinatorProfessorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorProfessorsPageRoutingModule {}
