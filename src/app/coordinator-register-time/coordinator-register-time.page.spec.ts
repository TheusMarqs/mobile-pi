import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorRegisterTimePage } from './coordinator-register-time.page';

describe('CoordinatorRegisterTimePage', () => {
  let component: CoordinatorRegisterTimePage;
  let fixture: ComponentFixture<CoordinatorRegisterTimePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinatorRegisterTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
