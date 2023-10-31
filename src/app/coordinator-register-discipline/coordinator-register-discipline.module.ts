import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorRegisterDisciplinePageRoutingModule } from './coordinator-register-discipline-routing.module';

import { CoordinatorRegisterDisciplinePage } from './coordinator-register-discipline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CoordinatorRegisterDisciplinePageRoutingModule
  ],
  declarations: [CoordinatorRegisterDisciplinePage]
})
export class CoordinatorRegisterDisciplinePageModule {}
