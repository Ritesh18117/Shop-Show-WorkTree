import { Color } from "./Color";
import { Product } from "./Product";
import { Size } from "./Size";

export class ProductVariation{
    product:Product;
    size:Size;
    color:Color;
    quantity:number;

    constructor(product:Product,size:Size,color:Color,quantity:number){
        this.product = product;
        this.color = color;
        this.size = size;
        this.quantity = quantity;
    }
}