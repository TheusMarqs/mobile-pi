import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorClassroomPage } from './coordinator-classroom.page';

describe('CoordinatorClassroomPage', () => {
  let component: CoordinatorClassroomPage;
  let fixture: ComponentFixture<CoordinatorClassroomPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinatorClassroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
