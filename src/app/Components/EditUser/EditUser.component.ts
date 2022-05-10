import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-EditUser',
  templateUrl: './EditUser.component.html',
  styleUrls: ['./EditUser.component.css']
})
export class EditUserComponent implements OnInit {
  userEmail:any;
  user:any;
  constructor(private ActivatedRoute:ActivatedRoute,private router:Router,private UserService:UserService) {
    this.userEmail = ActivatedRoute.snapshot.params['email'];
  }

  ngOnInit() {
    this.UserService.GetUserProfile(this.userEmail).subscribe(
      (data) => {
        this.user = data;
        console.log(this.user);
      },
      (err) => {
        console.log(err);
      }
    );

  }
  // "username": "string",
// "email": "user@example.com",
// "password": "string",
// "confirmPassword": "string",
// "profileImage": "string",
// "gender": 0,
// "role": "string"


  EditUser(username:any,email:any,password:any,confirmPassword:any,profileImage:any,gender:any,role:any){
    let user = {
      username:username,
      email: email,
      password:password,
      confirmPassword:confirmPassword,
      profileImage:profileImage,
      gender:gender,
      role:role

    };
    this.UserService.EditUserProfile(
      this.userEmail
      ,user
    ).subscribe();
    //this.router.navigate(['/AllCategories']);
  }


  }


