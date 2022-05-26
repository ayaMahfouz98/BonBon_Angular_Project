import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  static cartTotal: number = 0;

  constructor(private HttpClient: HttpClient,private router:Router) { }

  BaseURL = "https://localhost:7154/api/Orders";

  //admin
  GetAllOrders() {
    return this.HttpClient.get(this.BaseURL);
  }
  ChangeOrderState(id: any, orderState: any) {
    return this.HttpClient.put(`${this.BaseURL}/changeOrderStateById/${id}`, orderState);
  }


  //user
  GetOrdersByUserId(id: any) {
    return this.HttpClient.get(`${this.BaseURL}/GetOrdersByUserId/${id}`);
  }

  GetShoppingCartItems(id: any) {
    return this.HttpClient.get(`${this.BaseURL}/GetShoppingCartItems/${id}`);
  }

  GetShoppingCart() {
    return this.HttpClient.get(`${this.BaseURL}/GetShoppingCart`, { responseType: 'text' });
  }

  get shoppingCartExists(): boolean {
    return (localStorage.getItem('cartToken')) ? true : false
  }

  DeleteShoppingCart(shoppingCartId: any) {
    return this.HttpClient.delete(`${this.BaseURL}/Orders/DeleteCart/${shoppingCartId}`);
  }

  AddToShoppingCart(id: number, shoppingCartId: any) {
    return this.HttpClient.post(`${this.BaseURL}/AddItem/${id}/${shoppingCartId}`, id);
  }

  RemoveItemFromShoppingCart(id: any, shoppingCartId: any) {
    return this.HttpClient.post(`${this.BaseURL}/RemoveItem/${id}/${shoppingCartId}`, id);

  }
  RemoveItemTotalAmountShoppingCart(id: any, shoppingCartId: any) {
    return this.HttpClient.post(`${this.BaseURL}/RemoveItemTotalAmount/${id}/${shoppingCartId}`, id);

  }
  /* best practise but error status code 415
  RemoveItemFromShoppingCart(id:any,shoppingCartId:any){
    return this.HttpClient.post(`${this.BaseURL}/RemoveItem/${id}`,shoppingCartId,{headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }
*/

  CompleteOrder(email: any, shoppingCartId: any) {
    return this.HttpClient.post(`${this.BaseURL}/completerOrder/${email}/${shoppingCartId}`, email);
  }

  DeleteOrder(id: any) {
    return this.HttpClient.delete(`${this.BaseURL}/DeleteOrder/${id}`, id);
  }

  GetOrderDetails(id: any) {
    return this.HttpClient.get(`${this.BaseURL}/GetOrderDetails/${id}`);
  }

  /*************************Component Services*******************************/
  removeItemTotalAmount(productId: any, cartToken: any) {
    this.RemoveItemTotalAmountShoppingCart(productId, cartToken).subscribe();
     //window.location.reload();
   // this.router.navigate(['/Cart']);

  }



  GetOrderTotal(id: any): Observable<string> {
    let shoppingCartItems: any[];
    var subject = new Subject<string>();
    let cartTotal = 0;
    this.GetShoppingCartItems(id).subscribe(
      (data: any) => {
        shoppingCartItems = data;
        shoppingCartItems.forEach(element => {
          cartTotal += element.amount * element.product.price
        }
        );
        subject.next(cartTotal.toString());
      })
    return subject.asObservable();
  }


  PrdListTotalCost(orderProducts: any[]) {
    let total = 0;
    orderProducts?.forEach(element => {
      console.log(element);
      total = total + (Number(element.amount) * Number(element.product.price));
    })
    return total;
  }

  /***********To prevent inserting more than the quantity************/
  /* productAmountInShoppingCart(id:any) : Observable<string>{
    let shoppingCartItems:any[];
    var subject = new Subject<string>();
    let productAmount = 0;
    this.GetShoppingCartItems(localStorage.getItem('cartToken')).subscribe(
      (data:any)=>{
         shoppingCartItems=data;
         shoppingCartItems.forEach(element => {
           if(element.id == id){
            productAmount = element.amount
            console.log("cccddd"+element.amount)
           }
         });
         subject.next(productAmount.toString());
      })
      return subject.asObservable();
   }*/
}
