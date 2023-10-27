import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoBoxComponent } from './components/curso-box/curso-box.component';
import { BoxBeneficiosComponent } from './components/box-beneficios/box-beneficios.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component'; 
import { CadastroTutorComponent } from './components/cadastro-tutor/cadastro-tutor.component';
import { CadastroAlunoPageComponent } from './pages/cadastro-aluno-page/cadastro-aluno-page.component';
import { CadastroTutorPageComponent } from './pages/cadastro-tutor-page/cadastro-tutor-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { PerfilTutorPageComponent } from './pages/perfil-tutor-page/perfil-tutor-page.component';
import { PerfilAlunoPageComponent } from './pages/perfil-aluno-page/perfil-aluno-page.component';
import { HomeTutorPageComponent } from './pages/home-tutor-page/home-tutor-page.component';
import { HomeAlunoPageComponent } from './pages/home-aluno-page/home-aluno-page.component';
import { DisciplinaPageComponent } from './pages/disciplina-page/disciplina-page.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { HeaderCadastrosComponent } from './components/header-cadastros/header-cadastros.component';
import { HeaderComponent } from './components/header/header.component';
import { ChatComponent } from './chat/chat.component'; 
@NgModule({
  declarations: [
    AppComponent,
    CursoBoxComponent,
    BoxBeneficiosComponent,
    FooterComponent,
    CadastroAlunoComponent, 
    CadastroTutorComponent, CadastroAlunoPageComponent, CadastroTutorPageComponent, WelcomeComponent, LoginPageComponent, ChatPageComponent, PerfilTutorPageComponent, PerfilAlunoPageComponent, HomeTutorPageComponent, HomeAlunoPageComponent, DisciplinaPageComponent, FiltroComponent, ButtonsComponent, HeaderCadastrosComponent, HeaderComponent, ChatComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
