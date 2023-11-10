import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordinatorCoursePageRoutingModule } from './coordinator-course-routing.module';

import { CoordinatorCoursePage } from './coordinator-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordinatorCoursePageRoutingModule
  ],
  declarations: [CoordinatorCoursePage]
})
export class CoordinatorCoursePageModule {}
