import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoLoginPage } from './aluno-login.page';

const routes: Routes = [
  {
    path: '',
    component: AlunoLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoLoginPageRoutingModule {}
