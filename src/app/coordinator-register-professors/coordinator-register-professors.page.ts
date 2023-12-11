import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-coordinator-register-professors',
  templateUrl: './coordinator-register-professors.page.html',
  styleUrls: ['./coordinator-register-professors.page.scss'],
})
export class CoordinatorRegisterProfessorsPage implements OnInit {

  formGroupProfessor: FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private professorService: ProfessorService,
    private route: ActivatedRoute,
    private router: Router) {

    this.formGroupProfessor = formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-záâãàéêíóôõúçñ ]+$/), Validators.pattern(/\S/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/\S/), Validators.minLength(8)]],
      education: ['', [Validators.required, Validators.pattern(/^[A-Za-záâãàéêíóôõúçñ ]+$/), Validators.pattern(/\S/)]],
      status: [false]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getProfessorById(id);
  }

  getProfessorById(id: number) {
    this.professorService.getProfessor(id).subscribe({
      next: data => {
        this.formGroupProfessor.setValue(data);
        this.isEditing = true;
      }
    })
  }


  save() {
    this.submitted = true;
    if (this.formGroupProfessor.valid) {
      if (this.isEditing) {

        this.professorService.update(this.formGroupProfessor.value).subscribe({
          next: () => {
            this.router.navigate(['coordenador-professores']);
          }
        })
      }

      else {
        this.professorService.save(this.formGroupProfessor.value).subscribe({
          next: () => {
            this.router.navigate(['coordenador-professores']);
          }
        })
      }
    }

  }

  cancel() {
    this.router.navigate(['coordenador-professores']);
  }

  get name(): any {
    return this.formGroupProfessor.get("name");
  }
  get email(): any {
    return this.formGroupProfessor.get("email");
  }
  get password(): any {
    return this.formGroupProfessor.get("password");
  }
  get education(): any {
    return this.formGroupProfessor.get("education");
  }

}
