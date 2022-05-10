import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  headerFooter: boolean | undefined;

  constructor(private router:Router){}

  ngOnInit() {
    this.router.events .subscribe((event) => { if (event instanceof NavigationEnd) { this.headerFooter = (event.url !== '/Login') } });
  }
  title = 'BONBON';
  name:any;
  UserEmail:any;

  GetData(data:any){
    console.log(data)
    this.name=data;

    }

    // GetUserEmail(data:any){
    //  this.UserEmail=data;
    //  console.log(data)
    // }
}

