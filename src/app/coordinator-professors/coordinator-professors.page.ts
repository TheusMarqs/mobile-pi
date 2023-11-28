import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { Professor } from '../Professor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coordinator-professors',
  templateUrl: './coordinator-professors.page.html',
  styleUrls: ['./coordinator-professors.page.scss'],
})
export class CoordinatorProfessorsPage implements OnInit {
  professors: Professor[] = [];

  constructor(private professorService: ProfessorService, private router: Router) { }

  ngOnInit() : void{
    this.loadProfessors();
  }

  loadProfessors(){
    this.professorService.getProfessors().subscribe({
      next: data => this.professors = data
    });
  }

  edit(professors: Professor) {
    this.router.navigate(['coordenador-atualizar-professor', professors.id]);
  }

  delete(professors: Professor) {
    this.professorService.delete(professors).subscribe({
      next: () => this.loadProfessors()
    });
  }
  
}
