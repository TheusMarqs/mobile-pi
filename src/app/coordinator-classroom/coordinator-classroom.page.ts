import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../classroom.service';
import { Classroom } from '../Classroom';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coordinator-classroom',
  templateUrl: './coordinator-classroom.page.html',
  styleUrls: ['./coordinator-classroom.page.scss', '../app.component.scss'],
})
export class CoordinatorClassroomPage implements OnInit {
  classrooms: Classroom[] = [];

  constructor(private classroomService: ClassroomService, private router: Router) { }

  ngOnInit(): void {
    this.loadClassrooms();
  }

  loadClassrooms() {
    this.classroomService.getClassrooms().subscribe({
      next: data => this.classrooms = data
    });
  }

  edit(classrooms: Classroom) {
    this.router.navigate(['coordenador-atualizar-sala', classrooms.id]);
  }

  delete(classrooms: Classroom) {
    this.classroomService.delete(classrooms).subscribe({
      next: () => this.loadClassrooms()
    });
  }

}
