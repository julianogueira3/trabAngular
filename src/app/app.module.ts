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
@NgModule({
  declarations: [
    AppComponent,
    CursoBoxComponent,
    BoxBeneficiosComponent,
    FooterComponent,
    CadastroAlunoComponent, 
    CadastroTutorComponent, CadastroAlunoPageComponent, CadastroTutorPageComponent, WelcomeComponent, 
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
