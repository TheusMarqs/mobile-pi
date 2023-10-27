import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlunosProfessoresPage } from './alunos-professores.page';

describe('AlunosProfessoresPage', () => {
  let component: AlunosProfessoresPage;
  let fixture: ComponentFixture<AlunosProfessoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlunosProfessoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
