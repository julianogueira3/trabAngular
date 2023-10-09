import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAlunoPageComponent } from './pages/cadastro-aluno-page/cadastro-aluno-page.component';
import { CadastroTutorPageComponent } from './pages/cadastro-tutor-page/cadastro-tutor-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PerfilTutorPageComponent } from './pages/perfil-tutor-page/perfil-tutor-page.component';
import { PerfilAlunoPageComponent } from './pages/perfil-aluno-page/perfil-aluno-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Rota padrão que renderiza o componente "welcome"
  { path: 'cadastro-aluno', component: CadastroAlunoPageComponent },
  { path: 'cadastro-tutor', component: CadastroTutorPageComponent },   
  { path: 'login', component: LoginPageComponent },
  { path: 'perfil-tutor', component: PerfilTutorPageComponent },
  { path: 'perfil-aluno', component: PerfilAlunoPageComponent },
  { path: 'chat', component: ChatPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


