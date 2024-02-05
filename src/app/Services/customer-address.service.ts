import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerAddressService {

  private getMyAddresses = '/api/address/myAddresses';
  private postAddress = '/api/address/addAddress';

  constructor(private http: HttpClient) { }

  getSomeData(token: string): Observable<any> {
    // Set the Authorization header with the token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Make the API request with the headers
    return this.http.get<any>(this.getMyAddresses, { headers });
  }

  postData(address:any, token:string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(this.postAddress, address, { headers });
  }
}
