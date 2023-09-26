import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-cadastros',
  templateUrl: './header-cadastros.component.html',
  styleUrls: ['./header-cadastros.component.sass']
})
export class HeaderCadastrosComponent {
  constructor(private router: Router) {}

  redirectToHome() {
    // Adicione o código para redirecionar para a página "Home"
    this.router.navigate(['/']);
  }

  redirectToLogin() {
    // Adicione o código para redirecionar para a página de login
    this.router.navigate(['/login-page']);
  }
}
