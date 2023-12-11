import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentChooseProfessorPage } from './student-choose-professor.page';

describe('StudentChooseProfessorPage', () => {
  let component: StudentChooseProfessorPage;
  let fixture: ComponentFixture<StudentChooseProfessorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentChooseProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
