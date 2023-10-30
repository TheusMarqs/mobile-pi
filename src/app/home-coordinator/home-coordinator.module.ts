import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCoordinatorPageRoutingModule } from './home-coordinator-routing.module';

import { HomeCoordinatorPage } from './home-coordinator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCoordinatorPageRoutingModule
  ],
  declarations: [HomeCoordinatorPage]
})
export class HomeCoordinatorPageModule {}
