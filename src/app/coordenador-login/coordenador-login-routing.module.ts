import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordenadorLoginPage } from './coordenador-login.page';

const routes: Routes = [
  {
    path: '',
    component: CoordenadorLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordenadorLoginPageRoutingModule {}
