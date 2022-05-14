import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
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
  // userDetails: any;
  isUserLogged: boolean;
  Pname: string = 'Search';
  CategoryId: any;
  Email: any;
  UserEmail: any;
  AllCategories: any;

  @Output() myEvent = new EventEmitter();

  constructor(private userService: UserService, private router: Router, private CategoryService: CategoryService, private activatedRoute: ActivatedRoute) {
    this.isUserLogged = this.userService.isUserLogged;
    this.Email = this.userService.UserEmail;
  }


  ngOnChanges(): void {
    this.SendName(this.Pname);

  }

  ngOnInit() {
    // const storage_google = localStorage.getItem('google_auth');
    // const storage_facebook = localStorage.getItem('facebook_auth');

    // if(storage_google){
    //   // this.userDetails = JSON.parse(storage_google);
    //   this.Email = JSON.parse(storage_google).email;
    // } else{
    //   this.Logout();
    // }

    // if(storage_facebook){
    //   // this.userDetails = JSON.parse(storage_facebook);
    //   this.Email = JSON.parse(storage_facebook).email;
    // } else{
    //   this.Logout();
    // }

    this.UserEmail = this.Email;
    // console.log(this.UserEmail);

    this.CategoryService.GetAllCategories().subscribe(
      (data:any) => {
        this.AllCategories = data;
      },
      (err:any) => {
        console.log(err);
      }
    );

    this.userService.getloggedStatus().subscribe((status:any) => {
      this.isUserLogged = status;
      console.log(this.isUserLogged);
    });

    
  }

  Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    // localStorage.removeItem('google_auth');
    // localStorage.removeItem('facebook_auth');
    localStorage.clear();

    this.userService.Logout().subscribe();
    this.isUserLogged = this.userService.isUserLogged;
    console.log(this.isUserLogged)
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

  GetProductByCategory() {
    this.CategoryId = this.activatedRoute.snapshot.params["id"];
    this.router.navigate([`/SearchByCategory/${this.CategoryId}`]);
    window.location.reload();

  }
}
