import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {}
 
  ngOnInit(){}

  message:any;

  Password='';
  Email='';
  
  //userExist={};
  Login() {
  
    let user = {
      email: this.Email,
      password: this.Password
    };

    if ((this.Email != '') && (this.Password != '')) {
    this.userService.GetUserByEmailforLogin(user).subscribe(

      (data)=>{
  
      console.log(data)
       if(data!=null)
        {
            this.userService.Login(user).subscribe();
             this.router.navigate(['/Error']); //================>   TODO ----> REDIRECT TO HOME
      }
        else
        {
          this.message="This User is not found"
        }
    },
      (err) =>{console.log(err)})
  }
      else
      {
        this.message="You miss some fields, Please enter all required data"
      }
  }

}
