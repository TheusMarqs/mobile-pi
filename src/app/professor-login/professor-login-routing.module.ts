import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessorLoginPage } from './professor-login.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessorLoginPageRoutingModule {}
