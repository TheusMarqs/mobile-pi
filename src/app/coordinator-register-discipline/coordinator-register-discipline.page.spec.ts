import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorRegisterDisciplinePage } from './coordinator-register-discipline.page';

describe('CoordinatorRegisterDisciplinePage', () => {
  let component: CoordinatorRegisterDisciplinePage;
  let fixture: ComponentFixture<CoordinatorRegisterDisciplinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinatorRegisterDisciplinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
