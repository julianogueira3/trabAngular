import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-aluno-page',
  templateUrl: './home-aluno-page.component.html',
  styleUrls: ['./home-aluno-page.component.scss']
})
export class HomeAlunoPageComponent {
  constructor(private router: Router) {}
  redirectToPerfil() {
    
    this.router.navigate(['/perfil-aluno']);
  }

}
