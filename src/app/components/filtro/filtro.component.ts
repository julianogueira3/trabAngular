import { Component } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {
  filtroVisivel = false; 
  toggleFiltro() {
    this.filtroVisivel = !this.filtroVisivel; 
  }
}
