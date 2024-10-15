import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardProductService {

  private apiUrl = 'link da API'; 

  constructor(private http:HttpClient) { }

 getProducts(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/products`)
  }
}
