import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunosProfessoresPageRoutingModule } from './alunos-professores-routing.module';

import { AlunosProfessoresPage } from './alunos-professores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlunosProfessoresPageRoutingModule
  ],
  declarations: [AlunosProfessoresPage]
})
export class AlunosProfessoresPageModule {}
