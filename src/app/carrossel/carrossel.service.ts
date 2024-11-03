import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { ICarrosselShow } from './carrossel.types';


@Injectable({
  providedIn: 'root'
})
export class CarrosselService {
  apiUrl = 'http://localhost:3000/carrossel'
  constructor(private http: HttpClient) { }

  popularCarrossel(): Observable<ICarrosselShow[]>{
    return this.http.get<ICarrosselShow[]>(this.apiUrl)
  }
}
