import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private _http: HttpClient) {}

  addPessoa(formData: any): Observable<any> {
    return this._http.post('http://localhost:3000/pessoas', formData)
  }
}
