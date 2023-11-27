import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../classroom.service';
import { Classroom } from '../Classroom';

@Component({
  selector: 'app-coordinator-classroom',
  templateUrl: './coordinator-classroom.page.html',
  styleUrls: ['./coordinator-classroom.page.scss'],
})
export class CoordinatorClassroomPage implements OnInit {
  classrooms: Classroom[] = [];

  constructor(private classroomService: ClassroomService) { }

  ngOnInit(): void {
    this.loadClassrooms();
  }

  loadClassrooms() {
    this.classroomService.getClassrooms().subscribe({
      next: data => this.classrooms = data
    });
  }

}
