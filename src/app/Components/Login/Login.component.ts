import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() myEvent=new EventEmitter();
 
  isUserLogged: boolean=false;

  constructor(private userService: UserService, private router: Router/*,private toastr: ToastrService*/) {
    this.isUserLogged= this.userService.isUserLogged;
  
  }
 
  ngOnInit(){
  }


  message:any;

  Password='';
  Email='';
  
  Login() {
  
    let user = {
      email: this.Email,
      password: this.Password
    };

    if ((this.Email != '') && (this.Password != '')) {
    this.userService.GetUserByEmailforLogin(user).subscribe(

      (data:any)=>{
         if(data!=null)
        {
          localStorage.setItem('email', data.email)
        
          this.userService.Login(user).subscribe(
            (data:any)=>{
              localStorage.setItem('token', data.token)
              this.router.navigate(['/Home']); //================>   TODO ----> REDIRECT TO HOME
            },
            err => {
              if (err.status == 400)
              console.log('Incorrect username or password.', 'Authentication failed.')
              else
              console.log(err);
            }
            );
            this.isUserLogged= this.userService.isUserLogged;  
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
