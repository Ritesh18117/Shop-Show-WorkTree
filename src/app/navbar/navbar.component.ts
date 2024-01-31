import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SellerAuthService } from '../Seller/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  isLoggedIn:string = "false";
  isSellerLoggedIn:string = "false";
  isAdminLoggedIn:string = "false";

  customerNotLoggedIn: boolean = this.isSellerLoggedIn == 'false' && this.isAdminLoggedIn == 'false';
  sellerLoggedIn:boolean = this.isLoggedIn == 'false' || this.isAdminLoggedIn == 'false'


  constructor(private _authService:AuthService, private _sellerAuthService:SellerAuthService){ }

  ngAfterContentChecked(){
    if(localStorage.getItem("isAdminLoggedIn") !== null){
      const storedIsLoggedIn = localStorage.getItem("isAdminLoggedIn");
      if (storedIsLoggedIn !== null) {
        this.isAdminLoggedIn = storedIsLoggedIn;
      } else {
        console.log("Value for 'isSellerLoggedIn' is null or not found.");
        this.isAdminLoggedIn = "false";  // Set a default value
      }
    }
    
    if(localStorage.getItem("isSellerLoggedIn") !== null){
      const storedIsLoggedIn = localStorage.getItem("isSellerLoggedIn");
      if (storedIsLoggedIn !== null) {
        this.isSellerLoggedIn = storedIsLoggedIn;
      } else {
        console.log("Value for 'isSellerLoggedIn' is null or not found.");
        this.isSellerLoggedIn = "false";  // Set a default value
      }
    }

    if(localStorage.getItem("isLoggedIn") !== null){
      const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
      if (storedIsLoggedIn !== null) {
        this.isLoggedIn = storedIsLoggedIn;
      } else {
        console.log("Value for 'isLoggedIn' is null or not found.");
        this.isLoggedIn = "false";  // Set a default value
      }
    }
  }

  logout(){
    this._authService.logout();
    this.isLoggedIn = "false";
  }

  Sellerlogout(){
    this._sellerAuthService.logout();
    this.isSellerLoggedIn = "false";
  }
}
