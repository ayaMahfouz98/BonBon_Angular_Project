import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-ResetPassword',
  templateUrl: './ResetPassword.component.html',
  styleUrls: ['./ResetPassword.component.css']
})

export class ResetPasswordComponent implements OnInit {

  PasswordMSG: any;
  EmailMSG: any;
  token: any;
  message: any;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    // this.token = this.route.snapshot.params['token'];
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  ngOnInit() {
  }

  NewPassword = '';
  ConfirmPassword = '';
  Email = '';

  ResetPassword(email: any, newpassword: any, confirmpassword: any) {
    let model = { token: this.token, email: email, newpassword: newpassword, confirmpassword: confirmpassword }

    this.userService.ResetPassword(model).subscribe(
      (data: any) => {
        if (data != null) {
          this.router.navigate(['/Login']);
        }
        else {
          this.message = "This Email is not found"
        }
      }
    );

    if(this.Email == '')
      this.EmailMSG = "Please enter your Email";

    if(this.NewPassword == '' || this.NewPassword.length < 5)
      this.PasswordMSG = "Password must have at least one non-alphanumeric, an uppercase, and a lowercase characters";

  }

}
