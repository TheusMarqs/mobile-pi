import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../team.service';
import { CourseService } from '../course.service';
import { Course } from '../Course';
import { TimeService } from '../time.service';
import { Time } from '../Time';

@Component({
  selector: 'app-coordinator-register-team',
  templateUrl: './coordinator-register-team.page.html',
  styleUrls: ['./coordinator-register-team.page.scss'],
})
export class CoordinatorRegisterTeamPage implements OnInit {

  times: Time[] = [];
  courses: Course[] = [];
  formGroupTeam : FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private timeService: TimeService) {

    this.formGroupTeam = formBuilder.group({
      id: [],
      semester: ['', [Validators.required, Validators.pattern(/\S/)]],
      period: ['', [Validators.required, Validators.pattern]],
      course: ['', [Validators.required, Validators.pattern(/\S/)]],
      students: ['', [Validators.required, Validators.pattern(/\S/)]],
      time: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id) {
      this.getTeamById(id);
    }
    this.loadTimes();
    this.loadCourses();
  }

  get timeArray(): FormArray {
    return this.formGroupTeam.get('time') as FormArray;
  }

  loadTimes(){
    this.timeService.getTimes().subscribe((times) => {
      this.times = times;
    });
  }
  

  getTeamById(id: number) {
    this.teamService.getTeam(id).subscribe({
      next: data => {
        while (this.timeArray.length !== 0) {
          this.timeArray.removeAt(0);
        }
  
        this.formGroupTeam.setValue({
          id: data.id,
          course: data.course,
          students: data.students,
          semester: data.semester,
          period: data.period,
          time: []
        });
  
        if (Array.isArray(data.time)) {
          data.time.forEach(timeId => {
            this.timeArray.push(this.formBuilder.control(timeId));
          });
        }
  
        this.isEditing = true;
      }
    });
  }

  loadCourses(){
    this.courseService.getCourses().subscribe({
      next: data => this.courses = data
    });
  }


  save() {
    this.submitted = true;
  
    if (this.formGroupTeam.valid) {
      if (this.timeArray.length > 0) {
        if (this.isEditing) {
          this.teamService.update(this.formGroupTeam.value).subscribe({
            next: () => {
              this.router.navigate(['coordenador-turma']);
            }
          });
        } else {
          this.teamService.save(this.formGroupTeam.value).subscribe({
            next: () => {
              this.router.navigate(['coordenador-turma']);
            }
          });
        }
      } else {
        // Caso nenhum horário tenha sido selecionado, mostre uma mensagem ou trate conforme necessário
        console.log('Selecione pelo menos um horário antes de salvar.');
      }
    }
  }
  

  toggleTime(timeId: number): void {
    const timeArray = this.timeArray;
  
    // Check if the timeId is already in the array
    const index = timeArray.value.indexOf(timeId);
  
    if (index === -1) {
      // If not in the array, add it
      timeArray.push(this.formBuilder.control(timeId));
    } else {
      // If already in the array, remove it
      timeArray.removeAt(index);
    }
  }

  cancel() {
    this.router.navigate(['coordenador-turma']);
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
  get students(): any {
    return this.formGroupTeam.get("students");
  }
  get time(): any {
    return this.formGroupTeam.get("time");
  }

}
