import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentProfessorsPageRoutingModule } from './student-professors-routing.module';

import { StudentProfessorsPage } from './student-professors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentProfessorsPageRoutingModule
  ],
  declarations: [StudentProfessorsPage]
})
export class StudentProfessorsPageModule {}
