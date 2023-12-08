import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Classroom } from '../Classroom';
import { ClassroomService } from '../classroom.service';
import { Discipline } from '../Discipline';
import { DisciplineService } from '../discipline.service';
import { Professor } from '../Professor';
import { ProfessorService } from '../professor.service';
import { ScheduleService } from '../schedule.service';
import { Time } from '../Time';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-coordinator-register-schedule',
  templateUrl: './coordinator-register-schedule.page.html',
  styleUrls: ['./coordinator-register-schedule.page.scss'],
})
export class CoordinatorRegisterSchedulePage implements OnInit {

  professors: Professor[] = [];
  classrooms: Classroom[] = [];
  disciplines: Discipline[] = [];
  times: Time[] = [];
  submitted: boolean = false;
  isEditing: boolean = false;
  formGroupSchedule: FormGroup;
  weekDay: string = '';
  weekDayId: number = 0;
  teamId: number = 0;
  formGroups: FormGroup[] = [];
  timesLength: number = 0;

  constructor(
    private professorService: ProfessorService,
    private classroomService: ClassroomService,
    private disciplineService: DisciplineService,
    private formBuilder: FormBuilder,
    private scheduleService: ScheduleService,
    private route: ActivatedRoute,
    private router: Router,
    private timeService: TimeService
  ) {
    this.formGroupSchedule = formBuilder.group({
      scheduleArray: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.loadTimes();
    this.loadClassrooms();
    this.loadDisciplines();
    this.loadProfessors();

    const currentUrl = this.route.snapshot.url.join('/');
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const urlSegments = this.route.snapshot.url;

    const id1 = Number(urlSegments[2]);

    if (urlSegments) {
      this.getTeamByUrl(id1)
    }

    if (id) {
      this.weekDayId = id;
      this.showDayById(id);
    }

    if (currentUrl.includes('atualizar-agendamento') && this.teamId !== 0) {
      this.getScheduleById(id);
    }
}



  getTeamByUrl(id: number) {
    this.teamId = id;
  }

  goBack() {
    const urlSegments = this.route.snapshot.url;
    const id1 = Number(urlSegments[2]);
    const id2 = Number(urlSegments[3]);
    const selectedId = isNaN(id1) ? id2 : id1;

    this.router.navigate(['coordenador/exibir-agendamento', selectedId]);
  }




  showDayById(id: number) {
    switch (id) {
      case 1:
        this.weekDay = 'Segunda-feira';
        break;

      case 2:
        this.weekDay = 'Terça-feira';
        break;

      case 3:
        this.weekDay = 'Quarta-feira';
        break;

      case 4:
        this.weekDay = 'Quinta-feira';
        break;

      case 5:
        this.weekDay = 'Sexta-feira';
        break;

      case 6:
        this.weekDay = 'Sábado';
        break;
    }
  }

  getScheduleById(dayId: number) {
    this.scheduleService.getSchedulesByDayOfWeek(this.teamId, dayId).subscribe({
      next: data => {

        this.formGroupSchedule.patchValue({
          scheduleArray: data,
        });
        this.isEditing = true;
      }
    });
  }


  save() {
    this.submitted = true;
    const scheduleArray = this.formGroupSchedule.value.scheduleArray
      .filter((scheduleItem: any) => this.isScheduleItemFilled(scheduleItem))
      .map((scheduleItem: any) => ({
        ...scheduleItem,
        weekday: this.weekDay,
        team: this.teamId,
      }));

    if (scheduleArray.length > 0) {
      if (this.isEditing) {
        this.scheduleService.update(scheduleArray, this.weekDayId).subscribe({
          next: () => {
            this.goBack();
          },
        });
      } else {
        this.scheduleService.save(scheduleArray).subscribe({
          next: () => {
            this.goBack();
          },
        });
      }
    } else {
      console.log('Nenhum formulário preenchido para salvar.');
    }
  }

  private isScheduleItemFilled(scheduleItem: any): boolean {
    return Object.values(scheduleItem).some(value => value !== null && value !== '');
  }


  cancel() {
    this.goBack();
  }

  loadTimes() {
    this.timeService.getTimes().subscribe({
      next: (data) => {
        this.times = data;
        this.timesLength = data.length;

        for (let i = 0; i < this.timesLength; i++) {
          this.addScheduleItem();
        };
      },
      error: (error) => {
        console.error('Erro ao carregar os horários:', error);
      },
    });
  }

  getScheduleArrayControls(): AbstractControl[] {
    const scheduleArray = this.formGroupSchedule.get('scheduleArray') as FormArray;
    return scheduleArray ? scheduleArray.controls : [];
  }

  addScheduleItem() {
    const scheduleArray = this.formGroupSchedule.get('scheduleArray') as FormArray;

    scheduleArray.push(this.formBuilder.group({
      time: [, [Validators.required]],
      professor: [, [Validators.required]],
      classroom: [, [Validators.required]],
      discipline: [, [Validators.required]],
    }));
  }

  loadProfessors() {
    this.professorService.getProfessors().subscribe({
      next: (data) => {
        this.professors = data.filter((professor) => professor.status === true);
      },
    });
  }

  loadClassrooms() {
    this.classroomService.getClassrooms().subscribe({
      next: (data) => (this.classrooms = data),
    });
  }
  loadDisciplines() {
    this.disciplineService.getDisciplines().subscribe({
      next: (data) => (this.disciplines = data),
    });
  }
}
