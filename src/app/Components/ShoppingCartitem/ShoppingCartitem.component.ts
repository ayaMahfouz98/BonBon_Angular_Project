import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { OrderService} from 'src/app/Services/Order.service';

@Component({
  selector: 'app-ShoppingCartitem',
  templateUrl: './ShoppingCartitem.component.html',
  styleUrls: ['./ShoppingCartitem.component.css']
})
export class ShoppingCartitemComponent implements OnInit {
  quantity:any;
  product:any;
  constructor(private productService:ProductsService,private orderService:OrderService) {

  }

  ngOnInit() {

  }
  @Input() pd:any;
 
  increaseAmount(){

    this.productService.GetProductById(this.pd.product.id).subscribe(
      (data)=>{
        this.product = data;
        this.quantity = this.product.quantity;
        if(this.pd.amount != this.quantity){
          this.pd.amount++;
          this.orderService.AddToShoppingCart(this.pd.product.id,localStorage.getItem('cartToken')).subscribe();
        }
      }
    );
   
  }
  removeItem(){
    this.pd.amount--;
    this.orderService.RemoveItemFromShoppingCart(this.pd.product.id,localStorage.getItem('cartToken')).subscribe();
  }
  removeItemTotalAmount(){
    this.pd.amount = 0;
    this.orderService.RemoveItemTotalAmountShoppingCart(this.pd.product.id,localStorage.getItem('cartToken')).subscribe();

  }
}
