import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentProfessorSchedulePage } from './student-professor-schedule.page';

describe('StudentProfessorSchedulePage', () => {
  let component: StudentProfessorSchedulePage;
  let fixture: ComponentFixture<StudentProfessorSchedulePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentProfessorSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
