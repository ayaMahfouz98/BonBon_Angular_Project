import { Component, OnInit,OnChanges } from '@angular/core';
import { OrderService } from 'src/app/Services/Order.service';

@Component({
  selector: 'app-ShoppingCart',
  templateUrl: './ShoppingCart.component.html',
  styleUrls: ['./ShoppingCart.component.css']
})
export class ShoppingCartComponent implements OnInit,OnChanges {
  total:number = 0;
  shipping: number = 0;
  constructor( private orderService :OrderService ) { 

  }
  shoppingCartItems:any;

  ngOnInit() {
    this.orderService.GetShoppingCartItems().subscribe(
      (data:any)=>{
        localStorage.setItem('cartToken', data.shoppingCartId)
        console.log(data)
        this.shoppingCartItems=data;
      }
     )
   
  }
  ngOnChanges(){

}
}