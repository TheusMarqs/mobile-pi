import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinatorRegisterTimePage } from './coordinator-register-time.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinatorRegisterTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinatorRegisterTimePageRoutingModule {}
