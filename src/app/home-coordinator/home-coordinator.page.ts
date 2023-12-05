import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../schedule.service';
import { Schedule } from '../Schedule';

@Component({
  selector: 'app-home-coordinator',
  templateUrl: './home-coordinator.page.html',
  styleUrls: ['./home-coordinator.page.scss'],
})
export class HomeCoordinatorPage implements OnInit {
getDisciplineName(arg0: number): string {
throw new Error('Method not implemented.');
}
getProfessorName(arg0: number): string {
throw new Error('Method not implemented.');
}
getTimeString(arg0: number) {
throw new Error('Method not implemented.');
}
  schedules: Schedule[] = [];

  constructor(private router: Router, private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.loadSchedules();
  }

  loadSchedules() {
    this.scheduleService.getSchedules().subscribe({
      next: data => this.schedules = data
    });
  }

  edit(schedules: Schedule) {
    this.router.navigate(['coordenador-atualizar-horarios', schedules.id]);
  }

  delete(schedules: Schedule) {
    this.scheduleService.delete(schedules).subscribe({
      next: () => this.loadSchedules()
    });
  }
}
