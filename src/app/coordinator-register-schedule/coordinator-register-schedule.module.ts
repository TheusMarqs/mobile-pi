import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorRegisterSchedulePageRoutingModule } from './coordinator-register-schedule-routing.module';

import { CoordinatorRegisterSchedulePage } from './coordinator-register-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordinatorRegisterSchedulePageRoutingModule
  ],
  declarations: [CoordinatorRegisterSchedulePage]
})
export class CoordinatorRegisterSchedulePageModule {}
