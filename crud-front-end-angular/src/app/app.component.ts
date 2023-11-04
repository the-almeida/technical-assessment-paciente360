import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditPessoaComponent } from './add-edit-pessoa/add-edit-pessoa.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-front-end-angular';

  constructor(private _dialog: MatDialog) {}

  openAddEditPessoaForm() {
    this._dialog.open(AddEditPessoaComponent)
  }
}
