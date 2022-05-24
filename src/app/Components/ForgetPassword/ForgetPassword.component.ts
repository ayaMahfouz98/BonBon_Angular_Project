import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User.service';

declare function confirmMessage(): any;

@Component({
  selector: 'app-ForgetPassword',
  templateUrl: './ForgetPassword.component.html',
  styleUrls: ['./ForgetPassword.component.css']
})

export class ForgetPasswordComponent implements OnInit {

  EmailMSG: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  sendEmail(email: any) {
    if (email != "") {
      this.userService.GetUserProfile(email).subscribe(
        (data: any) => {
          if (data == null) {
            this.EmailMSG = "This User is not Found";
          }
          else {
            confirmMessage();
            this.userService.ForgetPassword(email).subscribe();
            this.router.navigate([`/Login`]);
          }
        },
        (err: any) => { this.EmailMSG = "This User is not Found"; }
      )
    }
    else {
      this.EmailMSG = "Please Enter Your Email";
    }
  }

}
