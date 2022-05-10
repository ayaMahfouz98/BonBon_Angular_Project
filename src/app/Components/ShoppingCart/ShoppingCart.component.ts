import { Component, OnInit,OnChanges } from '@angular/core';
import { OrderService } from 'src/app/Services/Order.service';

@Component({
  selector: 'app-ShoppingCart',
  templateUrl: './ShoppingCart.component.html',
  styleUrls: ['./ShoppingCart.component.css']
})
export class ShoppingCartComponent implements OnInit,OnChanges {

  constructor( private orderService :OrderService ) { 

  }
  shoppingCartItems:any;

  ngOnInit() {
    this.orderService.GetShoppingCartItems().subscribe(
      (data)=>{
        console.log(data)
        this.shoppingCartItems=data;
      }
     )
   
  }
  ngOnChanges(){
}
}