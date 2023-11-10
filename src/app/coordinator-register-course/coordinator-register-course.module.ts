import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorRegisterCoursePageRoutingModule } from './coordinator-register-course-routing.module';

import { CoordinatorRegisterCoursePage } from './coordinator-register-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CoordinatorRegisterCoursePageRoutingModule
  ],
  declarations: [CoordinatorRegisterCoursePage]
})
export class CoordinatorRegisterCoursePageModule {}
