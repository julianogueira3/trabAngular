import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.scss']
})
export class HeaderLoginComponent {
  constructor(private router: Router) {}

  redirectToWelcome() {
    // Adicione o código para redirecionar para a página "Home"
    this.router.navigate(['/']);
  }

  redirectToCadastroTutor() {
    // Adicione o código para redirecionar para a página de login
    this.router.navigate(['/cadastro-tutor']);
  }
  redirectToCadastroAluno() {
    // Adicione o código para redirecionar para a página de login
    this.router.navigate(['/cadastro-aluno']);
  }
}
