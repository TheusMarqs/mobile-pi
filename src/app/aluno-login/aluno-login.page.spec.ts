import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlunoLoginPage } from './aluno-login.page';

describe('AlunoLoginPage', () => {
  let component: AlunoLoginPage;
  let fixture: ComponentFixture<AlunoLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlunoLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
