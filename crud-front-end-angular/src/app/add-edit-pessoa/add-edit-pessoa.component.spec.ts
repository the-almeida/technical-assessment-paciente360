import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPessoaComponent } from './add-edit-pessoa.component';

describe('AddEditPessoaComponent', () => {
  let component: AddEditPessoaComponent;
  let fixture: ComponentFixture<AddEditPessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditPessoaComponent]
    });
    fixture = TestBed.createComponent(AddEditPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
