import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-coordinator-register-time',
  templateUrl: './coordinator-register-time.page.html',
  styleUrls: ['./coordinator-register-time.page.scss'],
})
export class CoordinatorRegisterTimePage implements OnInit {

  formGroupTime : FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private timeService: TimeService,
    private route: ActivatedRoute,
    private router: Router) {

    this.formGroupTime = formBuilder.group({
      id: [],
      time: ['', [Validators.required, Validators.pattern(/\S/)]],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.gettimeById(id);
  }

  gettimeById(id: number) {
    this.timeService.getTime(id).subscribe({
      next: data => {
        this.formGroupTime.setValue(data);
        this.isEditing = true;
      }
    })
  }


  save() {
    this.submitted = true;
    if (this.isEditing) {
      if (this.formGroupTime.valid) {
        this.timeService.update(this.formGroupTime.value).subscribe({
          next: () => {
            this.router.navigate(['coordenador-horario']);
          }
        })
      }
    }

    else {
      this.timeService.save(this.formGroupTime.value).subscribe({
        next: () => {
          this.router.navigate(['coordenador-horario']);
        }
      })
    }

  }

  cancel() {
    this.router.navigate(['coordenador-horario']);
  }

  get time(): any {
    return this.formGroupTime.get("time");
  }
}
