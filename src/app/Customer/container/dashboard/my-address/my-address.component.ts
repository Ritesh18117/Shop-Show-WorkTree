import { Component } from '@angular/core';
import { Address } from 'src/app/Models/address';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.css']
})
export class MyAddressComponent {

  address:Address = {
    firstname:"",
    lastname:"",
    address:"",
    address2:"",
    city:"",
    state:"",
    zipcode:"",
    phone:""
  }

  myAddress: Address[] = [];

  constructor() {
    try {
      let addr = localStorage.getItem('myAddress');
      if (addr !== null) {
        this.myAddress = JSON.parse(addr);
      }
      else{
        localStorage.setItem('myAddress','');
      }
    } catch (error) {
      console.log("Address parsing Error");
    }
  }
  
  onSubmit(){
    console.log(this.address);
    this.myAddress.push(this.address);
    localStorage.setItem('myAddress',JSON.stringify(this.myAddress));
    // this.address.firstname = "";
    // this.address.lastname = "";
    // this.address.address = "";
    // this.address.address2 = "";
    // this.address.city = "";
    // this.address.state = "";
    // this.address.zipcode = "";
    // this.address.phone = "";
  }

  deleteAddress(ind:number){
    this.myAddress.splice(ind,1);
    localStorage.setItem("myAddress",JSON.stringify(this.myAddress));
  }
}
