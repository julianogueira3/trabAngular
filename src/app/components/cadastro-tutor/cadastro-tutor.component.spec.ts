import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTutorComponent } from './cadastro-tutor.component';

describe('CadastroTutorComponent', () => {
  let component: CadastroTutorComponent;
  let fixture: ComponentFixture<CadastroTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroTutorComponent]
    });
    fixture = TestBed.createComponent(CadastroTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
