import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { DisciplineService } from '../discipline.service';
import { Course } from '../Course';
import { Discipline } from '../Discipline';

@Component({
  selector: 'app-coordinator-discipline',
  templateUrl: './coordinator-discipline.page.html',
  styleUrls: ['./coordinator-discipline.page.scss'],
})
export class CoordinatorDisciplinePage implements OnInit {
  courses: Course[] = [];
  disciplines: Discipline[] = [];

  constructor(private courseService: CourseService, private disciplineService: DisciplineService) { }

  ngOnInit(): void {
    this.loadCourses();
    this.loadDisciplines();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe({
      next: data => this.courses = data
    });
  }

  loadDisciplines() {
    this.disciplineService.getDisciplines().subscribe({
      next: data => this.disciplines = data
    });
  }

  getCourseName(disciplineId: number): string {
    const discipline = this.disciplines.find((discipline) => discipline.id === disciplineId);
    if (discipline) {
      const course = this.courses.find((course) => course.id === discipline.course);
      return course ? course.name  : 'Curso não encontrado';
    }
    return 'Disciplina não encontrada';
  }

}
