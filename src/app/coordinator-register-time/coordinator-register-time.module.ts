import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorRegisterTimePageRoutingModule } from './coordinator-register-time-routing.module';

import { CoordinatorRegisterTimePage } from './coordinator-register-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CoordinatorRegisterTimePageRoutingModule
  ],
  declarations: [CoordinatorRegisterTimePage]
})
export class CoordinatorRegisterTimePageModule {}
