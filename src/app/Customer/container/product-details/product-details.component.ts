import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductsListComponent } from '../products-list/products-list.component';
import { cardItem } from 'src/app/Models/cardItem';
import { ToastrService } from 'ngx-toastr';
import { ProductVariation } from 'src/app/Models/ProductVariation';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  constructor(private toastr: ToastrService) { }

  // Variables for card Items
  color: string = "";
  size:number = -1;


  @Input() productListComp!: ProductsListComponent;

  // For Loading product when component is loaded 
  productVariation!:ProductVariation;
  cardItem!:cardItem;
  
  // For Closing Card
  @Output() onClose : EventEmitter<void> = new EventEmitter<void>();

  // For adding item to card
  @Output() addItemToCard: EventEmitter<cardItem> = new EventEmitter<cardItem>();

  // Load product at first to show to details page
  ngOnInit(){
    this.productVariation = this.productListComp.selectedProduct;
  }

  // For Closing Button (will be sent to container component)
  onClosed(){
    this.onClose.emit();
  }

  // Color Selection
  pickColor(color:string){
    console.log(color);
    this.color = color;
  }
  
  // Size Selection
  pickSize(size:number){
    this.size = size;
    console.log(this.size);
  }

  // Add to card 
  addToCard(){
    // if (!this.cardItem) {
    //   this.cardItem = new cardItem(this.productVa, '', -1,0); 
    // }

    // if(this.color != ""){
    //   if(this.size !== -1){

    //     if(localStorage.getItem("isLoggedIn") === null){
    //       this.toastr.warning('Please Login First', 'warning');
    //     }else{
    //       this.cardItem.product = this.product;
    //       this.cardItem.color = this.color;
    //       this.cardItem.size = this.size;
    //       this.cardItem.quantity = 1;
    //       this.addItemToCard.emit(this.cardItem);
    //       this.toastr.success('Product Added!!', 'Success');
    //     }
    //   }
    //   else{
    //     this.toastr.warning('Please Select Size!', 'warning');
    //   }
    // }
    // else{
    //   this.toastr.warning('Please Select Color!', 'warning');
    // }    
  }
}
