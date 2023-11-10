import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorClassroomPageRoutingModule } from './coordinator-classroom-routing.module';

import { CoordinatorClassroomPage } from './coordinator-classroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordinatorClassroomPageRoutingModule
  ],
  declarations: [CoordinatorClassroomPage]
})
export class CoordinatorClassroomPageModule {}
