import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinatorRegisterTeamPage } from './coordinator-register-team.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinatorRegisterTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorRegisterTeamPageRoutingModule {}
