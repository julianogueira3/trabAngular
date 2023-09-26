import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAlunoPageComponent } from './perfil-aluno-page.component';

describe('PerfilAlunoPageComponent', () => {
  let component: PerfilAlunoPageComponent;
  let fixture: ComponentFixture<PerfilAlunoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilAlunoPageComponent]
    });
    fixture = TestBed.createComponent(PerfilAlunoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
