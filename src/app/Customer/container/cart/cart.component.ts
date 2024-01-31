import { Component } from '@angular/core';
import { cardItem } from 'src/app/Models/cardItem';

@Component({
  selector: 'app-card',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CardComponent {
  cardItems:cardItem[] = [];
  total:number = 0;
  discount:number = 0;
  delivery:number = 49;
  totalQuantity:number = 0;
  message:string = "";
  forMessage:string = "";

  constructor(){
    // let items = localStorage.getItem('cardItems');
    // this.cardItems = items ? JSON.parse(items) : [];
    // for(const item of this.cardItems){
    //   this.total += item.product.price * item.quantity;
    //   this.totalQuantity += item.quantity;
    //   if(item.product.discountPrice){
    //     this.discount += item.product.discountPrice * item.quantity;
    //   }
    // }
  }

  plus(ind:number){
    // if(this.cardItems[ind].product.items_left > this.cardItems[ind].quantity){
    //   this.cardItems[ind].quantity++;
    //   this.totalQuantity++;
    //   this.total += this.cardItems[ind].product.price;
    //   if(this.cardItems[ind].product.discountPrice){
    //     this.discount += (this.cardItems[ind].product.discountPrice || 0);
    //   }
    //   localStorage.setItem('cardItems',JSON.stringify(this.cardItems));
    // }
    // else{
    //   this.message = `Maximum Limit!`;
    //   this.forMessage = `${ind}`;
    //   setTimeout(() => {
    //     this.message = '';
    //   }, 500);
    // }
  }

  minus(ind:number){
    // if(1 < this.cardItems[ind].quantity){
    //   this.cardItems[ind].quantity--;
    //   this.totalQuantity--;
    //   this.total -= this.cardItems[ind].product.price;
    //   if(this.cardItems[ind].product.discountPrice){
    //     this.discount -= (this.cardItems[ind].product.discountPrice || 0);
    //   }
    //   localStorage.setItem('cardItems',JSON.stringify(this.cardItems));
    // }
    // else{
    //   this.message = `Minimum Limit!`;
    //   this.forMessage = `${ind}`;
    //   setTimeout(() => {
    //     this.message = '';
    //   }, 500);
    // }
  }

  removeItem(ind:number){
    // this.cardItems.splice(ind,1)
    // localStorage.setItem("cardItems",JSON.stringify(this.cardItems));
  }
}
