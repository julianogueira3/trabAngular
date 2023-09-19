import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-beneficios',
  templateUrl: './box-beneficios.component.html',
  styleUrls: ['./box-beneficios.component.sass']
})
export class BoxBeneficiosComponent {
  @Input() imageUrlBen: string = '';
  @Input() nomeBeneficio: string = '';
  @Input() descricaoBeneficio: string = '';

}
