import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBeneficiosComponent } from './box-beneficios.component';

describe('BoxBeneficiosComponent', () => {
  let component: BoxBeneficiosComponent;
  let fixture: ComponentFixture<BoxBeneficiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxBeneficiosComponent]
    });
    fixture = TestBed.createComponent(BoxBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
