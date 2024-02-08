import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  private addToCartURL = '/api/cart/addToCart';

  constructor(private http: HttpClient) { }

  addToCart(cardItem:any, token:any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(this.addToCartURL, cardItem, { headers });
  }
  
}
