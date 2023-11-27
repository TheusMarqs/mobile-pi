import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../Course';

@Component({
  selector: 'app-coordinator-course',
  templateUrl: './coordinator-course.page.html',
  styleUrls: ['./coordinator-course.page.scss'],
})
export class CoordinatorCoursePage implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe({
      next: data => this.courses = data
    });
  }

}
