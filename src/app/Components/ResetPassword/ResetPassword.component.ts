import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-ResetPassword',
  templateUrl: './ResetPassword.component.html',
  styleUrls: ['./ResetPassword.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  message:any;

  NewPassword='';
  ConfirmPassword='';
  Email='';

  ResetPassword(email:any,newpassword:any,confirmpassword:any){
    let model={email:email,newpassword:newpassword,confirmpassword:confirmpassword}
    this.userService.ResetPassword(model).subscribe();


  }

}
