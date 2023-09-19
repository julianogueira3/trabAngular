import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CursoBoxComponent } from './curso-box/curso-box.component';
import { BoxBeneficiosComponent } from './box-beneficios/box-beneficios.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CursoBoxComponent,
    BoxBeneficiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
