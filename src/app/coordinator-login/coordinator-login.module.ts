import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorLoginPageRoutingModule } from './coordinator-login-routing.module';

import { CoordinatorLoginPage } from './coordinator-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordinatorLoginPageRoutingModule
  ],
  declarations: [CoordinatorLoginPage]
})
export class CoordinatorLoginPageModule {}
