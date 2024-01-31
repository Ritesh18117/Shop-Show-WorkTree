import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profile = {
    firstname:"",
    lastname:"",
    gender:""
  }


  onSubmit(){
    console.log(this.profile);
  }

}
