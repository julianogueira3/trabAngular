import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAlunoPageComponent } from './pages/cadastro-aluno-page/cadastro-aluno-page.component';
import { CadastroTutorPageComponent } from './pages/cadastro-tutor-page/cadastro-tutor-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Rota padrão que renderiza o componente "welcome"
  { path: 'cadastro-aluno', component: CadastroAlunoPageComponent },
  { path: 'cadastro-tutor', component: CadastroTutorPageComponent },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


