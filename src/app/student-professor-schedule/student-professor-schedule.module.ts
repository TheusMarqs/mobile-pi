import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentProfessorSchedulePageRoutingModule } from './student-professor-schedule-routing.module';

import { StudentProfessorSchedulePage } from './student-professor-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentProfessorSchedulePageRoutingModule
  ],
  declarations: [StudentProfessorSchedulePage]
})
export class StudentProfessorSchedulePageModule {}
