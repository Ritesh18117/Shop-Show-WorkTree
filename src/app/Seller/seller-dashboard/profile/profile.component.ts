import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profile = {
    companyName:"Show Shoes",
    companyType:"E-commerce",
    email:"showshop@showshop.com",
    contact:"6297425557",
    gst:"22AAAAA0000A1Z5",
    address:"Delhi",
    licenceNumber:"2JBJ3BJ2332B",
    website:"showshop.com",
    verified:"false"
  }

  constructor(private toastr: ToastrService) { }

  onSubmit(){
    console.log(this.profile);
    this.toastr.success('Product Added!!', 'Success');
  }
}
