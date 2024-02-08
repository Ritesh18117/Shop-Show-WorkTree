import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private getProductApi = '/api/product/approvedProducts';

  constructor(private http: HttpClient) { }

  getApprovedProducts(): Observable<any> {
    return this.http.get(`${this.getProductApi}`);
  }
}
