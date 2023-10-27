import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordinatorLoginPage } from './coordinator-login.page';

describe('CoordinatorLoginPage', () => {
  let component: CoordinatorLoginPage;
  let fixture: ComponentFixture<CoordinatorLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordinatorLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
