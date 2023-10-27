import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosProfessoresPage } from './alunos-professores.page';

const routes: Routes = [
  {
    path: '',
    component: AlunosProfessoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosProfessoresPageRoutingModule {}
