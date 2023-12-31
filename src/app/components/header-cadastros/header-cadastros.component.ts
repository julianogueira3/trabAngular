import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-cadastros',
  templateUrl: './header-cadastros.component.html',
  styleUrls: ['./header-cadastros.component.scss']
})
export class HeaderCadastrosComponent {
  constructor(private router: Router) {}

  redirectToWelcome() {
    // Adicione o código para redirecionar para a página "Home"
    this.router.navigate(['/']);
  }

  redirectToLogin() {
    // Adicione o código para redirecionar para a página de login
    this.router.navigate(['/login-page']);
  }
}
