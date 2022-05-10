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
  Role:any;
  AllRoles:any;
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

    this.UserService.GetRoles().subscribe(
      (data) => {
        this.AllRoles = data;
        console.log(this.AllRoles.roles);
      },
      (err) => {
        console.log(err);
      }
    );

  }




  EditRole(role:any){
    let user = {
      "id": "",
      "userName": "string",
      "normalizedUserName": "string",
      "email": this.user.email,
      "normalizedEmail": "string",
      "emailConfirmed": true,
      "passwordHash": "string",
      "securityStamp": "string",
      "concurrencyStamp": "string",
      "phoneNumber": "string",
      "phoneNumberConfirmed": true,
      "twoFactorEnabled": true,
      "lockoutEnd": "2022-05-10T16:31:30.721Z",
      "lockoutEnabled": true,
      "accessFailedCount": 0,
      "profileImage": "string",
      "gender": 0,

      "role":role
    };

    this.UserService.EditRole(
      this.user.email
      ,user
    ).subscribe();
    //this.router.navigate(['/AllCategories']);
  }


  }


