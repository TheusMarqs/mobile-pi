import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentSchedulePage } from './student-schedule.page';

describe('StudentSchedulePage', () => {
  let component: StudentSchedulePage;
  let fixture: ComponentFixture<StudentSchedulePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
