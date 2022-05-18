import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-AboutUsData',
  templateUrl: './AboutUsData.component.html',
  styleUrls: ['./AboutUsData.component.css']
})
export class AboutUsDataComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
