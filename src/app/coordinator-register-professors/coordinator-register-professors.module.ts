import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorRegisterProfessorsPageRoutingModule } from './coordinator-register-professors-routing.module';

import { CoordinatorRegisterProfessorsPage } from './coordinator-register-professors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CoordinatorRegisterProfessorsPageRoutingModule
  ],
  declarations: [CoordinatorRegisterProfessorsPage]
})
export class CoordinatorRegisterProfessorsPageModule {}
