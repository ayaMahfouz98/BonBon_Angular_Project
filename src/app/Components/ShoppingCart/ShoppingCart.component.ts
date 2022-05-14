import { Component, OnInit,OnChanges } from '@angular/core';
import { OrderService } from 'src/app/Services/Order.service';

@Component({
  selector: 'app-ShoppingCart',
  templateUrl: './ShoppingCart.component.html',
  styleUrls: ['./ShoppingCart.component.css']
})
export class ShoppingCartComponent implements OnInit,OnChanges {
  shoppingCartItems:any;
  currentshoppingCart:any;
  total:any;
  cartNotEmpty:any;
  constructor( private orderService :OrderService ) { 

    if(this.orderService.shoppingCartExists == false){
      this.orderService.GetShoppingCart().subscribe(
        (data:any)=>{
          this.currentshoppingCart = data;
          console.log(data);

          localStorage.setItem('cartToken', data)
        });
    }
  }


  ngOnInit() {

    this.orderService.GetShoppingCartItems(localStorage.getItem('cartToken')).subscribe(
      (data:any)=>{
        this.shoppingCartItems=data;
        if(this.shoppingCartItems.length!=0)
          this.cartNotEmpty = true;
      })
  }
  ngOnChanges(){}

  
CompleteOrder(){
  this.orderService.CompleteOrder(localStorage.getItem('email'),localStorage.getItem('cartToken')).subscribe();
  this.total =this.orderService. GetOrderTotal(localStorage.getItem('cartToken')).subscribe();
  console.log("ff"+this.total);
}

}