import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorRegisterTeamPageRoutingModule } from './coordinator-register-team-routing.module';

import { CoordinatorRegisterTeamPage } from './coordinator-register-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CoordinatorRegisterTeamPageRoutingModule
  ],
  declarations: [CoordinatorRegisterTeamPage]
})
export class CoordinatorRegisterTeamPageModule {}
