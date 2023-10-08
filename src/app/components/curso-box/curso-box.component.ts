import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-curso-box',
  templateUrl: './curso-box.component.html',
  styleUrls: ['./curso-box.component.scss']
})

export class CursoBoxComponent {
  @Input() imageUrl: string = '';
  @Input() nomeCurso: string = '';
}
