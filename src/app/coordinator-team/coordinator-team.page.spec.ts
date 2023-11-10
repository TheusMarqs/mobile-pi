import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorTeamPage } from './coordinator-team.page';

describe('CoordinatorTeamPage', () => {
  let component: CoordinatorTeamPage;
  let fixture: ComponentFixture<CoordinatorTeamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinatorTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
