import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorRegisterCoursePage } from './coordinator-register-course.page';

describe('CoordinatorRegisterCoursePage', () => {
  let component: CoordinatorRegisterCoursePage;
  let fixture: ComponentFixture<CoordinatorRegisterCoursePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinatorRegisterCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
