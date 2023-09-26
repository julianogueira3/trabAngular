import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaPageComponent } from './disciplina-page.component';

describe('DisciplinaPageComponent', () => {
  let component: DisciplinaPageComponent;
  let fixture: ComponentFixture<DisciplinaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisciplinaPageComponent]
    });
    fixture = TestBed.createComponent(DisciplinaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
