import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordenadorLoginPageRoutingModule } from './coordenador-login-routing.module';

import { CoordenadorLoginPage } from './coordenador-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordenadorLoginPageRoutingModule
  ],
  declarations: [CoordenadorLoginPage]
})
export class CoordenadorLoginPageModule {}
