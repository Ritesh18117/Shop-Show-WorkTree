import { Component } from '@angular/core';
import { CustomerProfileService } from 'src/app/Services/customer-profile.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  myProfile:any;

  constructor(private _customerProfile:CustomerProfileService,private _authService:AuthService){}

  ngOnInit(): void {
    this.getDataFromApi();
    
  }
  getDataFromApi() {
    const token = this._authService.getToken();

    if (token) {
      // Include the token in the API request headers
      this._customerProfile.getSomeData(token).subscribe(
        (data) => {
          this.myProfile = data;
          console.log(data);
          // Process the data as needed
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    } else {
      console.error('Token not available.');
    }
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
