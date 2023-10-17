import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChatPageComponent } from './list-chat-page.component';

describe('ListChatPageComponent', () => {
  let component: ListChatPageComponent;
  let fixture: ComponentFixture<ListChatPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListChatPageComponent]
    });
    fixture = TestBed.createComponent(ListChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
