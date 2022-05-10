import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ResetPassword',
  templateUrl: './ResetPassword.component.html',
  styleUrls: ['./ResetPassword.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  message:any;

  NewPassword='';
  ConfirmPassword='';
  Email='';

  ResetPassword(email:any,newpassword:any,confirmpassword:any){

  }

}
