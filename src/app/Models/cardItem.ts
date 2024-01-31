import { Product } from "./Product";

export class cardItem{
    product:Product;
    color:string;
    size:number;
    quantity:number;
    constructor(product:Product,color:string,size:number,quantity:number){
        this.product = product;
        this.color = color;
        this.size = size;
        this.quantity = quantity;
    }
}