import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAlunoPageComponent } from './cadastro-aluno-page.component';

describe('CadastroAlunoPageComponent', () => {
  let component: CadastroAlunoPageComponent;
  let fixture: ComponentFixture<CadastroAlunoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAlunoPageComponent]
    });
    fixture = TestBed.createComponent(CadastroAlunoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
