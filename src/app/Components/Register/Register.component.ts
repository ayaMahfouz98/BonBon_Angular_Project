import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { isEmpty } from 'rxjs';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})

export class RegisterComponent implements OnInit {
   Confirmpassword = '';
   Password = '';
   Email = '';
   User = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  Register(
    username: any,
    email: any,
    password: any,
    confirmPassword: any,
    profileImage: any,
    gender: any
  )
  {
    let user = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      profileImage: profileImage||null,
      gender: gender,
    };


    if (!(email == '')) {
      if (password == confirmPassword) {
          this.userService.Register(user).subscribe();
          //this.router.navigate(['/Login']); ================>   TODO ----> REDIRECT TO HOME
      }
    }
  }

  Add(email:any, username:any, password:any, confirmPassword:any, imgUrl:any, gender:any){
    let user = {
      "username": username,
      "email": email,
      "password": password,
      "confirmPassword": confirmPassword,
      "profileImage": imgUrl,
      "gender": gender,
      "role": null
    }
    this.userService.Register(user).subscribe();
  }

}
