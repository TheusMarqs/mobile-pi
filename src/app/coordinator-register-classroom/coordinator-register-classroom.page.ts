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

  formGroupClassroom: FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private classroomService: ClassroomService,
    private route: ActivatedRoute,
    private router: Router) {

    this.formGroupClassroom = formBuilder.group({
      id: [],
      number: [, [Validators.required]],
      type: ['', [Validators.required]],
      capacity: [, [Validators.required]]
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
    if (this.formGroupClassroom.valid) {
      if (this.isEditing) {

        this.classroomService.update(this.formGroupClassroom.value).subscribe({
          next: () => {
            this.router.navigate(['coordenador-sala']);
          }
        })
      }

      else {
        this.classroomService.save(this.formGroupClassroom.value).subscribe({
          next: () => {
            this.router.navigate(['coordenador-sala']);
          }
        })
      }
    }

  }

  cancel() {
    this.router.navigate(['coordenador-sala']);
  }

  get number(): any {
    return this.formGroupClassroom.get("number");
  }
  get capacity(): any {
    return this.formGroupClassroom.get("capacity");
  }
  get type(): any {
    return this.formGroupClassroom.get("type");
  }

}
