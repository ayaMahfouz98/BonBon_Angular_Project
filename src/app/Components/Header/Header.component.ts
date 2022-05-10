import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { CategoryService } from 'src/app/Services/Category.service';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  isUserLogged:boolean;

  Pname: string = 'Search';
  CategoryId:any;
  Email:any;

  @Output() myEvent = new EventEmitter();

  constructor(private userService:UserService,private router:Router, private CategoryService: CategoryService ,private activatedRoute:ActivatedRoute)
  {
    this.isUserLogged=this.userService.isUserLogged;
    this.Email=this.userService.UserEmail;
    console.log(this.Email)
  }

     AllCategories: any;
     
     ngOnChanges(): void {
       this.SendName(this.Pname);
       
      }
      UserEmail:any;
      ngOnInit() {
    this.UserEmail=this.Email;
    this.CategoryService.GetAllCategories().subscribe(
      (data) => {
        //console.log(data);
        this.AllCategories = data;
      },
      (err) => {
        console.log(err);
      }
    );


    this.userService.getloggedStatus().subscribe(status=>{
      this.isUserLogged=status;
      console.log(this.isUserLogged)
    });
  }

 Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('id');

    localStorage.clear();

    this.userService.Logout().subscribe();
    this.isUserLogged= this.userService.isUserLogged;
  }


  SendName(Pname: string) {
    console.log(Pname);
    if (Pname == '') {
      this.router.navigate(['/Products']);
    } else {
      this.myEvent.emit(Pname);
      this.router.navigate([`/searchProduct/${Pname}`]);
    }
  }

  GetProductByCategory(){
    this.CategoryId= this.activatedRoute.snapshot.params["id"];
    this.router.navigate([`/SearchByCategory/${this.CategoryId}`]);
    window.location.reload();

  }
}
