import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorRegisterProfessorsPage } from './coordinator-register-professors.page';

describe('CoordinatorRegisterProfessorsPage', () => {
  let component: CoordinatorRegisterProfessorsPage;
  let fixture: ComponentFixture<CoordinatorRegisterProfessorsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinatorRegisterProfessorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
