import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorSchedulePage } from './coordinator-schedule.page';

describe('CoordinatorSchedulePage', () => {
  let component: CoordinatorSchedulePage;
  let fixture: ComponentFixture<CoordinatorSchedulePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinatorSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
