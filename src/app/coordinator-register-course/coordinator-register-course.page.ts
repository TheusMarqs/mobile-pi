import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-coordinator-register-course',
  templateUrl: './coordinator-register-course.page.html',
  styleUrls: ['./coordinator-register-course.page.scss'],
})
export class CoordinatorRegisterCoursePage implements OnInit {

  formGroupCourse : FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private CourseService: CourseService,
    private route: ActivatedRoute,
    private router: Router) {

    this.formGroupCourse = formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.pattern(/\S/)]],
      workload: ['', [Validators.required, Validators.pattern]],
      duration: ['', [Validators.required, Validators.pattern(/\S/)]],
      condition: [false]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getCourseById(id);
  }

  getCourseById(id: number) {
    this.CourseService.getCourse(id).subscribe({
      next: data => {
        this.formGroupCourse.setValue(data);
        this.isEditing = true;
      }
    })
  }


  save() {
    this.submitted = true;
    if (this.isEditing) {
      if (this.formGroupCourse.valid) {
        this.CourseService.update(this.formGroupCourse.value).subscribe({
          next: () => {
            this.router.navigate(['coordenador/exibir-curso']);
          }
        })
      }
    }

    else {
      this.CourseService.save(this.formGroupCourse.value).subscribe({
        next: () => {
          this.router.navigate(['coordenador/exibir-curso']);
        }
      })
    }

  }

  cancel() {
    this.router.navigate(['coordenador/exibir-curso']);
  }

  get name(): any {
    return this.formGroupCourse.get("name");
  }
  get workload(): any {
    return this.formGroupCourse.get("workload");
  }
  get duration(): any {
    return this.formGroupCourse.get("duration");
  }
}
