import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTutorPageComponent } from './cadastro-tutor-page.component';

describe('CadastroTutorPageComponent', () => {
  let component: CadastroTutorPageComponent;
  let fixture: ComponentFixture<CadastroTutorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroTutorPageComponent]
    });
    fixture = TestBed.createComponent(CadastroTutorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
