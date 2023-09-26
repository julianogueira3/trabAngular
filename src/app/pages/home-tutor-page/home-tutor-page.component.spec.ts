import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTutorPageComponent } from './home-tutor-page.component';

describe('HomeTutorPageComponent', () => {
  let component: HomeTutorPageComponent;
  let fixture: ComponentFixture<HomeTutorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTutorPageComponent]
    });
    fixture = TestBed.createComponent(HomeTutorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
