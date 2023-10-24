import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessorLoginPageRoutingModule } from './professor-login-routing.module';

import { ProfessorLoginPage } from './professor-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessorLoginPageRoutingModule
  ],
  declarations: [ProfessorLoginPage]
})
export class ProfessorLoginPageModule {}
