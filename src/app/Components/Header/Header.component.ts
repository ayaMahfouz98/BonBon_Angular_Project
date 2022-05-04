import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
  Pname:string = " ";
  @Output() myEvent = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  SendName(Pname:any){

    if(this.Pname==""){
      this.router.navigate(['/Products']);
    }else{
      this.myEvent.emit(this.Pname);
      console.log(this.Pname);
      this.router.navigate([`/searchProduct/${Pname}`]);
    }
  }

}
