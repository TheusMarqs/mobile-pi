import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessorLoginPage } from './professor-login.page';

describe('ProfessorLoginPage', () => {
  let component: ProfessorLoginPage;
  let fixture: ComponentFixture<ProfessorLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfessorLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
