import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorRegisterProfessorsPageRoutingModule } from './coordinator-register-professors-routing.module';

import { CoordinatorRegisterProfessorsPage } from './coordinator-register-professors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordinatorRegisterProfessorsPageRoutingModule
  ],
  declarations: [CoordinatorRegisterProfessorsPage]
})
export class CoordinatorRegisterProfessorsPageModule {}
