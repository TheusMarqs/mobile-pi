import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorRegisterSchedulePage } from './coordinator-register-schedule.page';

describe('CoordinatorRegisterSchedulePage', () => {
  let component: CoordinatorRegisterSchedulePage;
  let fixture: ComponentFixture<CoordinatorRegisterSchedulePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinatorRegisterSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
