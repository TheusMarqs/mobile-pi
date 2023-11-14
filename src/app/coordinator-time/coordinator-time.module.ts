import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorTimePageRoutingModule } from './coordinator-time-routing.module';

import { CoordinatorTimePage } from './coordinator-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordinatorTimePageRoutingModule
  ],
  declarations: [CoordinatorTimePage]
})
export class CoordinatorTimePageModule {}
