import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductVariationService {

  private getProductApi = 'http://localhost:8282/api/productVariation/getAll';

  constructor(private http: HttpClient) { }
  
  getSomeData(): Observable<any> {
    // console.log(this.http.get(`${this.getProductApi}`));
    return this.http.get(`${this.getProductApi}`);
  }
}
