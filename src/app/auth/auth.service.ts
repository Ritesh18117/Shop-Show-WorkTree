import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public isAuthenticated = false;
  constructor() { }

  login(username:string,password:string){
    if(username === 'customer' && password === 'customer@123'){
      localStorage.setItem("isLoggedIn","true");
      this.isAuthenticated = true;
      return true;
    }
    else{
      this.isAuthenticated = false;
      return false;
    }
  }

  logout(){
    localStorage.removeItem("isLoggedIn");
    this.isAuthenticated = false;
  }

  isAuthenticate() : boolean{
    return this.isAuthenticated;
  }
}
