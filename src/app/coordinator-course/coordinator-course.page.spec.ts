import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorCoursePage } from './coordinator-course.page';

describe('CoordinatorCoursePage', () => {
  let component: CoordinatorCoursePage;
  let fixture: ComponentFixture<CoordinatorCoursePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinatorCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
