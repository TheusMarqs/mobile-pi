import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorProfessorsPageRoutingModule } from './coordinator-professors-routing.module';

import { CoordinatorProfessorsPage } from './coordinator-professors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordinatorProfessorsPageRoutingModule
  ],
  declarations: [CoordinatorProfessorsPage]
})
export class CoordinatorProfessorsPageModule {}
