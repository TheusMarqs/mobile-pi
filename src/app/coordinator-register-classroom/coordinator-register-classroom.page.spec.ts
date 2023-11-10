import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorRegisterClassroomPage } from './coordinator-register-classroom.page';

describe('CoordinatorRegisterClassroomPage', () => {
  let component: CoordinatorRegisterClassroomPage;
  let fixture: ComponentFixture<CoordinatorRegisterClassroomPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinatorRegisterClassroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
