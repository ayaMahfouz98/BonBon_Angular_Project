import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-AllUsers',
  templateUrl: './AllUsers.component.html',
  styleUrls: ['./AllUsers.component.css']
})
export class AllUsersComponent implements OnInit {
AllUsers:any;
Role="Change the role";
  constructor(private userService :UserService) { }

  ngOnInit() {
    this.userService.GetAllUsers().subscribe(
      (data) => {
        console.log(data);
        this.AllUsers = data;
      },
      (err) => {
        console.log(err);
      }
    );

  }
  Delete(email:any){
    this.userService.DeleteUserProfile(email).subscribe();
    window.location.reload();

  }


}
