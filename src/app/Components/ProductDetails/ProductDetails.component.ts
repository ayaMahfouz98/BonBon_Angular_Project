import { HttpClient } from '@angular/common/http';


import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { OrderService } from 'src/app/Services/Order.service';
import { UserService } from 'src/app/Services/User.service';

//import { serialize } from 'v8';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ProductId: any;
  Product: any;
  ProductFromApi: any;
  quantity: any;
  OrderPrice: any;
  cartItems: any;
  enableAdd = true;
  isLoggedIn: any;
  @Output() totalPriceOnChange: EventEmitter<number>;

  rating: any;
  ProductItem: any;
  isUserLogged: any;
  UserID: any;
  role: any;

  constructor(private ActivatedRoute: ActivatedRoute, private router: Router, private service: ProductsService, private orderService: OrderService, private userService: UserService) {
    this.ProductId = ActivatedRoute.snapshot.params["id"];
    this.isUserLogged = this.userService.isUserLogged;

    this.UserID = this.userService.UserId;
    this.totalPriceOnChange = new EventEmitter<number>();
    if(localStorage.getItem('cartToken') == null)
        this.cartItems = orderService.GetShoppingCartItems(localStorage.getItem('cartToken')).subscribe();
  }

  ngOnInit() {
    /*
    Array(this.cartItems).forEach( (element: any)=>{
      if(element.id == this.ProductId)
      this.ProductItem = element;
     });


     */

    this.userService.GetUserById(this.UserID).subscribe(
      (data: any) => {
        if (data != null)
          this.role = data.role;
      },
      (err) => {
        console.log(err);
      }
    );

    this.userService.getloggedStatus().subscribe((status: any) => {
      this.isUserLogged = status;
    })
    this.service.GetProductById(this.ProductId).subscribe(

      (data) => {
        this.Product = data;
        this.quantity = this.Product.quantity;
        this.rating = this.Product.overAllRating;
      },
      (err) => { console.log(err) }
    );
  }

  AddToCart() {
    this.service.GetProductById(this.Product.id).subscribe(
      (data) => {
        this.Product = data;
        this.quantity = this.Product.quantity;
        if (this.Product.amount == undefined) {
          this.Product.amount = 0;
          this.enableAdd = true;
        }
        if (this.Product.amount < this.quantity) {
          this.Product.amount++;
          this.OrderPrice = this.Product.price;
          this.totalPriceOnChange.emit(this.OrderPrice);
          this.orderService.AddToShoppingCart(this.Product.id, localStorage.getItem('cartToken')).subscribe();
          /*this.router.navigateByUrl('/', {skipLocationChange: false}).then(() => {
            this.router.navigate(["Products/"+this.ProductId]);
        });*/
        }
        else {
          this.enableAdd = false;
        }
      }
    );
  }


  Delete(id: any) {
    this.service.DeleteProduct(id).subscribe();

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(["Products"])
    );
  }

}
