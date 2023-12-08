import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classroom } from '../Classroom';
import { ClassroomService } from '../classroom.service';
import { Course } from '../Course';
import { CourseService } from '../course.service';
import { Discipline } from '../Discipline';
import { DisciplineService } from '../discipline.service';
import { Professor } from '../Professor';
import { ProfessorService } from '../professor.service';
import { Schedule } from '../Schedule';
import { ScheduleService } from '../schedule.service';
import { Team } from '../Team';
import { TeamService } from '../team.service';
import { Time } from '../Time';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-coordinator-schedule',
  templateUrl: './coordinator-schedule.page.html',
  styleUrls: ['./coordinator-schedule.page.scss'],
})
export class CoordinatorSchedulePage implements OnInit {

  teams: Team[] = [];
  schedules: Schedule[] = [];
  professors: Professor[] = [];
  disciplines: Discipline[] = [];
  courses: Course[] = [];
  teamById: Team | null = null;
  courseById: string = '';
  filter: string = '';
  times: Time[] = [];
  filteredSchedules: Schedule[] = [];
  classrooms: Classroom[] = [];


  constructor(private teamService: TeamService,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private scheduleService: ScheduleService,
    private router: Router,
    private timeService: TimeService,
    private professorService: ProfessorService,
    private disciplineService: DisciplineService,
    private classroomService: ClassroomService) {
  }

  ngOnInit(): void {
    this.loadTimes();
    this.loadSchedules();
    this.loadProfessors();
    this.loadDisciplines();
    this.loadTeams();
    this.loadClassrooms();

    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id){
      this.getTeamById(id);
    }
  }

  loadClassrooms(){
    this.classroomService.getClassrooms().subscribe({
      next: (data) => (this.classrooms = data),
    });
  }

  loadTeams(){
    this.teamService.getTeams().subscribe({
      next: (data) => (this.teams = data),
    });
  }

  filterByTeam(teamId: number) {
    const weekdaysOrder = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    console.log('Team ID:', teamId);
    console.log('Schedules:', this.schedules);

    this.filteredSchedules = this.schedules
      .filter(schedule => schedule.team === teamId)
      .sort((a, b) => {
        const dayA = weekdaysOrder.indexOf(a.weekday);
        const dayB = weekdaysOrder.indexOf(b.weekday);
        return dayA - dayB;
      });

    console.log('Filtered Schedules:', this.filteredSchedules);
  }

  loadProfessors(){
    this.professorService.getProfessors().subscribe({
      next: (data) => (this.professors = data),
    });
  }

  loadTimes(){
    this.timeService.getTimes().subscribe((times) => {
      this.times = times;
    });
  }

  loadDisciplines(){
    this.disciplineService.getDisciplines().subscribe({
      next: (data) => (this.disciplines = data),
    });
  }

  getTimeString(scheduleId: number): string {
    const schedule = this.schedules.find((schedule) => schedule.id === scheduleId);

    if (schedule) {
      const time = this.times.find((t) => t.id === schedule.time);
      return time ? time.time : 'Horário não encontrado';
    }

    return 'Turma não encontrada';
  }



  getTeamById(teamId: number) {
    this.teamService.getTeam(teamId).subscribe({
      next: (team) => {
        if (team) {
          const courseId = team.course; // Obtém o ID do curso associado à turma
          this.getCourseName(courseId);
          this.teamById = team
        } else {
          console.error('Turma não encontrada');
        }
      },
      error: (error) => {
        console.error('Erro ao buscar turma', error);
      }
    });
  }

  getProfessorName(scheduleId: number): string {
    const schedule = this.schedules.find((schedule) => schedule.id === scheduleId);
    if (schedule) {
      const professor = this.professors.find((professor) => professor.id === schedule.professor);
      return professor ? professor.name : 'Professor não encontrado';
    }
    return 'Agendamento não encontrado';
  }

  getDisciplineName(scheduleId: number): string {
    const schedule = this.schedules.find((schedule) => schedule.id === scheduleId);
    if (schedule) {
      const discipline = this.disciplines.find((discipline) => discipline.id === schedule.discipline);
      return discipline ? discipline.name : 'Disciplina não encontrada';
    }
    return 'Agendamento não encontrado';
  }

  getClassroomNumber(scheduleId: number): number | string {
    const schedule = this.schedules.find((schedule) => schedule.id === scheduleId);
    if (schedule) {
      const classroom = this.classrooms.find((classroom) => classroom.id === schedule.classroom);
      return classroom ? classroom.number : 'Sala não encontrada';
    }
    return 'Agendamento não encontrado';
  }

  getCourseName(courseId: number) {
    this.courseService.getCourseName(courseId).subscribe({
      next: (courseName) => {
        if (courseName) {
          // courseName contém o nome do curso associado à turma
          this.courseById = courseName;
        } else {
          console.error('Nome do curso não encontrado');
        }
      },
      error: (error) => {
        console.error('Erro ao buscar nome do curso', error);
      }
    });
  }

  loadSchedules() {
    this.scheduleService.getSchedules().subscribe({
      next: (data) => {
        this.schedules = data;
        console.log('Schedules:', this.schedules);
        // Chame o filterByTeam aqui para garantir que ele seja chamado após o carregamento
        const id = Number(this.route.snapshot.paramMap.get("id"));
        if (id){
          this.filterByTeam(id);
        }
      },
    });
  }


  create(id: number) {
    const idTeam = Number(this.route.snapshot.paramMap.get("id"));
    this.router.navigate(['coordenador/cadastro-agendamento/', idTeam, id]);
  }

  edit(schedule: Schedule) {
    const idTeam = Number(this.route.snapshot.paramMap.get("id"));
    const dayOfWeekId = this.getDayOfWeekId(schedule.weekday);
    this.router.navigate(['coordenador/atualizar-agendamento', idTeam, dayOfWeekId]);
  }

  getDayOfWeekId(dayOfWeek: string): number {
    const weekdaysOrder = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return weekdaysOrder.indexOf(dayOfWeek) + 1;
  }

  delete(schedules: Schedule) {
    this.scheduleService.delete(schedules).subscribe({
      next: () => this.loadSchedules()
    });
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
