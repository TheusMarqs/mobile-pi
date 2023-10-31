import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplineService } from '../discipline.service';

@Component({
  selector: 'app-coordinator-register-discipline',
  templateUrl: './coordinator-register-discipline.page.html',
  styleUrls: ['./coordinator-register-discipline.page.scss'],
})
export class CoordinatorRegisterDisciplinePage implements OnInit {

  formGroupDiscipline : FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private disciplineService: DisciplineService,
    private route: ActivatedRoute,
    private router: Router) {

    this.formGroupDiscipline = formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.pattern(/\S/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/\S/)]],
      education: ['', [Validators.required, Validators.pattern(/\S/)]],
      condition: [false]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getDisciplineById(id);
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
    if (this.isEditing) {
      if (this.formGroupDiscipline.valid) {
        this.disciplineService.update(this.formGroupDiscipline.value).subscribe({
          next: () => {
            this.router.navigate(['coordenador/exibir-disciplina']);
          }
        })
      }
    }

    else {
      this.disciplineService.save(this.formGroupDiscipline.value).subscribe({
        next: () => {
          this.router.navigate(['coordenador/exibir-disciplina']);
        }
      })
    }

  }

  cancel() {
    this.router.navigate(['coordenador/exibir-disciplina']);
  }

  get name(): any {
    return this.formGroupDiscipline.get("name");
  }
  get email(): any {
    return this.formGroupDiscipline.get("email");
  }
  get password(): any {
    return this.formGroupDiscipline.get("password");
  }
  get education(): any {
    return this.formGroupDiscipline.get("education");
  }

}
