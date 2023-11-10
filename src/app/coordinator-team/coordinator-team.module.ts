import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorTeamPageRoutingModule } from './coordinator-team-routing.module';

import { CoordinatorTeamPage } from './coordinator-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordinatorTeamPageRoutingModule
  ],
  declarations: [CoordinatorTeamPage]
})
export class CoordinatorTeamPageModule {}
