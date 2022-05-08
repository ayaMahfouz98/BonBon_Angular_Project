import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ShoppingCartitem',
  templateUrl: './ShoppingCartitem.component.html',
  styleUrls: ['./ShoppingCartitem.component.css']
})
export class ShoppingCartitemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() pd:any;

}
