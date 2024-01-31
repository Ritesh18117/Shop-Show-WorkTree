import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerAuthService {
  
  public isAuthenticated = false;
  constructor() { }

  login(username:string,password:string){
    if(username === 'seller' && password === 'seller@123'){
      localStorage.setItem("isSellerLoggedIn","true");
      this.isAuthenticated = true;
      return true;
    }
    else{
      this.isAuthenticated = false;
      return false;
    }
  }

  logout(){
    localStorage.removeItem("isSellerLoggedIn");
    this.isAuthenticated = false;
  }

  isAuthenticate() : boolean{
    return this.isAuthenticated;
  }
}
