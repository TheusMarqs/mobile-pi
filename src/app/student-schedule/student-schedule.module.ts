import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentSchedulePageRoutingModule } from './student-schedule-routing.module';

import { StudentSchedulePage } from './student-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentSchedulePageRoutingModule
  ],
  declarations: [StudentSchedulePage]
})
export class StudentSchedulePageModule {}
