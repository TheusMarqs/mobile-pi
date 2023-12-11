import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplineService } from '../discipline.service';
import { CourseService } from '../course.service';
import { Course } from '../Course';

@Component({
  selector: 'app-coordinator-register-discipline',
  templateUrl: './coordinator-register-discipline.page.html',
  styleUrls: ['./coordinator-register-discipline.page.scss'],
})
export class CoordinatorRegisterDisciplinePage implements OnInit {

  formGroupDiscipline: FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;
  courses: Course[] = [];

  constructor(private formBuilder: FormBuilder, private disciplineService: DisciplineService,
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService) {

    this.formGroupDiscipline = formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-záâãàéêíóôõúçñ ]+$/), Validators.pattern(/\S/)]],
      workload: [, [Validators.required]],
      course: [, [Validators.required]],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id) {
      this.getDisciplineById(id);
    }
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe({
      next: data => this.courses = data
    });
  }

  getDisciplineById(id: number) {
    this.disciplineService.getDiscipline(id).subscribe({
      next: data => {
        this.formGroupDiscipline.setValue(data);
        this.isEditing = true;
      }
    })
  }


  save() {
    this.submitted = true;
    if (this.formGroupDiscipline.valid) {
      if (this.isEditing) {

        this.disciplineService.update(this.formGroupDiscipline.value).subscribe({
          next: () => {
            this.router.navigate(['coordenador-disciplina']);
          }
        })
      }

      else {
        this.disciplineService.save(this.formGroupDiscipline.value).subscribe({
          next: () => {
            this.router.navigate(['coordenador-disciplina']);
          }
        })
      }
    }

  }

  cancel() {
    this.router.navigate(['coordenador-disciplina']);
  }

  get name(): any {
    return this.formGroupDiscipline.get("name");
  }
  get workload(): any {
    return this.formGroupDiscipline.get("workload");
  }
  get course(): any {
    return this.formGroupDiscipline.get("course");
  }

}
