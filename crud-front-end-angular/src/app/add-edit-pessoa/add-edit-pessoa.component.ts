import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PessoasService } from '../services/pessoas.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-pessoa',
  templateUrl: './add-edit-pessoa.component.html',
  styleUrls: ['./add-edit-pessoa.component.scss']
})
export class AddEditPessoaComponent {
  pessoaForm: FormGroup;
  
  jobPositions: string[] = [
    'Profissão',
    'Outra',
    'Fetch from API later'
  ]

  constructor(private _formBuilder: FormBuilder, private _pessoasService: PessoasService, private _dialogRef: MatDialogRef<AddEditPessoaComponent>) {
    this.pessoaForm = this._formBuilder.group({
      nome: '',
      dataDeNascimento: '',
      cpf: '',
      telefone: '',
      observacoes: '',
      profissao: ''
    })
  }

  onFormSubmit() {
    if (this.pessoaForm.valid){
      this._pessoasService.addPessoa(this.pessoaForm.value).subscribe({
        next: (val: any) => {
          console.log(val);
          alert('Pessoa adicionada com sucesso')
          this._dialogRef.close(true)
        },
        error: (err: any) => {
          console.error(err)
        }
      })
    } else {
      alert('Falha na validação, verifique os campos em destaque.')
    }
  }
}