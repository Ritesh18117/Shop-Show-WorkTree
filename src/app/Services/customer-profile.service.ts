import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerProfileService {

  private getProductApi = '/api/customer/myProfile';

  constructor(private http: HttpClient) { }

  getSomeData(token: string): Observable<any> {
    // Set the Authorization header with the token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Make the API request with the headers
    return this.http.get<any>(this.getProductApi, { headers });
  }
}
