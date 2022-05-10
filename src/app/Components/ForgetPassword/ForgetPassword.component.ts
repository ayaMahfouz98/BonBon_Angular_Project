import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-ForgetPassword',
  templateUrl: './ForgetPassword.component.html',
  styleUrls: ['./ForgetPassword.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }

  sendEmail(email:any){
    if(email!=""){
    this.userService.ForgetPassword(email).subscribe();
    // this.router.navigate([`/ResetPassword`]);

    console.log(email);
  }
  else{
    console.log("Please Enter Your Email");
  }
}

}
