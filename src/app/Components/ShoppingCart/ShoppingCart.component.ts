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
  cartNotEmpty:any;
  recievedOrderPrice:any  = 0;

  constructor( private orderService :OrderService ) { 
    if(this.orderService.shoppingCartExists == false){
      this.orderService.GetShoppingCart().subscribe(
        (data:any)=>{
          this.currentshoppingCart = data;
          localStorage.setItem('cartToken', data)
        });
     }
  }


  ngOnInit() {

    this.orderService.GetShoppingCartItems(localStorage.getItem('cartToken')).subscribe(
      (data:any)=>{
        this.shoppingCartItems=data;
        if(this.shoppingCartItems.length!=0){
          this.cartNotEmpty = true;
          this.recievedOrderPrice =  this.orderService.PrdListTotalCost(this.shoppingCartItems);
        }
      }
      )}
  ngOnChanges(){}

CompleteOrder(){
  this.orderService.CompleteOrder(localStorage.getItem('email'),localStorage.getItem('cartToken')).subscribe();
      window.location.reload();    
}

onAmountChange(totalPriceOnChange:number){
  this.recievedOrderPrice += totalPriceOnChange;
}

}