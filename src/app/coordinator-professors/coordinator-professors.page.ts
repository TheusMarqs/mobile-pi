import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { Professor } from '../Professor';

@Component({
  selector: 'app-coordinator-professors',
  templateUrl: './coordinator-professors.page.html',
  styleUrls: ['./coordinator-professors.page.scss'],
})
export class CoordinatorProfessorsPage implements OnInit {
  professors: Professor[] = [];

  constructor(private professorService: ProfessorService) { }

  ngOnInit() : void{
    this.loadProfessors();
  }

  loadProfessors(){
    this.professorService.getProfessors().subscribe({
      next: data => this.professors = data
    });
  }

}
