import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BONBON';
  name:any;

  GetData(data:any){
    console.log(data)
    this.name=data;

    }
}

