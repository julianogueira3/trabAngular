import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAlunoPageComponent } from './pages/cadastro-aluno-page/cadastro-aluno-page.component';
import { CadastroTutorPageComponent } from './pages/cadastro-tutor-page/cadastro-tutor-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PerfilTutorPageComponent } from './pages/perfil-tutor-page/perfil-tutor-page.component';
import { PerfilAlunoPageComponent } from './pages/perfil-aluno-page/perfil-aluno-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ListChatPageComponent } from './pages/list-chat-page/list-chat-page.component';
import { HomeTutorPageComponent } from './pages/home-tutor-page/home-tutor-page.component';
import { HomeAlunoPageComponent } from './pages/home-aluno-page/home-aluno-page.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Rota padrão que renderiza o componente "welcome"
  { path: 'cadastro-aluno', component: CadastroAlunoPageComponent },
  { path: 'cadastro-tutor', component: CadastroTutorPageComponent },   
  { path: 'login', component: LoginPageComponent },
  { path: 'home-tutor', component: PerfilTutorPageComponent },
  { path: 'perfil-aluno', component: PerfilAlunoPageComponent },
  { path: 'chat', component: ChatPageComponent},
  { path: 'list-chat', component: ListChatPageComponent},
  { path: 'home-tutor', component: HomeTutorPageComponent },
  { path: 'home-aluno', component: HomeAlunoPageComponent },
  { path: 'cadastro-tutor', component: CadastroTutorPageComponent },
  { path: 'perfil-tutor', component: PerfilTutorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


