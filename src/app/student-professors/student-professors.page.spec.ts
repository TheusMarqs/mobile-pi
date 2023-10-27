import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentProfessorsPage } from './student-professors.page';

describe('StudentProfessorsPage', () => {
  let component: StudentProfessorsPage;
  let fixture: ComponentFixture<StudentProfessorsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentProfessorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
