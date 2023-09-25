import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.sass']
})
export class CadastroAlunoComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  senhaConfirmacao: string = '';
  alunoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      senhaConfirmacao: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.alunoForm.valid) {
      // Aqui você pode enviar os dados do aluno para um serviço ou API
      const alunoData = this.alunoForm.value; // Remova a tipagem aqui
      console.log('Dados do Aluno:', alunoData);
    }
  }
  
}

