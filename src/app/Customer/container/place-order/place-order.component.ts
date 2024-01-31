import { Component } from '@angular/core';
import { Address } from 'src/app/Models/address';
import { cardItem } from 'src/app/Models/cardItem';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent {

  // For Address getting form
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
  // showForm Varible
  showForm:boolean = false;

  myAddress: Address[] = [];

  cardItems:cardItem[] = [];
  total:number = 0;
  discount:number = 0;
  delivery:number = 49;
  totalQuantity:number = 0;
  message:string = "";
  forMessage:string = "";
  selectedAddress!:Address;
  paymentMethod:string = "cod";

  constructor() {

    // For Getting CartItems
    // let items = localStorage.getItem('cardItems');
    // this.cardItems = items ? JSON.parse(items) : [];
    // for(const item of this.cardItems){
    //   this.total += item.product.price * item.quantity;
    //   this.totalQuantity += item.quantity;
    //   if(item.product.discountPrice){
    //     this.discount += item.product.discountPrice * item.quantity;
    //   }
    // }

    // For Getting Addresses
    try {
      let addr = localStorage.getItem('myAddress');
      if (addr !== null) {
        this.myAddress = JSON.parse(addr);
      }
      else{
        localStorage.setItem('myAddress','');
      }
    } catch (error) {
      console.log("Address parsing Error")
    }

    // For Assigining default Address
    this.selectedAddress = this.myAddress[this.myAddress.length - 1];
  }

  selectAddress(address:Address){
    this.selectedAddress = address;
    console.log(this.selectedAddress);
  }

  selecePayment(paymentMethod:string){
    console.log(paymentMethod);
  }

  showAddressForm(){
    this.showForm = !this.showForm
  }

  onSubmit(){
    console.log(this.address);
    this.myAddress.push(this.address);
    localStorage.setItem('myAddress',JSON.stringify(this.myAddress));
  }
}
