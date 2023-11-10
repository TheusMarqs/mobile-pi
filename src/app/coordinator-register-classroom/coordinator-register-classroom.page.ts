import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassroomService } from '../classroom.service';

@Component({
  selector: 'app-coordinator-register-classroom',
  templateUrl: './coordinator-register-classroom.page.html',
  styleUrls: ['./coordinator-register-classroom.page.scss'],
})
export class CoordinatorRegisterClassroomPage implements OnInit {

  formGroupClassroom : FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private classroomService: ClassroomService,
    private route: ActivatedRoute,
    private router: Router) {

    this.formGroupClassroom = formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.pattern(/\S/)]],
      capacity: ['', [Validators.required, Validators.pattern]],
      type: ['', [Validators.required, Validators.pattern(/\S/)]],
      condition: [false]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getClassroomById(id);
  }

  getClassroomById(id: number) {
    this.classroomService.getClassroom(id).subscribe({
      next: data => {
        this.formGroupClassroom.setValue(data);
        this.isEditing = true;
      }
    })
  }


  save() {
    this.submitted = true;
    if (this.isEditing) {
      if (this.formGroupClassroom.valid) {
        this.classroomService.update(this.formGroupClassroom.value).subscribe({
          next: () => {
            this.router.navigate(['coordenador/exibir-sala']);
          }
        })
      }
    }

    else {
      this.classroomService.save(this.formGroupClassroom.value).subscribe({
        next: () => {
          this.router.navigate(['coordenador/exibir-sala']);
        }
      })
    }

  }

  cancel() {
    this.router.navigate(['coordenador/exibir-sala']);
  }

  get name(): any {
    return this.formGroupClassroom.get("name");
  }
  get capacity(): any {
    return this.formGroupClassroom.get("capacity");
  }
  get type(): any {
    return this.formGroupClassroom.get("type");
  }

}
