import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  Email: any;
  User:any;
  Gender:any;

  constructor(private userservice:UserService) { 
    this.Email=this.userservice.UserEmail;
    console.log(this.Email)
  }


  ngOnInit(): void {
    this.userservice.GetUserProfile(this.Email).subscribe(
      (data)=>
      {
        this.User=data;
        if(this.User.gender==0)
        {
          this.Gender='Male';
        }
        else 
        {
          this.Gender='Female';

        }
      },
      (err)=>
      {
        console.log(err)
      }
    )
  }

}
