import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classroom } from '../Classroom';
import { Course } from '../Course';
import { Discipline } from '../Discipline';
import { Professor } from '../Professor';
import { Schedule } from '../Schedule';
import { Team } from '../Team';
import { ClassroomService } from '../classroom.service';
import { CourseService } from '../course.service';
import { DisciplineService } from '../discipline.service';
import { ProfessorService } from '../professor.service';
import { ScheduleService } from '../schedule.service';
import { TeamService } from '../team.service';
import { TimeService } from '../time.service';
import { Time } from '../Time';

@Component({
  selector: 'app-student-professor-schedule',
  templateUrl: './student-professor-schedule.page.html',
  styleUrls: ['./student-professor-schedule.page.scss'],
})
export class StudentProfessorSchedulePage implements OnInit {

  schedules: Schedule[] = [];
  filteredSchedule: Schedule[] = [];
  classrooms: Classroom[] = [];
  times: Time[] = [];
  professors: Professor[] = [];
  disciplines: Discipline[] = [];
  courses: Course[] = [];
  courseById: string = '';
  teams: Team[] = [];
  professorName: string = '';

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
  }

  loadSchedules() {
    this.scheduleService.getSchedules().subscribe({
      next: (data) => {
        this.schedules = data;
        // Chame o filterByTeam aqui para garantir que ele seja chamado após o carregamento
        const id = Number(this.route.snapshot.paramMap.get("id"));
        if (id) {
          this.filterByProfessor(id);
        }
      },
    });
  }

  loadProfessors() {
    this.professorService.getProfessors().subscribe({
      next: (data) => (this.professors = data),
    });
  }

  loadTimes() {
    this.timeService.getTimes().subscribe((times) => {
      this.times = times;
    });
  }

  getProfessorName(scheduleId: number): string {
    const schedule = this.schedules.find((schedule) => schedule.id === scheduleId);
    if (schedule) {
      const professor = this.professors.find((professor) => professor.id === schedule.professor);
      if (professor) {
        this.professorName = professor.name;
      }
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

  getClassroomInfo(scheduleId: number): { number: number | string, type: string } {
    const result = { number: '', type: '' };

    const schedule = this.schedules.find((schedule) => schedule.id === scheduleId);
    if (schedule) {
      const classroom = this.classrooms.find((classroom) => classroom.id === schedule.classroom);
      if (classroom) {
        result.number = classroom.number.toString(); // Convertendo para string
        result.type = classroom.type; // Supondo que 'type' seja o atributo desejado
      } else {
        result.number = 'Sala não encontrada';
      }
    } else {
      result.number = 'Agendamento não encontrado';
    }

    return result;
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

  getTimeString(scheduleId: number): string {
    const schedule = this.schedules.find((schedule) => schedule.id === scheduleId);

    if (schedule) {
      const time = this.times.find((t) => t.id === schedule.time);
      return time ? time.time : 'Horário não encontrado';
    }

    return 'Turma não encontrada';
  }

  loadDisciplines() {
    this.disciplineService.getDisciplines().subscribe({
      next: (data) => (this.disciplines = data),
    });
  }

  loadClassrooms() {
    this.classroomService.getClassrooms().subscribe({
      next: (data) => (this.classrooms = data),
    });
  }

  loadTeams() {
    this.teamService.getTeams().subscribe({
      next: (data) => (this.teams = data),
    });
  }

  filterByProfessor(professorId: number) {
    const weekdaysOrder = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    this.filteredSchedule = this.schedules
      .filter(schedule => schedule.professor === professorId)
      .sort((a, b) => {
        const dayA = weekdaysOrder.indexOf(a.weekday);
        const dayB = weekdaysOrder.indexOf(b.weekday);
        return dayA - dayB;
      });

  }

}
