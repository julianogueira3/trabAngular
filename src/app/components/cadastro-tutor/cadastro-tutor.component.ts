import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-tutor',
  templateUrl: './cadastro-tutor.component.html',
  styleUrls: ['./cadastro-tutor.component.sass']
})
export class CadastroTutorComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  senhaConfirmacao: string = '';
  anexo: string = '';
  tutorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tutorForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      senhaConfirmacao: ['', Validators.required],
      anexo: [''] // O campo de anexo pode ser opcional, ajuste conforme necessário
    });
  }

  onSubmit() {
    if (this.tutorForm.valid) {
      // Aqui você pode enviar os dados do tutor para um serviço ou API
      const tutorData = this.tutorForm.value;
      console.log('Dados do Tutor:', tutorData);
    }
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Arquivo selecionado:', file);
    }
  }
}
