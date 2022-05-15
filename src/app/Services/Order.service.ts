import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private HttpClient :HttpClient) { }

  BaseURL="https://localhost:7154/api/Orders";

  //admin
  GetAllOrders(){
    return this.HttpClient.get(this.BaseURL);
  }
  ChangeOrderState (id:any,orderState:any){
    return this.HttpClient.put(`${this.BaseURL}/changeOrderStateById/${id}`,orderState);
    }
   

  //user
    GetOrdersByUserId(id:any){
      return this.HttpClient.get(`${this.BaseURL}/GetOrdersByUserId/${id}`);
    }
    
  GetShoppingCartItems(id:any){
    return this.HttpClient.get(`${this.BaseURL}/GetShoppingCartItems/${id}`,id);
  }

  GetShoppingCart(){
    return this.HttpClient.get(`${this.BaseURL}/GetShoppingCart`,{responseType: 'text'});
  }

get shoppingCartExists(): boolean
{
  return  (localStorage.getItem('cartToken'))? true: false
}

  
  AddToShoppingCart(id:number, shoppingCartId:any){
    return this.HttpClient.post(`${this.BaseURL}/AddItem/${id}/${shoppingCartId}`,id);
  }

  RemoveItemFromShoppingCart(id:any,shoppingCartId:any){
    return this.HttpClient.post(`${this.BaseURL}/RemoveItem/${id}/${shoppingCartId}`,id);

  }
  RemoveItemTotalAmountShoppingCart(id:any,shoppingCartId:any){
    return this.HttpClient.post(`${this.BaseURL}/RemoveItemTotalAmount/${id}/${shoppingCartId}`,id);

  }
  /* best practise but error status code 415
  RemoveItemFromShoppingCart(id:any,shoppingCartId:any){
    return this.HttpClient.post(`${this.BaseURL}/RemoveItem/${id}`,shoppingCartId,{headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }
*/

  CompleteOrder(email:any,shoppingCartId:any){
    return this.HttpClient.post(`${this.BaseURL}/completerOrder/${email}/${shoppingCartId}`,email);
  }
  GetOrderDetails(id:any){
    return this.HttpClient.get(`${this.BaseURL}/GetOrderDetails/${id}`);
  }
  GetOrderTotal(shoppingCartId:any){
    return this.HttpClient.get(`${this.BaseURL}/GetShoppingCartTotal/${shoppingCartId}`);
  }


  /*************************Component Services*******************************/
  decreaseAmount(pd:any){
    if(pd.amount != 1)
         pd.amount--;
  }

}
