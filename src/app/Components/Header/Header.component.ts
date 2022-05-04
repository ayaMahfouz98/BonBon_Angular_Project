import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {

  Pname:string = "Search";

  @Output() myEvent = new EventEmitter();

  constructor(private router: Router) { }

  ngOnChanges(): void {

    this.SendName(this.Pname);
  }

  ngOnInit() {
  }

  SendName(Pname:string){

    console.log(Pname)
    if( this.Pname ==""){
      this.router.navigate(['/Products']);
    }else{
      this.myEvent.emit(this.Pname);
      this.router.navigate([`/searchProduct/${Pname}`]);
    }
  }

}