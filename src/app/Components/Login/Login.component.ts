import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}
  Password='';
  Login(
    email: any,
    password: any
  ) {
    let user = {
      email: email,
      password: password
    };


    if ((email != '') && (password != '')) {
      
          this.userService.Login(user).subscribe();
          this.router.navigate(['/Error']); //================>   TODO ----> REDIRECT TO HOME
    
    }
  }

}
