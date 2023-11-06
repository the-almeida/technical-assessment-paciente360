import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private _http: HttpClient) {}

  addPessoa(formData: any): Observable<any> {
    return this._http.post('http://localhost:3000/api/pessoas/create', formData)
  }

  updatePessoa(id: number, formData: any): Observable<any> {
    return this._http.put(`http://localhost:3000/api/pessoas/${id}`, formData)
  }

  getPessoasList(): Observable<any> {
    return this._http.get('http://localhost:3000/api/pessoas')
  }

  deletePessoa(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/api/pessoas/${id}`)
  }
}
