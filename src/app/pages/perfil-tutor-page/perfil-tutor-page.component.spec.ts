import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilTutorPageComponent } from './perfil-tutor-page.component';

describe('PerfilTutorPageComponent', () => {
  let component: PerfilTutorPageComponent;
  let fixture: ComponentFixture<PerfilTutorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilTutorPageComponent]
    });
    fixture = TestBed.createComponent(PerfilTutorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
