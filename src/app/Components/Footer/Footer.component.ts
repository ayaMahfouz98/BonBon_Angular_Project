import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-Footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.css']
})

export class FooterComponent implements OnInit {
  currentLang: any;

  constructor(public translate: TranslateService) {
    this.currentLang = localStorage.getItem('currLanguage') || 'en';
    this.translate.use(this.currentLang);
  }

  ngOnInit() {
  }

  changeCurrLang(lang:any){
    this.translate.use(lang);
    localStorage.setItem('currLanguage', lang);
  }

}
