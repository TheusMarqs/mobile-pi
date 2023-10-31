import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorDisciplinePage } from './coordinator-discipline.page';

describe('CoordinatorDisciplinePage', () => {
  let component: CoordinatorDisciplinePage;
  let fixture: ComponentFixture<CoordinatorDisciplinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinatorDisciplinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
