import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { isEmpty } from 'rxjs';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})

export class RegisterComponent implements OnInit {
   Confirmpassword = '';
   Password = '';
   Gender = '';
   Email = '';
   User = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}
  message:any;
  


  Register(
    username: any,
    email: any,
    password: any,
    confirmPassword: any,
    profileImage: any,
    gender:any
    ) 
    {
    let user = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      profileImage: profileImage|| null,
      gender: this.Gender,
    };
  
    if ((email != '')&&(username != '')&&(this.Gender != '')) {
      if (password == confirmPassword) {
    this.userService.GetUserByEmailforRegister(user).subscribe(
      (data:any)=>{
            if(data==null) 
            {
              this.userService.Register(user).subscribe();
              this.router.navigate(['/Login']);// ================>   TODO ----> REDIRECT TO HOME
            }
            else
            {
              this.message="This email is taken, Please enter another one"
            }
          
        },
      
        err => {
          if (err.status == 400)
          console.log('Incorrect username or password.', 'Authentication failed.')
          else
          console.log(err);
            }
                )
      }
    }
    else
    {
      this.message="You miss some fields, Please enter all required data"
    }


  }

  }
