import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from '../Team';
import { Course } from '../Course';
import { CourseService } from '../course.service';
import { Time } from '../Time';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-coordinator-team',
  templateUrl: './coordinator-team.page.html',
  styleUrls: ['./coordinator-team.page.scss'],
})
export class CoordinatorTeamPage implements OnInit {
  teams: Team[] = [];
  courses: Course[] = [];
  times: Time[] = [];

  constructor(private teamService: TeamService, private courseService: CourseService, private timeService: TimeService) { }

  ngOnInit(): void {
    this.loadTeams();
    this.loadCourses();
    this.loadTimes();
  }

  loadTeams(){
    this.teamService.getTeams().subscribe({
      next: data => this.teams = data
    });
  }

  loadTimes(){
    this.timeService.getTimes().subscribe({
      next: data => this.times = data
    });
  }

  loadCourses(){
    this.courseService.getCourses().subscribe({
      next: data => this.courses = data
    });
  }

  getCourseName(teamId: number): string {
    const team = this.teams.find((team) => team.id === teamId);
    if (team) {
      const course = this.courses.find((course) => course.id === team.course);
      return course ? course.name  : 'Curso não encontrado';
    }
    return 'Turma não encontrada';
  }

  getTimeString(teamId: number): string {
    const team = this.teams.find((team) => team.id === teamId);

    if (team) {
      const timeStrings = Array.isArray(team.time)
        ? team.time.map((timeId) => {
            const time = this.times.find((t) => t.id === timeId);
            return time ? time.time : 'Horário não encontrado';
          })
        : ['Horário não encontrado'];

      return timeStrings.join(', ');
    }

    return 'Turma não encontrada';
  }

}
