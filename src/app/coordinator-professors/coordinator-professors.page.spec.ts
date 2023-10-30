import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorProfessorsPage } from './coordinator-professors.page';

describe('CoordinatorProfessorsPage', () => {
  let component: CoordinatorProfessorsPage;
  let fixture: ComponentFixture<CoordinatorProfessorsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinatorProfessorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
