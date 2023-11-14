import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-coordinator-register-team',
  templateUrl: './coordinator-register-team.page.html',
  styleUrls: ['./coordinator-register-team.page.scss'],
})
export class CoordinatorRegisterTeamPage implements OnInit {

  formGroupTeam : FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router) {

    this.formGroupTeam = formBuilder.group({
      id: [],
      semester: ['', [Validators.required, Validators.pattern(/\S/)]],
      period: ['', [Validators.required, Validators.pattern]],
      course: ['', [Validators.required, Validators.pattern(/\S/)]],
      student: ['', [Validators.required, Validators.pattern(/\S/)]],
      condition: [false]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getteamById(id);
  }

  getteamById(id: number) {
    this.teamService.getTeam(id).subscribe({
      next: data => {
        this.formGroupTeam.setValue(data);
        this.isEditing = true;
      }
    })
  }


  save() {
    this.submitted = true;
    if (this.isEditing) {
      if (this.formGroupTeam.valid) {
        this.teamService.update(this.formGroupTeam.value).subscribe({
          next: () => {
            this.router.navigate(['coordenador/exibir-disciplina']);
          }
        })
      }
    }

    else {
      this.teamService.save(this.formGroupTeam.value).subscribe({
        next: () => {
          this.router.navigate(['coordenador/exibir-turma']);
        }
      })
    }

  }

  cancel() {
    this.router.navigate(['coordenador/exibir-turma']);
  }

  get semester(): any {
    return this.formGroupTeam.get("semester");
  }
  get period(): any {
    return this.formGroupTeam.get("period");
  }
  get course(): any {
    return this.formGroupTeam.get("course");
  }
  get student(): any {
    return this.formGroupTeam.get("student");
  }

}
