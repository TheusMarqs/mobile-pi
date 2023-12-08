import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorSchedulePageRoutingModule } from './coordinator-schedule-routing.module';

import { CoordinatorSchedulePage } from './coordinator-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordinatorSchedulePageRoutingModule
  ],
  declarations: [CoordinatorSchedulePage]
})
export class CoordinatorSchedulePageModule {}
