import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorDisciplinePageRoutingModule } from './coordinator-discipline-routing.module';

import { CoordinatorDisciplinePage } from './coordinator-discipline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordinatorDisciplinePageRoutingModule
  ],
  declarations: [CoordinatorDisciplinePage]
})
export class CoordinatorDisciplinePageModule {}
