import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-tutor-page',
  templateUrl: './perfil-tutor-page.component.html',
  styleUrls: ['./perfil-tutor-page.component.scss']
})
export class PerfilTutorPageComponent {
  public cadeiras = 11;
  public bio = 'Uma bio bem bonita';
  public notas = 0;
}
