import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditPessoaComponent } from './add-edit-pessoa/add-edit-pessoa.component';
import { PessoasService } from './services/pessoas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  displayedColumns: string[] = ['nome', 'dataDeNascimento', 'cpf', 'telefone', 'observacoes', 'profissao', 'acao'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _pessoasService: PessoasService) {}

  ngOnInit(): void {
    this.getPessoasList()
  }

  openAddPessoaForm() {
    const dialogRef = this._dialog.open(AddEditPessoaComponent)
    dialogRef.afterClosed().subscribe({
      next: (actionExecuted: boolean) => {
        if(actionExecuted){
          this.getPessoasList()
        }
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }

  openEditPessoaForm(data: any) {
    const dialogRef = this._dialog.open(AddEditPessoaComponent, {
      data,
    })
    dialogRef.afterClosed().subscribe({
      next: (actionExecuted: boolean) => {
        if(actionExecuted){
          this.getPessoasList()
        }
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }

  getPessoasList() {
    this._pessoasService.getPessoasList().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }
  
  deletePessoa(id: number) {
    return this._pessoasService.deletePessoa(id).subscribe({
      next: () => {
        alert('Pessoa deletada com sucesso')
        this.getPessoasList()
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
