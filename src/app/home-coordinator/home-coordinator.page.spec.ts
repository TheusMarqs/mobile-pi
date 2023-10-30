import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCoordinatorPage } from './home-coordinator.page';

describe('HomeCoordinatorPage', () => {
  let component: HomeCoordinatorPage;
  let fixture: ComponentFixture<HomeCoordinatorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeCoordinatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
