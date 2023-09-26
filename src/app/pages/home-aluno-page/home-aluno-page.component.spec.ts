import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlunoPageComponent } from './home-aluno-page.component';

describe('HomeAlunoPageComponent', () => {
  let component: HomeAlunoPageComponent;
  let fixture: ComponentFixture<HomeAlunoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAlunoPageComponent]
    });
    fixture = TestBed.createComponent(HomeAlunoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
