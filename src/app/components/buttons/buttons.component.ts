import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.sass']
})
export class ButtonsComponent {
  @Input() buttonType: string = ''; 
  @Input() buttonClass: string = ''; 
}
