import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../Course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coordinator-course',
  templateUrl: './coordinator-course.page.html',
  styleUrls: ['./coordinator-course.page.scss', '../app.component.scss'],
})
export class CoordinatorCoursePage implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe({
      next: data => this.courses = data
    });
  }

  edit(courses: Course) {
    this.router.navigate(['coordenador-atualizar-curso', courses.id]);
  }

  delete(courses: Course) {
    this.courseService.delete(courses).subscribe({
      next: () => this.loadCourses()
    });
  }

}
