import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-coordinator-register-schedule',
  templateUrl: './coordinator-register-schedule.page.html',
  styleUrls: ['./coordinator-register-schedule.page.scss'],
})
export class CoordinatorRegisterSchedulePage implements OnInit {

  formGroupSchedule : FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;
professor: any;
discipline: any;


  constructor(private formBuilder: FormBuilder, private scheduleService: ScheduleService,
    private route: ActivatedRoute,
    private router: Router,) {

    this.formGroupSchedule = formBuilder.group({
      id: [],
      classroom: ['', [Validators.required, Validators.pattern]],
      discipline: ['', [Validators.required, Validators.pattern(/\S/)]],
      professor: ['', [Validators.required, Validators.pattern]]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id) {
      this.getScheduleById(id);
    }
  }


  getScheduleById(id: number) {
    this.scheduleService.getSchedule(id).subscribe({
      next: data => {
        this.formGroupSchedule.setValue(data);
        this.isEditing = true;
      }
    })
  }


  save() {
    this.submitted = true;
    if (this.isEditing) {
      if (this.formGroupSchedule.valid) {
        this.scheduleService.update(this.formGroupSchedule.value).subscribe({
          next: () => {
            this.router.navigate(['home-coordenador']);
          }
        })
      }
    }

    else {
      this.scheduleService.save(this.formGroupSchedule.value).subscribe({
        next: () => {
          this.router.navigate(['home-coordenador']);
        }
      })
    }

  }

  cancel() {
    this.router.navigate(['home-coordenador']);
  }

  get weekday(): any {
    return this.formGroupSchedule.get("weekday");
  }
  get classroom(): any {
    return this.formGroupSchedule.get("classroom");
  }

}
