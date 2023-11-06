import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PessoasService } from '../services/pessoas.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { ProfissoesService } from '../services/profissoes.service';

@Component({
  selector: 'app-add-edit-pessoa',
  templateUrl: './add-edit-pessoa.component.html',
  styleUrls: ['./add-edit-pessoa.component.scss']
})
export class AddEditPessoaComponent implements OnInit {
  pessoaForm: FormGroup;
  
  occupations: {nome: string, id: number}[] = []

  constructor(
      private _formBuilder: FormBuilder, 
      private _pessoasService: PessoasService, 
      private _profissoesService: ProfissoesService,
      private _dialogRef: MatDialogRef<AddEditPessoaComponent>,
      private _coreService: CoreService,
      @Inject(MAT_DIALOG_DATA) public data:any
    ) {
    this.pessoaForm = this._formBuilder.group({
      nome: '',
      dataNascimento: '',
      cpf: '',
      telefone: '',
      observacoes: '',
      idProfissao: ''
    })
  }

  ngOnInit(): void {
    this.getOccupationsList()

    this.pessoaForm.patchValue(this.data)
  }

  getOccupationsList() {
    this._profissoesService.getProfissoesList().subscribe({
      next: (res: any) => {
        this.occupations = res
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }

  onFormSubmit() {
    if (this.pessoaForm.valid){
      if(this.data) {
        this._pessoasService.updatePessoa(this.data.id, this.pessoaForm.value).subscribe({
          next: () => {
            this._coreService.openSnackBar('Dados da Pessoa atualizados com sucesso')
            this._dialogRef.close(true)
          },
          error: (err: any) => {
            console.error(err)
          }
        })
      }
      else{
        this._pessoasService.addPessoa(this.pessoaForm.value).subscribe({
          next: () => {
            this._coreService.openSnackBar('Pessoa adicionada com sucesso')
            this._dialogRef.close(true)
          },
          error: (err: any) => {
            console.error(err)
          }
        })
      }
    } else {
      this._coreService.openSnackBar('Falha na validação, verifique os campos em destaque.')
    }
  }
}
