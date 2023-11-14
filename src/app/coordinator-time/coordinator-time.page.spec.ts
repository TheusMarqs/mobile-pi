import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorTimePage } from './coordinator-time.page';

describe('CoordinatorTimePage', () => {
  let component: CoordinatorTimePage;
  let fixture: ComponentFixture<CoordinatorTimePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinatorTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
