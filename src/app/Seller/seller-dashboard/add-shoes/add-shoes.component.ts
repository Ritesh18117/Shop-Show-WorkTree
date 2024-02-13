import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-add-shoes',
  templateUrl: './add-shoes.component.html',
  styleUrls: ['./add-shoes.component.css']
})
export class AddShoesComponent {
  size:string = "";
  color:string = "";
  quantity:string = "";

  product = {
    brand:"",
    name:"",
    quantity: [] as any[],
    gender:"",
    category:"",
    price:0,
    discountPrice:0,
    margin:0,
    imageURL:"",
    description:"",
  }

  categories:any;

  constructor(private toastr: ToastrService, private _categoryService:CategoryService) { }

  ngOnInit(){
    this.getCategory();
  }

  getCategory(){
    this._categoryService.getAllCategory().subscribe(
      (data) =>{
        console.log(data);
        this.categories = data;
      }, 
      (error) => {
        console.error("ERROR",error);
      }
    )
  }

  addQuantity(){
    if(this.size != "" && this.color != "" && this.quantity != ""){
      let quan = {
        size: this.size,
        color:this.color,
        quantity:this.quantity,
      }
      this.product.quantity.push(quan);
      this.size = "";
      this.color = "";
      this.quantity = "";
    }
  }

  onSubmit(){
    console.log(this.product);
    this.toastr.success('Product Added!!', 'Success');
    this.product.brand = "";
    this.product.name = "";
    this.product.quantity = [];
    this.product.gender = "";
    this.product.category = "";
    this.product.price = 0;
    this.product.discountPrice = 0;
    this.product.imageURL = "";
    this.product.description = "";
  }
}
