import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
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
