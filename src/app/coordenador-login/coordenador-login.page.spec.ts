import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordenadorLoginPage } from './coordenador-login.page';

describe('CoordenadorLoginPage', () => {
  let component: CoordenadorLoginPage;
  let fixture: ComponentFixture<CoordenadorLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoordenadorLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
