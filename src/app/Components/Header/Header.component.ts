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
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css'],
})

export class HeaderComponent implements OnInit, OnChanges {
  // userDetails: any;
  storage_google: any;
  storage_facebook: any;
  isUserLogged: boolean;
  Pname: string = 'Search';
  CategoryId: any;
  Email: any;
  UserEmail: any;
  AllCategories: any;
  ID:any;
  user:any;
  role?:any;
  @Output() myEvent = new EventEmitter();

  constructor(private userService: UserService, private router: Router, private CategoryService: CategoryService, private activatedRoute: ActivatedRoute, public translate: TranslateService) {
    this.isUserLogged = this.userService.isUserLogged;
    this.Email = this.userService.UserEmail;
    this.ID=this.userService.UserId;

  }


  ngOnChanges(): void {
    this.SendName(this.Pname);

  }

  ngOnInit() {

    this.UserEmail = this.Email;

    this.storage_google = localStorage.getItem('google_auth');
    this.storage_facebook = localStorage.getItem('facebook_auth');

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

      if(this.storage_google)
        this.isUserLogged = true;

      if(this.storage_facebook)
        this.isUserLogged = true;

    });

    this.userService.GetUserById(this.ID).subscribe(
      (data:any)=>{
        if(data != null)
          this.user = data.userName;
          this.role = data.role;
      },
      (err)=>{
        this.user = "";
      }
    );

    if(this.storage_google){
      // this.userDetails = JSON.parse(storage_google);
      this.user = JSON.parse(this.storage_google).name;
    }

    if(this.storage_facebook){
      // this.userDetails = JSON.parse(storage_facebook);
      this.user = JSON.parse(this.storage_facebook).name;
    }

  }


  Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    localStorage.removeItem('google_auth');
    localStorage.removeItem('facebook_auth');
    localStorage.clear();

    this.userService.Logout().subscribe();
    this.isUserLogged = this.userService.isUserLogged;
    // console.log(this.isUserLogged)
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
