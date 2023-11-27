import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
import { Time } from '../Time';

@Component({
  selector: 'app-coordinator-time',
  templateUrl: './coordinator-time.page.html',
  styleUrls: ['./coordinator-time.page.scss'],
})
export class CoordinatorTimePage implements OnInit {
  times: Time[] = [];

  constructor(private timeService: TimeService) { }

  ngOnInit(): void {
    this.loadTimes();
  }

  loadTimes() {
    this.timeService.getTimes().subscribe({
      next: data => this.times = data
    });
  }
}
