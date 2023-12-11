import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentChooseProfessorPageRoutingModule } from './student-choose-professor-routing.module';

import { StudentChooseProfessorPage } from './student-choose-professor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentChooseProfessorPageRoutingModule
  ],
  declarations: [StudentChooseProfessorPage]
})
export class StudentChooseProfessorPageModule {}
