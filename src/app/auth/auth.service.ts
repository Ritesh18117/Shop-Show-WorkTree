import { Injectable } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Route, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public isAuthenticated = false;
  public role:any;
  constructor(private _loginService : LoginService,private _router:Router) { }

  login(username:string,password:string){
    this._loginService.postData(username,password).subscribe(
      (response) => {
        if (response && response.token) {
          // Save token and role in session storage
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('role',response.role);
          console.log(response.role);
          
          // Redirect or perform other actions as needed
          this._router.navigate(['/home']);
        }

        console.log(response.error.text);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  logout(){
    localStorage.removeItem("isLoggedIn");
    this.isAuthenticated = false;
  }

  isAuthenticate() : boolean{
    return this.isAuthenticated;
  }
}
