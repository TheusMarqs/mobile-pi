import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Course } from '../Course';
import { CourseService } from '../course.service';
import { Team } from '../Team';
import { TeamService } from '../team.service';


@Component({
  selector: 'app-home-coordinator',
  templateUrl: './home-coordinator.page.html',
  styleUrls: ['./home-coordinator.page.scss'],
})
export class HomeCoordinatorPage implements OnInit {
  teams: Team[] = [];
  teamCourseMap: { [key: number]: string } = {};
  selectedTeamId: number | null = null;

  constructor(private teamService: TeamService, private courseService: CourseService, private router: Router){
  }
  ngOnInit(): void {
    forkJoin([this.teamService.getTeams(), this.courseService.getCourses()]).subscribe(
      ([teams, courses]) => {
        this.teams = teams;
        this.createTeamCourseMap(courses);
      }
    );
  }
  onTeamChange(event: any) {
    this.selectedTeamId = event.detail.value;
  }

  navigateToSelectedTeam(): void {
    if (this.selectedTeamId !== null && this.selectedTeamId.toString() !== '0') {
      this.router.navigate(['/coordenador-agenda', this.selectedTeamId]);
    }
  }

  createTeamCourseMap(courses: Course[]): void {
    for (const team of this.teams) {
      const course = courses.find((c) => c.id === team.course);
      if (course) {
        this.teamCourseMap[team.id] = course.name;
      }
    }
  }

  getAllTeams(){
    this.teamService.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }

}
