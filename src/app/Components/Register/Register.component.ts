import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  Register(
    email: any,
    password: any,
    confirmPassword: any,
    profileImage: any,
    gender: any
  ) {
    let user = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      profileImage: profileImage,
      gender: gender,
    };
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    console.log(profileImage);
    console.log(gender);

    console.log(user);

    if (!(email == '')) {
      if (password == confirmPassword) {
        if (email == '') {
          this.userService.Register(user).subscribe();
          this.router.navigate(['/Login']);
        }
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
