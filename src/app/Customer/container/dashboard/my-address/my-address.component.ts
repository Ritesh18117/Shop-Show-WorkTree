import { Component } from '@angular/core';
import { Address } from 'src/app/Models/address';
import { CustomerAddressService } from 'src/app/Services/customer-address.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.css']
})
export class MyAddressComponent {

  myAddresses:any;
  addAddress = {
    name: "",
    contact:"",
    address1:"",
    address2:"",
    city:"",
    state:"",
    country:"India",
    zipcode:""
  }

  constructor(private _customerAddress:CustomerAddressService, private _authService:AuthService) {}

  ngOnInit(): void {
    this.getDataFromApi();
  }
  getDataFromApi() {
    const token = this._authService.getToken();

    if (token) {
      // Include the token in the API request headers
      this._customerAddress.getSomeData(token).subscribe(
        (data) => {
          this.myAddresses = data;
          // Process the data as needed
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    } else {
      console.error('Token not available.');
    }
  }
  
  onSubmit(){
    const token = this._authService.getToken();
    if(token){
      this._customerAddress.postData(this.addAddress,token).subscribe(
        (date) => {
          console.log(date);
          this.ngOnInit();
        },
        (error) => {
          console.error("Posting Data Error", error);
        }
      )
    } else{
      console.error("Token Not Found");
    } 
    this.addAddress.address1 ="";
    this.addAddress.address2 = "";
    this.addAddress.city = "";
    this.addAddress.contact = "";
    this.addAddress.country = "";
    this.addAddress.state = "";
    this.addAddress.zipcode = "";
    this.addAddress.name = "";
    console.log("Hello");
  }

  deleteAddress(ind:number){

  }
}
