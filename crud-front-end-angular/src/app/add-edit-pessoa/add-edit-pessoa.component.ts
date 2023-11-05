import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PessoasService } from '../services/pessoas.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-pessoa',
  templateUrl: './add-edit-pessoa.component.html',
  styleUrls: ['./add-edit-pessoa.component.scss']
})
export class AddEditPessoaComponent implements OnInit {
  pessoaForm: FormGroup;
  
  jobPositions: string[] = [
    'Profissão',
    'Outra',
    'Fetch from API later'
  ]

  constructor(
      private _formBuilder: FormBuilder, 
      private _pessoasService: PessoasService, 
      private _dialogRef: MatDialogRef<AddEditPessoaComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any
    ) {
    this.pessoaForm = this._formBuilder.group({
      nome: '',
      dataDeNascimento: '',
      cpf: '',
      telefone: '',
      observacoes: '',
      profissao: ''
    })
  }

  ngOnInit(): void {
    this.pessoaForm.patchValue(this.data)
  }

  onFormSubmit() {
    if (this.pessoaForm.valid){
      if(this.data) {
        this._pessoasService.updatePessoa(this.data.id, this.pessoaForm.value).subscribe({
          next: (val: any) => {
            console.log(val);
            alert(`Dados da Pessoa atualizados com sucesso`)
            this._dialogRef.close(true)
          },
          error: (err: any) => {
            console.error(err)
          }
        })
      }
      else{
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
      }
    } else {
      alert('Falha na validação, verifique os campos em destaque.')
    }
  }
}
