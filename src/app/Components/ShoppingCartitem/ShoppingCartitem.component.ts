import { Component, OnInit, Input, EventEmitter, Output,OnChanges } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { OrderService} from 'src/app/Services/Order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ShoppingCartitem',
  templateUrl: './ShoppingCartitem.component.html',
  styleUrls: ['./ShoppingCartitem.component.css']
})
export class ShoppingCartitemComponent implements OnInit {
  quantity:any;
  product:any;
  OrderPrice:any;
  @Input() pd:any;
  CartID:any;
  Alert:any;

  @Output() totalPriceOnChange: EventEmitter<number>;

  constructor(private productService:ProductsService,private orderService:OrderService,private router:Router) {
   this.totalPriceOnChange = new EventEmitter<number>();
  this.Alert = " ";
  }
  ngOnInit() {
  
  }
          /**To be handled in services */
  increaseAmount(){
    this.productService.GetProductById(this.pd.product.id).subscribe(
      (data)=>{
        this.product = data;
        this.quantity = this.product.quantity;
        if(this.pd.amount < this.quantity){
          this.pd.amount++;
          this.OrderPrice = this.pd.product.price;
          this.totalPriceOnChange.emit(this.OrderPrice);
          this.orderService.AddToShoppingCart(this.pd.product.id,localStorage.getItem('cartToken')).subscribe();
        }
        else{
          this.Alert = "No enough Quantity available!";
        }
      }
    );
  }

  removeItem(){
    if(this.pd.amount != 1){
      this.pd.amount--;
      this.OrderPrice = -1 * this.pd.product.price;
      this.totalPriceOnChange.emit(this.OrderPrice);
      this.Alert = "";
      this.orderService.RemoveItemFromShoppingCart(this.pd.product.id,localStorage.getItem('cartToken')).subscribe();
    }
    if(this.pd.amount == 0)
      this.removeItemTotalAmount()
  }

  removeItemTotalAmount(){
    this.orderService.removeItemTotalAmount(this.pd.product.id,localStorage.getItem('cartToken'));
    /*this.router.navigateByUrl('/', {skipLocationChange: false}).then(() => {
      this.router.navigate(["Cart"]);
  });*/
  window.location.reload();
  }


}
