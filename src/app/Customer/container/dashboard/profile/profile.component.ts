import { Component } from '@angular/core';
import { CustomerProfileService } from 'src/app/Services/customer-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private _customerProfile:CustomerProfileService){}

  ngOnInit(): void {
    this.getDataFromApi();
    
  }
  getDataFromApi() {
    this._customerProfile.getSomeData().subscribe(
      (data) => {
        console.log(data);
        
        // Process the data as needed
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  profile = {
    firstname:"",
    lastname:"",
    gender:""
  }


  onSubmit(){
    console.log(this.profile);
  }

}
