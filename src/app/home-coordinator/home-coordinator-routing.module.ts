import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCoordinatorPage } from './home-coordinator.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCoordinatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCoordinatorPageRoutingModule {}
