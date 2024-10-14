import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { ITabelaShow } from './tabela.types';


@Injectable({
  providedIn: 'root'
})
export class TabelaService {
  apiUrl = 'http://localhost:3000/orderList'
  constructor(private http: HttpClient) { }

  popularTabela(): Observable<ITabelaShow[]>{
    return this.http.get<ITabelaShow[]>(this.apiUrl)
  }

}
