import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-ResetPassword',
  templateUrl: './ResetPassword.component.html',
  styleUrls: ['./ResetPassword.component.css']
})

export class ResetPasswordComponent implements OnInit {
  token: any;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    // this.token = this.route.snapshot.params['token'];
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  ngOnInit() {
  }
  message: any;

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


  }

}
