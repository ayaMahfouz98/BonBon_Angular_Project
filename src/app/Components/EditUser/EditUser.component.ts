import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-EditUser',
  templateUrl: './EditUser.component.html',
  styleUrls: ['./EditUser.component.css']
})

export class EditUserComponent implements OnInit {
  isNewRoleClicked = true;
  userEmail: any;
  user: any;
  Role: any;
  AllRoles: any;

  constructor(private ActivatedRoute: ActivatedRoute, private router: Router, private UserService: UserService) {
    this.userEmail = ActivatedRoute.snapshot.params['email'];
    // this.Role = "Role";
  }

  ngOnInit() {
    this.UserService.GetUserProfile(this.userEmail).subscribe(
      (data) => {
        this.user = data;
        this.Role = this.user.role;
      },
      (err) => {
        console.log(err);
      }
    );

  }

  GetRoles(){
    this.UserService.GetRoles().subscribe(
      (data) => {
        this.AllRoles = data;
        // console.log(this.AllRoles.roles);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  AddRole(event:any) {
    const role = event.target.value;
    console.log(role);
    this.UserService.AddRole(role).subscribe();
    this.Role = role;
    this.isNewRoleClicked = !this.isNewRoleClicked;
    console.log("New role entered: ", event.target.value);
  }


  EditRole(role: any) {
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

      "role": role
    };

    this.UserService.EditRole(this.user.email, user).subscribe();

    //this.router.navigate(['/AllCategories']);
  }


}


