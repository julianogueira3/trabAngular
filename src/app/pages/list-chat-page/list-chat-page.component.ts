import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-chat-page',
  templateUrl: './list-chat-page.component.html',
  styleUrls: ['./list-chat-page.component.scss']
})
export class ListChatPageComponent {
  chatId: number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.chatId = params['id'];
    });
  }
}
