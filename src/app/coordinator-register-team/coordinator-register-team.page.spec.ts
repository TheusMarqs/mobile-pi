import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorRegisterTeamPage } from './coordinator-register-team.page';

describe('CoordinatorRegisterTeamPage', () => {
  let component: CoordinatorRegisterTeamPage;
  let fixture: ComponentFixture<CoordinatorRegisterTeamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinatorRegisterTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
