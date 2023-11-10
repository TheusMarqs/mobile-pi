import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinatorTeamPage } from './coordinator-team.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinatorTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorTeamPageRoutingModule {}
