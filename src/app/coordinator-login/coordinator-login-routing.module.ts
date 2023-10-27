import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinatorLoginPage } from './coordinator-login.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinatorLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorLoginPageRoutingModule {}
