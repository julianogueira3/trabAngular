import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCadastrosComponent } from './header-cadastros.component';

describe('HeaderCadastrosComponent', () => {
  let component: HeaderCadastrosComponent;
  let fixture: ComponentFixture<HeaderCadastrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderCadastrosComponent]
    });
    fixture = TestBed.createComponent(HeaderCadastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
