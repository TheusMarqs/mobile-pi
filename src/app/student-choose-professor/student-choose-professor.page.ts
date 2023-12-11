import { Component, OnInit } from '@angular/core';
import { Professor } from '../Professor';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-student-choose-professor',
  templateUrl: './student-choose-professor.page.html',
  styleUrls: ['./student-choose-professor.page.scss'],
})
export class StudentChooseProfessorPage implements OnInit {

  professors: Professor[] = [];

  constructor(private professorService: ProfessorService){}

  ngOnInit(): void {
      this.loadProfessors();
  }

  loadProfessors() {
    this.professorService.getProfessors().subscribe({
      next: data => this.professors = data
    });
  }
}
