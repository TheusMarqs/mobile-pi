import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
import { Time } from '../Time';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coordinator-time',
  templateUrl: './coordinator-time.page.html',
  styleUrls: ['./coordinator-time.page.scss'],
})
export class CoordinatorTimePage implements OnInit {
  times: Time[] = [];

  constructor(private router: Router, private timeService: TimeService) { }

  ngOnInit(): void {
    this.loadTimes();
  }

  loadTimes() {
    this.timeService.getTimes().subscribe({
      next: data => this.times = data
    });
  }

  edit(times: Time) {
    this.router.navigate(['coordenador-atualizar-horario', times.id]);
  }

  delete(times: Time) {
    this.timeService.delete(times).subscribe({
      next: () => this.loadTimes()
    });
  }
  
}
