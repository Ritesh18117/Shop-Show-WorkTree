import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductVariationService {

  private getProductApi = '/api/productVariation/getAll';

  constructor(private http: HttpClient) { }
  
  getSomeData(): Observable<any> {
    return this.http.get(`${this.getProductApi}`);
  }
}
