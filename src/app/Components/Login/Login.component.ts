import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User.service';
import { ActivatedRoute } from '@angular/router';
import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() myEvent = new EventEmitter();

  message: any;
  PasswordMSG: any;
  isUserLogged: boolean = false;

  Password = '';
  Email = '';

  constructor(private userService: UserService, private router: Router, private socialAuthService: SocialAuthService) {
    this.isUserLogged = this.userService.isUserLogged;
  }

  ngOnInit() {
  }

  Login() {
    let user = {
      email: this.Email,
      password: this.Password
    };

    if ((this.Email != '') && (this.Password != '')) {
      this.userService.GetUserByEmailforLogin(user).subscribe(
        (data: any) => {
          if (data == null) {
            this.message = "This User is not found";
          }
          else {
            localStorage.setItem('email', data.email)
            localStorage.setItem('id', data.id)
            this.userService.Login(user).subscribe(
              (data: any) => {
                localStorage.setItem('token', data.token);
                this.isUserLogged = this.userService.isUserLogged;
                this.router.navigate(['../Home']) //================>   TODO ----> REDIRECT TO HOME
              },
              (err: any) => {
                if (err.status == 400)
                  console.log('Incorrect username or password.', 'Authentication failed.')
                else
                  console.log(err);
              }
            );
          }
        },
        (err: any) => { this.PasswordMSG = err.error.text; }
      )
    }
    else {
      this.message = "You miss some fields, Please enter all required data"
    }
  }

  // signInWithGoogle(){
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then( (data:any) => {
  //     console.log(data);
  //     localStorage.setItem('google_auth', JSON.stringify(data));
  //     this.isUserLogged = this.userService.isUserLogged;
  //     this.router.navigate(['/Home']);
  //   });
  // }

  // signInWithFacebook(){
  //   this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then( (data:any) => {
  //     localStorage.setItem('facebook_auth', JSON.stringify(data));
  //     this.isUserLogged = this.userService.isUserLogged;
  //     this.router.navigate(['/Home']);
  //   });
  // }

}
