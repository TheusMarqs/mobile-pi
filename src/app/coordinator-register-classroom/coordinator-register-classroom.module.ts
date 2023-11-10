import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorRegisterClassroomPageRoutingModule } from './coordinator-register-classroom-routing.module';

import { CoordinatorRegisterClassroomPage } from './coordinator-register-classroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CoordinatorRegisterClassroomPageRoutingModule
  ],
  declarations: [CoordinatorRegisterClassroomPage]
})
export class CoordinatorRegisterClassroomPageModule {}
